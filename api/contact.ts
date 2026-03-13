// @ts-ignore
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Apenas aceita POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, projectType, message } = req.body;

    // Validação básica
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Separar nome em firstname e lastname
    const nameParts = name.trim().split(' ');
    const firstname = nameParts[0];
    const lastname = nameParts.slice(1).join(' ') || nameParts[0];

    // Preparar dados para HubSpot
    const hubspotData: any = {
      properties: {
        firstname: firstname || 'Customer',
        lastname: lastname || 'Contact',
        email,
      },
    };

    // Adicionar telefone se fornecido
    if (phone && phone.trim()) {
      hubspotData.properties.phone = phone;
    }

    // Adicionar campos customizados (você precisa criar esses campos no HubSpot primeiro)
    if (projectType && projectType.trim()) {
      hubspotData.properties.project_type = projectType;
    }

    if (message && message.trim()) {
      hubspotData.properties.project_details = message;
    }

    console.log('📝 Sending to HubSpot:', JSON.stringify(hubspotData, null, 2));

    // Obter o token do HubSpot das variáveis de ambiente
    const hubspotToken = process.env.HUBSPOT_API_TOKEN || process.env.VITE_HUBSPOT_API_TOKEN;

    if (!hubspotToken) {
      console.error('HubSpot token not found in environment variables');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Fazer requisição para HubSpot API (sem problemas de CORS)
    const hubspotResponse = await fetch(
      'https://api.hubapi.com/crm/v3/objects/contacts',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${hubspotToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hubspotData),
      }
    );

    if (!hubspotResponse.ok) {
      let errorData: any = { message: 'Unknown error' };
      let errorText = '';
      try {
        const responseText = await hubspotResponse.text();
        errorText = responseText;
        errorData = JSON.parse(responseText);
      } catch (parseError) {
        errorData = { message: errorText || 'Could not parse error response' };
      }

      console.error('🔴 HubSpot API Error - Full Details:');
      console.error('Status:', hubspotResponse.status, hubspotResponse.statusText);
      console.error('Error Data:', JSON.stringify(errorData, null, 2));
      console.error('Sent Data:', JSON.stringify(hubspotData, null, 2));
      console.error('Has Token:', !!hubspotToken, 'Token Length:', hubspotToken?.length);

      // Se o contato já existe (409), atualizar em vez de criar
      if (hubspotResponse.status === 409) {
        return handleExistingContact(res, hubspotToken, email, hubspotData);
      }

      return res.status(hubspotResponse.status).json({
        error: 'Failed to save contact to HubSpot',
        hubspotStatus: hubspotResponse.status,
        hubspotStatusText: hubspotResponse.statusText,
        details: errorData,
        sentData: hubspotData,
        errorMessage: errorData.message || errorData.error || 'Unknown HubSpot error',
      });
    }

    const contactData = await hubspotResponse.json() as { id: string };

    return res.status(200).json({
      message: 'Contact saved successfully',
      contactId: contactData.id,
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

async function handleExistingContact(
  res: VercelResponse,
  hubspotToken: string,
  email: string,
  contactData: any
): Promise<VercelResponse | void> {
  try {
    // Buscar o ID do contato pelo email
    const searchResponse = await fetch(
      'https://api.hubapi.com/crm/v3/objects/contacts/search',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${hubspotToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  propertyName: 'email',
                  operator: 'EQ',
                  value: email,
                },
              ],
            },
          ],
          limit: 1,
        }),
      }
    );

    if (!searchResponse.ok) {
      return res.status(400).json({ error: 'Could not find existing contact' });
    }

    const searchData = await searchResponse.json() as { results: Array<{ id: string }> };
    if (!searchData.results || searchData.results.length === 0) {
      return res.status(400).json({ error: 'Contact not found' });
    }

    const contactId = searchData.results[0].id;

    // Atualizar o contato existente
    const updateResponse = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${hubspotToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      }
    );

    if (updateResponse.ok) {
      return res.status(200).json({
        message: 'Contact updated successfully',
        contactId,
      });
    }

    const errorData: any = await updateResponse.json();
    return res.status(updateResponse.status).json({
      error: 'Failed to update contact',
      details: errorData,
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Error updating contact',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

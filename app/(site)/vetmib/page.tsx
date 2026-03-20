import type { Metadata } from 'next'
import VetMibPage from '@/views/VetMib'

export const metadata: Metadata = {
  title: 'VetMib — Assistente IA para Clínicas Veterinárias',
  description: 'Transforme o WhatsApp da sua clínica numa receção automática 24/7. O VetMib agenda consultas, envia lembretes e responde aos clientes automaticamente.',
  alternates: { canonical: 'https://makeit.bot/vetmib/' },
  keywords: ['assistente veterinário', 'chatbot veterinária', 'agendamento automático', 'VetMib', 'WhatsApp veterinária'],
}

export default function Page() {
  return <VetMibPage />
}

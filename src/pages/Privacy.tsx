import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";

export default function PrivacyPage() {
  return (
    <Layout>
      <SEO
        title="Política de Privacidade — makeit.bot"
        description="Política de privacidade da makeit.bot. Saiba como coletamos, usamos e protegemos seus dados pessoais."
        keywords="política de privacidade makeit bot, LGPD automação comercial"
      />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Privacidade</h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.1}>
              <p className="text-muted-foreground mb-12">Última atualização: março de 2025</p>
            </ScrollReveal>

            <StaggerContainer className="prose prose-lg dark:prose-invert max-w-none">
              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">1. Informações que coletamos</h2>
                <p className="text-muted-foreground mb-4">
                  Coletamos informações que você nos fornece diretamente, como ao preencher o formulário
                  de contato ou enviar mensagem pelo WhatsApp. Isso pode incluir nome, e-mail, telefone
                  e qualquer outra informação que você optar por fornecer.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">2. Como usamos suas informações</h2>
                <p className="text-muted-foreground mb-4">Usamos as informações coletadas para:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Responder às suas solicitações e prestar atendimento</li>
                  <li>Enviar atualizações sobre projetos e comunicações relevantes</li>
                  <li>Melhorar nossos serviços e a experiência no site</li>
                  <li>Cumprir obrigações legais, incluindo a Lei Geral de Proteção de Dados (LGPD)</li>
                </ul>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">3. Compartilhamento de informações</h2>
                <p className="text-muted-foreground mb-4">
                  Não vendemos, negociamos ou transferimos suas informações pessoais para terceiros.
                  Podemos compartilhar dados com fornecedores de serviços de confiança que nos auxiliam
                  na operação do site e do negócio, desde que se comprometam a manter a confidencialidade.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">4. Segurança dos dados</h2>
                <p className="text-muted-foreground mb-4">
                  Implementamos medidas de segurança adequadas para proteger suas informações pessoais
                  contra acesso não autorizado, alteração, divulgação ou destruição. Nenhum método de
                  transmissão pela Internet é 100% seguro.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">5. Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Nosso site pode usar cookies para melhorar sua experiência de navegação. Você pode
                  optar por desabilitá-los nas configurações do seu navegador, embora isso possa afetar
                  algumas funcionalidades do site.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">6. Links de terceiros</h2>
                <p className="text-muted-foreground mb-4">
                  Nosso site pode conter links para sites de terceiros. Não nos responsabilizamos pelas
                  práticas de privacidade ou conteúdo desses sites externos.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">7. Seus direitos (LGPD)</h2>
                <p className="text-muted-foreground mb-4">
                  Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem o direito
                  de acessar, corrigir, excluir ou solicitar a portabilidade de seus dados pessoais.
                  Para exercer esses direitos, entre em contato pelo e-mail abaixo.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">8. Alterações nesta política</h2>
                <p className="text-muted-foreground mb-4">
                  Podemos atualizar esta política de privacidade periodicamente. Notificaremos sobre
                  alterações publicando a nova política nesta página com data de revisão atualizada.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">9. Contato</h2>
                <p className="text-muted-foreground mb-4">
                  Para dúvidas sobre esta Política de Privacidade, entre em contato:
                </p>
                <p className="text-muted-foreground">
                  E-mail: contato@makeit.bot<br />
                  Atendimento: Brasil — 100% remoto
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>
    </Layout>
  );
}

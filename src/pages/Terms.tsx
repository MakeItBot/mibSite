import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";

export default function TermsPage() {
  return (
    <Layout>
      <SEO
        title="Termos de Uso — makeit.bot"
        description="Termos de uso da makeit.bot. Condições para contratação dos serviços de automação comercial com WhatsApp."
        keywords="termos de uso makeit bot, contrato automação comercial whatsapp"
      />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Termos de Uso</h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.1}>
              <p className="text-muted-foreground mb-12">Última atualização: março de 2025</p>
            </ScrollReveal>

            <StaggerContainer className="prose prose-lg dark:prose-invert max-w-none">
              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground mb-4">
                  Ao contratar ou utilizar os serviços da makeit.bot, você aceita e concorda em cumprir
                  estes Termos de Uso. Se não concordar com estes termos, não utilize nossos serviços.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">2. Serviços</h2>
                <p className="text-muted-foreground mb-4">
                  A makeit.bot oferece serviços de automação comercial, incluindo bots de qualificação
                  de leads via WhatsApp, automação de follow-up, agendamento integrado com CRM e demais
                  soluções de automação do processo comercial. O escopo específico de cada projeto é
                  definido em acordos individuais.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">3. Acordos de Projeto</h2>
                <p className="text-muted-foreground mb-4">
                  Cada projeto é regido por um acordo separado que define escopo, prazo, entregáveis
                  e condições de pagamento. Esses acordos, em conjunto com estes Termos de Uso,
                  constituem o acordo completo entre as partes.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">4. Propriedade Intelectual</h2>
                <p className="text-muted-foreground mb-4">
                  Salvo disposição contrária em acordo de projeto:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>O cliente retém a propriedade de sua propriedade intelectual existente</li>
                  <li>Os entregáveis criados especificamente para o cliente são transferidos após o pagamento integral</li>
                  <li>A makeit.bot retém os direitos sobre ferramentas genéricas, metodologias e know-how</li>
                </ul>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">5. Condições de Pagamento</h2>
                <p className="text-muted-foreground mb-4">
                  As condições de pagamento são especificadas em cada acordo de projeto. Em geral,
                  os projetos requerem uma entrada antes do início, com o saldo vinculado a marcos
                  de entrega ou à conclusão do projeto. A garantia de prazo (14 dias) isenta a segunda
                  parcela em caso de atraso por responsabilidade exclusiva da makeit.bot.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">6. Confidencialidade</h2>
                <p className="text-muted-foreground mb-4">
                  Ambas as partes concordam em manter a confidencialidade de quaisquer informações
                  proprietárias compartilhadas durante o projeto, incluindo planos de negócios,
                  especificações técnicas e dados de clientes.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground mb-4">
                  A responsabilidade da makeit.bot é limitada ao valor pago pelo cliente pelos serviços
                  em questão. Não somos responsáveis por danos indiretos, incidentais ou consequenciais.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">8. Garantia</h2>
                <p className="text-muted-foreground mb-4">
                  Garantimos que nossos serviços serão executados de forma profissional, consistente com
                  os padrões do setor. Oferecemos 30 dias de suporte após a entrega para corrigir
                  problemas diretamente relacionados ao trabalho executado.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">9. Rescisão</h2>
                <p className="text-muted-foreground mb-4">
                  Qualquer das partes pode rescindir um acordo de projeto mediante aviso por escrito.
                  Em caso de rescisão, o cliente é responsável pelo pagamento de todo o trabalho
                  concluído até a data de rescisão.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">10. Lei Aplicável</h2>
                <p className="text-muted-foreground mb-4">
                  Estes termos são regidos pelas leis do Brasil. Quaisquer disputas serão resolvidas
                  no foro da comarca de São Paulo, SP.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">11. Alterações nos Termos</h2>
                <p className="text-muted-foreground mb-4">
                  Reservamos o direito de modificar estes termos a qualquer momento. As alterações
                  serão publicadas nesta página com data de revisão atualizada.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">12. Contato</h2>
                <p className="text-muted-foreground mb-4">
                  Para dúvidas sobre estes Termos de Uso, entre em contato:
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

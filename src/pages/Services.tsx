import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { MessageCircle, Bot, Zap, BarChart3, Check, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const WA_LINK =
  "https://wa.me/+554796605110?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20automa%C3%A7%C3%A3o%20comercial";

const services = [
  {
    icon: Bot,
    title: "Bot de Qualificação de Leads",
    heading: "Nunca perca um lead por falta de resposta",
    description:
      "Seu bot responde imediatamente a cada lead que chega no WhatsApp — qualquer hora do dia ou da noite. Faz as perguntas certas, identifica o perfil do cliente e entrega só os leads quentes para seu time.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    features: [
      "Resposta imediata 24/7",
      "Fluxo de perguntas personalizado",
      "Classificação automática de leads",
      "Notificação do vendedor em tempo real",
      "Histórico completo de conversas",
      "Integração com seu CRM",
    ],
    examples: [
      "Pré-qualificação de imóveis",
      "Triagem de clientes para seguros",
      "Qualificação de leads para SaaS",
      "Agendamento de consultorias",
    ],
  },
  {
    icon: Zap,
    title: "Automação de Follow-up",
    heading: "Acompanhe cada lead sem esforço manual",
    description:
      "Sequências inteligentes de mensagens que mantêm seu lead engajado até ele estar pronto para comprar. O sistema identifica em qual etapa o lead está e envia a mensagem certa, na hora certa.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    features: [
      "Sequências de mensagens automáticas",
      "Gatilhos por comportamento do lead",
      "Personalização dinâmica de mensagens",
      "Controle de intervalos e horários",
      "Integração com funil de vendas",
      "Relatório de taxa de resposta",
    ],
    examples: [
      "Nurturing de leads B2B",
      "Recuperação de carrinho abandonado",
      "Reativação de clientes inativos",
      "Pós-venda e upsell",
    ],
  },
  {
    icon: BarChart3,
    title: "Agendamento e CRM Integrado",
    heading: "Da conversa ao contrato sem atrito",
    description:
      "O lead agenda diretamente pelo WhatsApp na agenda do seu vendedor. Tudo registrado automaticamente no CRM — sem planilha, sem digitação manual, sem risco de perder informação.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    features: [
      "Agendamento direto pelo WhatsApp",
      "Sincronização com Google Calendar",
      "Criação automática de contatos no CRM",
      "Lembretes automáticos de reunião",
      "Registro de histórico completo",
      "Dashboard de performance",
    ],
    examples: [
      "Consultas médicas e odontológicas",
      "Reuniões de vendas B2B",
      "Demonstrações de software",
      "Atendimentos presenciais",
    ],
  },
];

const processo = [
  {
    step: "01",
    title: "Diagnóstico do processo atual",
    description:
      "Mapeamos como sua equipe atende leads hoje — cada etapa, cada gargalo, cada oportunidade de automação.",
  },
  {
    step: "02",
    title: "Desenho do fluxo",
    description:
      "Apresentamos o fluxo completo do bot para sua aprovação antes de começar a construir.",
  },
  {
    step: "03",
    title: "Desenvolvimento e testes",
    description:
      "Construímos, testamos com dados reais e refinamos até o bot funcionar exatamente como planejado.",
  },
  {
    step: "04",
    title: "Go live em 10-14 dias",
    description:
      "Ativamos o bot no seu número de WhatsApp Business com toda a integração configurada.",
  },
  {
    step: "05",
    title: "Treinamento da equipe",
    description:
      "Treinamos seu time para usar o dashboard, interpretar os relatórios e tirar o máximo da automação.",
  },
  {
    step: "06",
    title: "Suporte e evolução",
    description:
      "Acompanhamos os primeiros 30 dias e continuamos disponíveis para ajustes e novas funcionalidades.",
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      <SEO
        title="Serviços de Automação Comercial — Bot WhatsApp, Follow-up, CRM | makeit.bot"
        description="Bot de qualificação de leads no WhatsApp, automação de follow-up e integração com CRM. Implementação em até 2 semanas para empresas brasileiras."
        keywords="bot whatsapp empresas, automação follow-up leads, qualificação automática leads, integração crm whatsapp, chatbot vendas brasil"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Nossos <span className="gradient-text">Serviços</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                Cada solução é construída para o seu processo comercial — não um template genérico,
                mas uma automação que funciona do jeito que seu negócio precisa.
              </p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Falar com Especialista
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <StaggerContainer className="grid lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center mb-6`}>
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{service.heading}</h3>
                  <p className="text-muted-foreground mb-6 text-sm">{service.description}</p>

                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    O que entregamos
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    Exemplos de aplicação
                  </p>
                  <ul className="space-y-1">
                    {service.examples.map((e) => (
                      <li key={e} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="text-primary">→</span> {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Processo */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Trabalhamos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Do diagnóstico ao go live em menos de 2 semanas — com processo claro em cada etapa.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processo.map((item) => (
              <StaggerItem key={item.step}>
                <div className="p-6 rounded-xl glass h-full">
                  <div className="text-4xl font-bold gradient-text mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal animation="scale">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Qual serviço faz sentido para o seu negócio?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Conte como é seu processo comercial hoje e vamos indicar a solução certa —
                sem compromisso, sem pitch de vendas.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Falar no WhatsApp
                  </Button>
                </a>
                <a href="/portfolio">
                  <Button size="lg" variant="outline">
                    Ver Portfólio
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}

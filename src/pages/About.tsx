import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  ArrowRight,
  MapPin,
  Mail,
  Linkedin,
  Target,
  Heart,
  Zap,
  Users,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const WA_LINK =
  "https://wa.me/+554796605110?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20automa%C3%A7%C3%A3o%20comercial";

const valores = [
  {
    icon: Target,
    title: "Resultado acima de tudo",
    description:
      "Cada automação que entregamos precisa gerar retorno mensurável. Se não tem ROI claro, não faz sentido construir.",
  },
  {
    icon: Zap,
    title: "Simplicidade que escala",
    description:
      "Construímos processos simples e confiáveis — não sistemas complexos que quebram a cada atualização.",
  },
  {
    icon: Heart,
    title: "Parceria de longo prazo",
    description:
      "Não somos uma agência que some depois do go live. Estamos junto na evolução do seu processo comercial.",
  },
  {
    icon: Users,
    title: "Transparência total",
    description:
      "Você sabe exatamente o que está sendo construído, quanto custa e quando fica pronto. Sem surpresas.",
  },
];

const stack = [
  { area: "Automação", items: ["n8n (self-hosted)", "WhatsApp Business API", "Webhooks", "Agendadores"] },
  { area: "Inteligência Artificial", items: ["Claude (Anthropic)", "GPT-4", "Pipelines de IA", "Análise de conversas"] },
  { area: "Integrações", items: ["Pipedrive", "HubSpot", "RD Station", "Google Calendar", "Notion"] },
  { area: "Backend", items: ["Python 3.12", "FastAPI", "PostgreSQL", "Docker"] },
];

const numeros = [
  { value: "2 sem.", label: "tempo médio de implementação" },
  { value: "3x", label: "aumento médio em leads qualificados" },
  { value: "24/7", label: "disponibilidade do bot" },
  { value: "100%", label: "satisfação nos projetos entregues" },
];

export default function AboutPage() {
  return (
    <Layout>
      <SEO
        title="Sobre a makeit.bot — Automação Comercial com WhatsApp"
        description="A makeit.bot automatiza o processo comercial de empresas brasileiras com bots de WhatsApp inteligentes. Conheça nossa história, valores e como trabalhamos."
        keywords="makeit bot sobre, automação comercial brasil, empresa automação whatsapp, quem somos makeit bot"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Sobre a <span className="gradient-text">makeit.bot</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Nascemos para resolver um problema real: empresas brasileiras perdendo clientes por
                falta de resposta rápida no WhatsApp. Nossa missão é automatizar o processo comercial
                para que nenhum lead seja ignorado.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Números */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {numeros.map((n) => (
              <StaggerItem key={n.label}>
                <div className="text-center p-6 rounded-2xl glass">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{n.value}</div>
                  <div className="text-sm text-muted-foreground">{n.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa História</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    A makeit.bot nasceu da observação de um padrão repetitivo: empresas com bons produtos
                    perdendo vendas porque o processo comercial era lento, manual e inconsistente.
                  </p>
                  <p>
                    Vimos times de vendas gastando horas qualificando leads pelo WhatsApp manualmente,
                    enquanto dezenas de novos contatos chegavam sem resposta. O gargalo não era o produto
                    — era o processo.
                  </p>
                  <p>
                    Nossa solução: automatizar cada etapa repetitiva do processo comercial, deixando
                    seu time livre para fazer o que realmente importa — construir relacionamentos e
                    fechar negócios.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>Atendemos empresas em todo o Brasil — 100% remoto</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <a href="mailto:contato@makeit.bot" className="text-primary hover:underline">
                      contato@makeit.bot
                    </a>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-green-500 hover:bg-green-600 text-white gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Falar no WhatsApp
                    </Button>
                  </a>
                  <a
                    href="https://linkedin.com/company/makeit-bot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="gap-2">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={0.2}>
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-semibold mb-6">Nossa Especialidade</h3>
                <div className="space-y-4">
                  {[
                    { label: "Automação de WhatsApp Business", pct: "95%" },
                    { label: "Qualificação de Leads com IA", pct: "90%" },
                    { label: "Integração com CRMs", pct: "88%" },
                    { label: "Fluxos de Follow-up", pct: "92%" },
                  ].map(({ label, pct }) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{label}</span>
                        <span className="text-muted-foreground">{pct}</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: pct }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Implementação garantida em até 14 dias.</strong>{" "}
                    Se não entregarmos no prazo, você não paga a segunda parcela.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Valores</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                O que guia cada projeto que entregamos.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {valores.map((v) => (
              <StaggerItem key={v.title}>
                <div className="p-8 rounded-2xl glass h-full flex gap-6">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                    <p className="text-muted-foreground">{v.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologia que Usamos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ferramentas enterprise-grade para garantir confiabilidade e escalabilidade na sua automação.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stack.map(({ area, items }) => (
              <StaggerItem key={area}>
                <div className="p-6 rounded-xl bg-card border border-border h-full">
                  <h3 className="font-semibold text-primary mb-4 text-sm uppercase tracking-widest">
                    {area}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs rounded-md bg-muted font-mono text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
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
                Vamos conversar sobre o seu negócio?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Conte como é seu processo comercial hoje e descubra o que podemos automatizar
                para você vender mais com menos esforço.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Falar no WhatsApp
                  </Button>
                </a>
                <a href="/servicos">
                  <Button size="lg" variant="outline">
                    Ver Serviços
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

import { ArrowRight, MessageCircle, CheckCircle, TrendingUp, Clock, Users, Star, Zap, Bot, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const WA_LINK =
  "https://wa.me/+554796605110?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20automa%C3%A7%C3%A3o%20comercial";

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particles-bg">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.2, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium">Automatização Comercial para Empresas Brasileiras</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Seu time de vendas{" "}
            <span className="gradient-text">nunca para de trabalhar</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Automatizamos o atendimento comercial da sua empresa com bots de WhatsApp inteligentes —
            qualificação de leads, follow-up e agendamento no piloto automático.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white glow-blue px-8 gap-2">
                <MessageCircle className="h-5 w-5" />
                Quero Automatizar Agora
              </Button>
            </a>
            <a href="#como-funciona">
              <Button size="lg" variant="outline" className="px-8">
                Como Funciona
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>

          {/* Social proof numbers */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { value: "3x", label: "mais leads atendidos" },
              { value: "24/7", label: "disponibilidade" },
              { value: "-70%", label: "custo por lead" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity },
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

// ── Problema ──────────────────────────────────────────────────────────────────
const problemas = [
  { icon: Clock, text: "Leads chegando fora do horário comercial e ninguém atende" },
  { icon: Users, text: "Vendedores perdendo tempo com leads que não têm perfil" },
  { icon: TrendingUp, text: "Follow-up irregular faz você perder vendas para o concorrente" },
];

function ProblemaSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Reconhece alguma dessas situações?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Esses problemas custam clientes e dinheiro todos os dias — e a maioria das empresas nem percebe.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-16">
          {problemas.map((p) => (
            <StaggerItem key={p.text}>
              <div className="p-8 rounded-2xl glass h-full flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive">
                  <p.icon className="h-7 w-7" />
                </div>
                <p className="text-muted-foreground">{p.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl border border-primary/30 bg-primary/5">
            <p className="text-lg font-medium mb-2">
              Enquanto isso, seu concorrente já tem um bot respondendo em segundos.
            </p>
            <p className="text-muted-foreground">
              A boa notícia: implementamos sua automação em menos de 2 semanas.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── Solução ───────────────────────────────────────────────────────────────────
const solucoes = [
  {
    icon: Bot,
    title: "Bot de Qualificação",
    description:
      "Atende cada lead imediatamente no WhatsApp, faz as perguntas certas e filtra quem realmente tem potencial de compra.",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "Follow-up Automático",
    description:
      "Sequência de mensagens programadas para nutrir o lead no momento certo — sem seu time precisar lembrar.",
    color: "text-accent",
  },
  {
    icon: BarChart3,
    title: "Agendamento Inteligente",
    description:
      "O lead agenda uma reunião com seu time diretamente pelo WhatsApp, sem vai-e-vem de mensagens.",
    color: "text-emerald-400",
  },
];

function SolucaoSection() {
  return (
    <section id="como-funciona" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que a <span className="gradient-text">makeit.bot</span> faz por você
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Automatizamos cada etapa do processo comercial para que seu time foque só em fechar negócios.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {solucoes.map((s) => (
            <StaggerItem key={s.title}>
              <div className="group p-8 rounded-2xl glass hover-lift h-full">
                <div className={`w-14 h-14 rounded-xl bg-card flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${s.color}`}>
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted-foreground">{s.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ── Provas Sociais ────────────────────────────────────────────────────────────
const beneficios = [
  "Resposta imediata a qualquer hora do dia",
  "Qualificação automática antes de chegar no vendedor",
  "Follow-up sem esforço humano",
  "Integração com seu CRM atual",
  "Relatórios de performance em tempo real",
  "Implementação em menos de 2 semanas",
];

function ProvasSociaisSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="fade-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Por que empresas escolhem{" "}
                <span className="gradient-text">automatizar com a gente</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Não entregamos apenas um bot — entregamos um processo comercial completo
                que funciona enquanto você dorme.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {beneficios.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-right">
            <div className="space-y-6">
              {/* Testimonial card placeholder */}
              <div className="p-6 rounded-2xl glass border border-primary/20">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Implementamos o bot em 10 dias e na primeira semana já tínhamos o dobro de
                  reuniões qualificadas agendadas. O time de vendas ficou focado só em fechar."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    RC
                  </div>
                  <div>
                    <div className="font-medium text-sm">Roberto C.</div>
                    <div className="text-xs text-muted-foreground">Diretor Comercial · SaaS B2B</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-xl glass text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">+200%</div>
                  <div className="text-sm text-muted-foreground">leads qualificados/mês</div>
                </div>
                <div className="p-6 rounded-xl glass text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">-65%</div>
                  <div className="text-sm text-muted-foreground">custo de aquisição</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// ── Investimento ──────────────────────────────────────────────────────────────
function InvestimentoSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Investimento que se paga no primeiro mês
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sem surpresas. Você escolhe o plano certo para o tamanho do seu negócio.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Starter",
              desc: "Para negócios que estão começando a automatizar",
              features: ["Bot de qualificação básico", "Até 500 conversas/mês", "1 fluxo de follow-up", "Suporte via WhatsApp"],
              cta: "Começar Agora",
              highlight: false,
            },
            {
              name: "Growth",
              desc: "Para empresas que querem escalar vendas",
              features: ["Bot completo com IA", "Conversas ilimitadas", "3 fluxos personalizados", "Integração CRM", "Relatórios semanais", "Suporte prioritário"],
              cta: "Mais Popular",
              highlight: true,
            },
            {
              name: "Enterprise",
              desc: "Solução sob medida para operações complexas",
              features: ["Tudo do Growth", "Múltiplos canais", "Integrações customizadas", "SLA garantido", "Gerente dedicado", "Treinamento da equipe"],
              cta: "Falar com Especialista",
              highlight: false,
            },
          ].map((plan) => (
            <StaggerItem key={plan.name}>
              <div className={`p-8 rounded-2xl h-full flex flex-col ${plan.highlight ? "glass border border-primary glow-blue" : "bg-card border border-border"}`}>
                {plan.highlight && (
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 self-start">
                    ⭐ Mais Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <Button
                    className={`w-full gap-2 ${plan.highlight ? "bg-green-500 hover:bg-green-600 text-white" : ""}`}
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    <MessageCircle className="h-4 w-4" />
                    {plan.highlight ? "Quero o Growth" : plan.cta}
                  </Button>
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Não encontrou o que precisa? <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Fale conosco</a> e montamos uma proposta personalizada.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── CTA Final ─────────────────────────────────────────────────────────────────
function CTAFinalSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-10" />
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal animation="scale">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para vender{" "}
              <span className="gradient-text">enquanto você dorme?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Fale com nosso time agora e descubra como automatizar seu processo comercial
              em menos de 2 semanas — sem burocracia, sem contrato longo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white glow-blue px-8 gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Falar no WhatsApp Agora
                </Button>
              </a>
              <a href="/portfolio">
                <Button size="lg" variant="outline" className="px-8">
                  Ver Cases de Sucesso
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <Layout>
      <SEO
        title="makeit.bot — Automatização Comercial com WhatsApp para Empresas"
        description="Automatizamos o processo comercial da sua empresa com bots de WhatsApp inteligentes. Qualificação de leads, follow-up e agendamento no piloto automático. Implementação em menos de 2 semanas."
        keywords="automação comercial, bot whatsapp, qualificação de leads, follow-up automático, chatbot vendas, automação de vendas, n8n brasil"
      />
      <HeroSection />
      <ProblemaSection />
      <SolucaoSection />
      <ProvasSociaisSection />
      <InvestimentoSection />
      <CTAFinalSection />
    </Layout>
  );
}

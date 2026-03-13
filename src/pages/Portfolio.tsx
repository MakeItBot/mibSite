import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, TrendingUp, Clock, Users, CheckCircle } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const WA_LINK =
  "https://wa.me/+554796605110?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20automa%C3%A7%C3%A3o%20comercial";

const casos = [
  {
    id: 1,
    segmento: "Imobiliária",
    titulo: "Bot de Qualificação para Incorporadora",
    desafio:
      "A equipe recebia +200 leads por mês pelo WhatsApp e levava até 4 horas para fazer o primeiro contato. Muitos leads frios chegavam ao time de vendas, desperdiçando horas dos corretores.",
    solucao:
      "Bot de qualificação automática com fluxo de perguntas sobre perfil, orçamento e prazo. Leads qualificados encaminhados diretamente para o corretor responsável com resumo completo.",
    resultados: [
      { icon: Clock, label: "Tempo de resposta", before: "4 horas", after: "< 2 minutos" },
      { icon: Users, label: "Leads qualificados/mês", before: "45", after: "138" },
      { icon: TrendingUp, label: "Taxa de conversão", before: "8%", after: "23%" },
    ],
    stack: ["WhatsApp Business API", "n8n", "Pipedrive", "Claude AI"],
    destaque: "+187% em leads qualificados",
  },
  {
    id: 2,
    segmento: "Saúde",
    titulo: "Agendamento Automático para Clínica",
    desafio:
      "A recepcionista gastava 3 horas por dia gerenciando agendamentos pelo WhatsApp e telefone. Muitos pacientes desistiam por não obter resposta fora do horário comercial.",
    solucao:
      "Sistema de agendamento integrado ao Google Calendar com confirmação automática, lembretes 24h antes e reagendamento sem intervenção humana. Disponível 24/7.",
    resultados: [
      { icon: Clock, label: "Horas economizadas/dia", before: "3h", after: "0h" },
      { icon: Users, label: "Agendamentos/mês", before: "120", after: "210" },
      { icon: TrendingUp, label: "No-show rate", before: "28%", after: "9%" },
    ],
    stack: ["WhatsApp Business API", "n8n", "Google Calendar", "Notion"],
    destaque: "-68% em no-shows",
  },
  {
    id: 3,
    segmento: "SaaS B2B",
    titulo: "Nurturing Automático para Software de Gestão",
    desafio:
      "Leads que baixavam o material gratuito não estavam sendo acompanhados. Sem follow-up estruturado, 80% dos leads esfriavam antes de falar com o time de vendas.",
    solucao:
      "Sequência de 7 mensagens ao longo de 14 dias com personalização dinâmica baseada no perfil da empresa. Gatilhos de comportamento para acelerar leads engajados.",
    resultados: [
      { icon: Clock, label: "Tempo médio até reunião", before: "22 dias", after: "8 dias" },
      { icon: Users, label: "Taxa de abertura WhatsApp", before: "—", after: "94%" },
      { icon: TrendingUp, label: "Reuniões agendadas/mês", before: "12", after: "38" },
    ],
    stack: ["WhatsApp Business API", "n8n", "HubSpot", "Claude AI"],
    destaque: "+216% em reuniões agendadas",
  },
];

const depoimentos = [
  {
    quote:
      "Em 2 semanas o bot estava rodando e em 30 dias já tínhamos triplicado os leads qualificados. A equipe de vendas ficou focada só nos clientes certos.",
    autor: "Diretor Comercial",
    empresa: "Incorporadora — São Paulo",
  },
  {
    quote:
      "Minha recepcionista chorou de felicidade. Ela parou de responder WhatsApp o dia inteiro e agora foca no atendimento presencial. O bot faz o resto.",
    autor: "Dra. Fernanda",
    empresa: "Clínica Odontológica — Curitiba",
  },
];

export default function PortfolioPage() {
  return (
    <Layout>
      <SEO
        title="Portfólio — Casos de Sucesso em Automação Comercial | makeit.bot"
        description="Veja como automatizamos processos comerciais de empresas brasileiras. Casos reais de qualificação de leads, agendamento automático e follow-up com WhatsApp."
        keywords="casos de sucesso automação whatsapp, portfólio bot whatsapp brasil, resultados automação comercial, qualificação leads whatsapp resultado"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Casos de <span className="gradient-text">Sucesso</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Resultados reais de empresas brasileiras que automatizaram seu processo comercial
                com a makeit.bot. Números concretos, não promessas.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {casos.map((caso, index) => (
              <ScrollReveal key={caso.id} animation={index % 2 === 0 ? "fade-right" : "fade-left"}>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Left: context */}
                  <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full bg-primary/10 text-primary">
                        {caso.segmento}
                      </span>
                      <span className="text-sm font-bold text-accent">{caso.destaque}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">{caso.titulo}</h2>

                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                          O desafio
                        </p>
                        <p className="text-muted-foreground">{caso.desafio}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                          A solução
                        </p>
                        <p className="text-muted-foreground">{caso.solucao}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {caso.stack.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 text-xs rounded-md bg-muted font-mono text-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: results */}
                  <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                    <div className="p-8 rounded-2xl bg-card border border-border">
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                        Resultados após 30 dias
                      </p>
                      <div className="space-y-6">
                        {caso.resultados.map((r) => (
                          <div key={r.label} className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                              <r.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-muted-foreground mb-1">{r.label}</p>
                              <div className="flex items-center gap-3">
                                <span className="text-sm line-through text-muted-foreground/60">
                                  {r.before}
                                </span>
                                <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                                <span className="text-lg font-bold gradient-text">{r.after}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {depoimentos.map((d, i) => (
              <StaggerItem key={i}>
                <div className="p-8 rounded-2xl glass h-full flex flex-col">
                  <p className="text-muted-foreground italic mb-6 flex-1">"{d.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{d.autor}</p>
                      <p className="text-xs text-muted-foreground">{d.empresa}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal animation="scale">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Seu negócio pode ser o próximo caso de sucesso
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Conte como é seu processo comercial hoje e descubra o que podemos automatizar
                para gerar resultados como esses em até 30 dias.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Quero resultados assim
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

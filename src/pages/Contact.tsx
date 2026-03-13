import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock, MessageCircle, ChevronDown, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const WA_LINK =
  "https://wa.me/+554796605110?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20automa%C3%A7%C3%A3o%20comercial";

const contactInfo = [
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@makeit.bot",
    href: "mailto:contato@makeit.bot",
  },
  {
    icon: MapPin,
    title: "Atendimento",
    value: "Todo o Brasil — 100% remoto",
    href: null,
  },
  {
    icon: Clock,
    title: "Resposta",
    value: "Em até 4 horas úteis",
    href: null,
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "makeit.bot",
    href: "https://linkedin.com/company/makeit-bot",
  },
];

const faqs = [
  {
    question: "Quanto tempo leva para implementar?",
    answer:
      "A maioria dos projetos fica pronto em 10 a 14 dias corridos. O fluxo completo: 2 dias para diagnóstico e desenho do fluxo, aprovação sua, 5-7 dias de desenvolvimento e testes, go live. Se não entregarmos no prazo, você não paga a segunda parcela.",
  },
  {
    question: "Preciso ter WhatsApp Business API?",
    answer:
      "Sim, mas a gente cuida de toda a configuração. Ajudamos na aprovação da conta no Meta e na configuração da API. Você não precisa saber nada técnico — só nos dar acesso ao número.",
  },
  {
    question: "Funciona com qualquer CRM?",
    answer:
      "Integramos com os principais CRMs do mercado: Pipedrive, HubSpot, RD Station, Zoho, Salesforce. Se você usa outro sistema, avaliamos a viabilidade gratuitamente.",
  },
  {
    question: "Como funciona o suporte após o go live?",
    answer:
      "Acompanhamos os primeiros 30 dias sem custo adicional. Depois, oferecemos planos de suporte mensais para ajustes, relatórios e novas funcionalidades.",
  },
  {
    question: "O bot substitui meu time de vendas?",
    answer:
      "Não — ele filtra e qualifica. O bot faz o trabalho repetitivo (responder perguntas básicas, qualificar perfil, agendar reunião) para que seu time foque em fechar negócios com os leads certos.",
  },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Falha ao enviar mensagem");
      }

      toast({
        title: "Mensagem enviada!",
        description: "Retornaremos em até 4 horas úteis.",
      });

      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description:
          error instanceof Error ? error.message : "Tente novamente ou fale pelo WhatsApp",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      <SEO
        title="Contato — makeit.bot | Automação Comercial com WhatsApp"
        description="Fale com a makeit.bot pelo WhatsApp ou envie uma mensagem. Descubra como automatizar seu processo comercial e nunca mais perder um lead."
        keywords="contato makeit bot, automação whatsapp brasil, orçamento bot whatsapp, falar com especialista automação comercial"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Vamos <span className="gradient-text">conversar</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Conte como é seu processo comercial hoje. Em 30 minutos, mapeamos o que dá para
                automatizar e quanto você pode ganhar com isso.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WhatsApp primary CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal animation="scale">
            <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-card border border-border">
              <MessageCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">A forma mais rápida de falar com a gente</h2>
              <p className="text-muted-foreground mb-6">
                Respondemos no WhatsApp em até 1 hora nos dias úteis.
              </p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Falar pelo WhatsApp agora
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <ScrollReveal animation="fade-right" className="lg:col-span-3">
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold mb-2">Prefere enviar uma mensagem?</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Respondemos em até 4 horas úteis.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">WhatsApp</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectType">Serviço de interesse</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="qualificacao">Bot de Qualificação de Leads</option>
                        <option value="followup">Automação de Follow-up</option>
                        <option value="agendamento">Agendamento e CRM Integrado</option>
                        <option value="outro">Outro / Não sei ainda</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Como é seu processo comercial hoje? *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-2 min-h-[150px]"
                      placeholder="Ex: recebemos leads pelo Instagram e WhatsApp, respondemos manualmente, às vezes demora horas..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-primary-foreground"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal animation="fade-left" delay={0.2} className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Informações de contato</h2>
                  <StaggerContainer className="space-y-4">
                    {contactInfo.map((info) => (
                      <StaggerItem key={info.title}>
                        <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">{info.title}</div>
                            {info.href ? (
                              <a
                                href={info.href}
                                target={info.href.startsWith("http") ? "_blank" : undefined}
                                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="font-medium hover:text-primary transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <div className="font-medium">{info.value}</div>
                            )}
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>

                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-sm font-semibold mb-1">Implementação garantida</p>
                  <p className="text-sm text-muted-foreground">
                    Entregamos em até 14 dias ou você não paga a segunda parcela. Sem asterisco, sem letra miúda.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas frequentes</h2>
            <p className="text-muted-foreground">As dúvidas mais comuns antes de começar.</p>
          </ScrollReveal>

          <StaggerContainer className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors text-left">
                    <span className="font-medium pr-4">{faq.question}</span>
                    <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform flex-shrink-0" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-6 pt-2 bg-card rounded-b-xl border-x border-b border-border -mt-2">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CollapsibleContent>
                </Collapsible>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </Layout>
  );
}

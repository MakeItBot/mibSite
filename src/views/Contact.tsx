"use client";

import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/i18n";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@makeit.bot",
    href: "mailto:hello@makeit.bot",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+39 (351) 400-6183",
    href: "tel:+39-351-400-6183",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Remote-first, Global",
    href: null,
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope. A simple AI chatbot could take 4-6 weeks, while a complex custom agent could take 8-12 weeks. We'll provide a detailed timeline during our discovery phase.",
  },
  {
    question: "What's your pricing model?",
    answer: "We offer both fixed-price projects and monthly retainers. For most projects, we provide a fixed quote after the discovery phase. Retainers are ideal for ongoing development and support.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes! We offer maintenance and support packages for all our solutions. This includes bug fixes, updates, and feature enhancements as needed.",
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely. We often collaborate with in-house teams, providing specialized expertise while ensuring knowledge transfer throughout the project.",
  },
];

export default function ContactPage() {
  const { t } = useI18n();
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
      console.log('📤 Sending form data:', formData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('📥 Response status:', response.status, response.statusText);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('❌ Error from API:', errorData);
        console.error('Full error details:', JSON.stringify(errorData, null, 2));
        throw new Error(errorData.error || 'Failed to send message');
      }

      const successData = await response.json();
      console.log('✅ Success:', successData);

      toast({
        title: t.contact.successTitle,
        description: t.contact.successDesc,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      console.error('❌ Catch error:', error);
      toast({
        title: t.contact.errorTitle,
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t.contact.heroTitle}<span className="gradient-text">{t.contact.heroTitleHighlight}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                {t.contact.heroSubtitle}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <ScrollReveal animation="fade-right" className="lg:col-span-3">
              <div className="bg-card p-8 rounded-2xl border border-border">
                <h2 className="text-2xl font-bold mb-6">{t.contact.formTitle}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">{t.contact.nameLabel}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder={t.contact.placeholders.name}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{t.contact.emailLabel}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder={t.contact.placeholders.email}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">{t.contact.phoneLabel}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder={t.contact.placeholders.phone}
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectType">{t.contact.projectTypeLabel}</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">{t.contact.selectService}</option>
                        <option value="chatbot">{t.contact.aiChatbot}</option>
                        <option value="pwa">{t.contact.pwa}</option>
                        <option value="other">{t.contact.other}</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">{t.contact.projectDetailsLabel}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-2 min-h-[150px]"
                      placeholder={t.contact.placeholders.message}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-primary-foreground"
                  >
                    {isSubmitting ? t.contact.sending : t.contact.sendMessage}
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal animation="fade-left" delay={0.2} className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">{t.contact.contactTitle}</h2>
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
                              <a href={info.href} className="font-medium hover:text-primary transition-colors">
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

                <ScrollReveal delay={0.3}>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
                    <MessageCircle className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{t.contact.preferChat}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {t.contact.preferChatDesc}
                    </p>
                    <Button variant="secondary" className="w-full">
                      {t.contact.bookCall}
                    </Button>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.contact.faqTitle}
            </h2>
            <p className="text-muted-foreground">
              {t.contact.faqSubtitle}
            </p>
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

"use client"

import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Brain, Bot, Smartphone, Check } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { useI18n } from "@/i18n";

export default function ServicesPage() {
  const { t } = useI18n()

  const services = [
    {
      icon: Brain,
      title: t.services.iaFirst.title,
      description: t.services.iaFirst.description,
      href: "/services/ia-first/",
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      features: t.services.iaFirst.features,
    },
    {
      icon: Bot,
      title: t.services.chatbots.title,
      description: t.services.chatbots.description,
      href: "/services/chatbots/",
      color: "text-primary",
      bgColor: "bg-primary/10",
      features: t.services.chatbots.features,
    },
    {
      icon: Smartphone,
      title: t.services.pwa.title,
      description: t.services.pwa.description,
      href: "/services/pwa/",
      color: "text-accent",
      bgColor: "bg-accent/10",
      features: t.services.pwa.features,
    },
  ]

  const processSteps = t.servicesPage.process

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
                {t.servicesPage.heroTitle}<span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                {t.servicesPage.heroSubtitle}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <StaggerContainer className="grid lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center mb-6`}>
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={service.href}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.servicesPage.processTitle}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.servicesPage.processSubtitle}
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item) => (
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

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal animation="scale">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.servicesPage.ctaTitle}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t.servicesPage.ctaSubtitle}
              </p>
              <Link href="/contact">
                <Button size="lg" className="gradient-primary text-primary-foreground glow-blue">
                  {t.servicesPage.ctaButton}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}

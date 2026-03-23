"use client";

import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Target, Heart, Users, Lightbulb, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { useI18n } from "@/i18n";

const valueIcons = [Target, Heart, Users, Lightbulb];

export default function AboutPage() {
  const { t } = useI18n();

  const milestones = t.about.milestones;
  const values = t.about.values;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t.about.heroTitle}<span className="gradient-text">Make It Bot</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                {t.about.heroSubtitle}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.about.storyTitle}</h2>
                <div className="space-y-4 text-muted-foreground">
                  {t.about.storyParagraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={0.2}>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl border border-border shadow-lg">
                  <div className="text-4xl font-bold gradient-text">{t.about.statsNumber}</div>
                  <div className="text-muted-foreground">{t.about.statsLabel}</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Founder */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-right" className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square max-w-md rounded-2xl overflow-hidden">
                  <img
                    src="/pics/Ary_perfil.png"
                    alt="Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={0.2} className="order-1 lg:order-2">
              <div>
                <span className="text-primary font-medium">{t.about.founderLabel}</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  {t.about.founderTitle}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  {t.about.founderParagraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.valuesTitle}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.about.valuesSubtitle}
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <StaggerItem key={value.title}>
                  <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.journeyTitle}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.about.journeySubtitle}
            </p>
          </ScrollReveal>

          <StaggerContainer className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <StaggerItem key={`${milestone.year}-${index}`}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pt-2 pb-8">
                    <h3 className="text-xl font-semibold">{milestone.title}</h3>
                    <p className="text-muted-foreground mt-1">{milestone.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal animation="scale" className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.about.ctaTitle}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t.about.ctaSubtitle}
            </p>
            <Link href="/contact">
              <Button size="lg" className="gradient-primary text-primary-foreground glow-blue gap-2">
                {t.about.ctaButton}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}

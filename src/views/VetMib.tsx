"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  ArrowRight,
  Clock,
  Phone,
  MessageSquare,
  CalendarX,
  Syringe,
  Headset,
  ShieldCheck,
  Heart,
  PhoneOff,
  CalendarCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { ScrollReveal } from "@/components/animations";
import { translations } from "@/components/vetmib/translations";

const t = translations.pt;

// ── Hero ──────────────────────────────────────────────
function HeroSection() {
  const h = t.hero;
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-cyan-accent/10 -z-10" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-6">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-primary">{h.badge}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {h.titleStart}
              <span className="gradient-text">{h.titleHighlight}</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">{h.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-primary text-primary-foreground rounded-full px-8" asChild>
                <a href="#demo">
                  {h.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <a href="#demo">{h.ctaSecondary}</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card rounded-3xl shadow-2xl border border-border overflow-hidden max-w-sm mx-auto">
              <div className="bg-primary px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground text-sm font-bold">
                  V
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">{h.chatName}</p>
                  <p className="text-xs text-primary-foreground/70">{h.chatStatus}</p>
                </div>
              </div>
              <div className="p-4 space-y-3 bg-muted/30 min-h-[340px]">
                {h.chatMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: msg.delay, duration: 0.4, type: "spring" }}
                    className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.from === "client"
                          ? "bg-primary text-primary-foreground rounded-br-md"
                          : "bg-card text-card-foreground border border-border rounded-bl-md"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Problem ──────────────────────────────────────────
const problemIcons = [Clock, Phone, MessageSquare, CalendarX, Syringe];

function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl mx-auto">
            {t.problem.title}
          </h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
          {t.problem.items.map((text, i) => {
            const Icon = problemIcons[i];
            return (
              <ScrollReveal key={i}>
                <div className="flex items-center gap-3 bg-card rounded-2xl p-4 border border-border text-left">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-destructive" />
                  </div>
                  <p className="text-sm font-medium">{text}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        <ScrollReveal>
          <p className="mt-10 text-muted-foreground max-w-lg mx-auto">{t.problem.footer}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── Features ─────────────────────────────────────────
const featureIcons = [Headset, ShieldCheck, Syringe, Heart];

function FeaturesSection() {
  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{t.features.title}</h2>
          <p className="text-muted-foreground max-w-md mx-auto">{t.features.subtitle}</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {t.features.items.map((f, i) => {
            const Icon = featureIcons[i];
            return (
              <ScrollReveal key={i}>
                <div className="bg-card rounded-3xl border border-border p-8 hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{f.description}</p>
                  <ul className="space-y-1.5">
                    {f.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Benefits ─────────────────────────────────────────
const benefitIcons = [Clock, PhoneOff, CalendarCheck, Sparkles, Zap, Heart];

function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">{t.benefits.title}</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {t.benefits.items.map((text, i) => {
            const Icon = benefitIcons[i];
            return (
              <ScrollReveal key={i}>
                <div className="flex items-center gap-4 bg-card rounded-2xl p-5 border border-border">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{text}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Demo Chat ────────────────────────────────────────
interface ChatOption {
  label: string;
  response: string;
}

function ChatWidget({
  title,
  subtitle,
  options,
  avatarLetter,
}: {
  title: string;
  subtitle: string;
  options: readonly ChatOption[];
  avatarLetter: string;
}) {
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([
    { from: "bot", text: `Olá! 👋 ${subtitle}` },
  ]);

  const handleOption = (opt: ChatOption) => {
    setMessages((prev) => [
      ...prev,
      { from: "user" as const, text: opt.label },
      { from: "bot" as const, text: opt.response },
    ]);
  };

  return (
    <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-lg flex flex-col h-[420px]">
      <div className="bg-primary px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground text-sm font-bold">
          {avatarLetter}
        </div>
        <div>
          <p className="text-sm font-semibold text-primary-foreground">{title}</p>
          <p className="text-xs text-primary-foreground/70">online</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/20">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                msg.from === "user"
                  ? "bg-primary text-primary-foreground rounded-br-md"
                  : "bg-card text-card-foreground border border-border rounded-bl-md"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="p-3 border-t border-border bg-card">
        <div className="flex flex-wrap gap-2">
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleOption(opt)}
              className="text-xs bg-muted hover:bg-muted/80 rounded-full px-3 py-1.5 transition-colors font-medium"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function DemoSection() {
  const d = t.demo;
  return (
    <section id="demo" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{d.title}</h2>
          <p className="text-muted-foreground max-w-md mx-auto">{d.subtitle}</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-3 text-center">{d.makeitLabel}</p>
            <ChatWidget
              title={d.makeitTitle}
              subtitle={d.makeitSubtitle}
              options={d.makeitOptions}
              avatarLetter="M"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-3 text-center">{d.clinicLabel}</p>
            <ChatWidget
              title={d.clinicTitle}
              subtitle={d.clinicSubtitle}
              options={d.clinicOptions}
              avatarLetter="V"
            />
          </div>
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="gradient-primary text-primary-foreground rounded-full px-10" asChild>
            <a href="/contact/">
              {d.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ──────────────────────────────────────────────
function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{t.faq.title}</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">{t.faq.subtitle}</p>
        </ScrollReveal>
        <div className="max-w-2xl mx-auto space-y-4">
          {t.faq.items.map((faq, i) => (
            <ScrollReveal key={i}>
              <details className="group bg-card rounded-2xl border border-border p-5">
                <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
                  {faq.question}
                  <span className="ml-2 text-primary transition-transform group-open:rotate-45 text-xl">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CTA Final ────────────────────────────────────────
function CtaFinalSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-cyan-accent/5">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal animation="scale">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-2xl mx-auto">
            {t.ctaFinal.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
            {t.ctaFinal.subtitle}
          </p>
          <Button size="lg" className="gradient-primary text-primary-foreground glow-blue rounded-full px-12 text-base" asChild>
            <a href="/contact/">
              {t.ctaFinal.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── Main Page ────────────────────────────────────────
export default function VetMibPage() {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <BenefitsSection />
      <DemoSection />
      <FaqSection />
      <CtaFinalSection />
    </Layout>
  );
}

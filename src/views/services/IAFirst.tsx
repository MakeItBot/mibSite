"use client"

import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Brain, Cpu, Workflow, Sparkles, Bot, Check, Zap } from "lucide-react";
import { useI18n } from "@/i18n";

const features = [
  {
    icon: Brain,
    title: "Custom AI Agents",
    description: "Purpose-built AI agents that understand your domain, automate complex tasks, and make intelligent decisions on your behalf.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "End-to-end process automation that eliminates manual work, reduces errors, and scales with your business.",
  },
  {
    icon: Cpu,
    title: "LLM Integration & Fine-Tuning",
    description: "Seamless integration with leading language models, fine-tuned on your data for maximum accuracy and relevance.",
  },
  {
    icon: Bot,
    title: "Multi-Agent Orchestration",
    description: "Coordinate multiple AI agents working together to solve complex problems that no single agent could handle alone.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Analytics",
    description: "Transform raw data into actionable insights with AI that identifies patterns, trends, and opportunities automatically.",
  },
  {
    icon: Zap,
    title: "Intelligent Decision Systems",
    description: "AI-driven decision support that augments human judgment with data-backed recommendations in real time.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Understand Your Needs",
    description: "We map your business processes, identify automation opportunities, and define the AI strategy that delivers the most impact.",
  },
  {
    step: "02",
    title: "Design the Architecture",
    description: "We design the agent architecture, data pipelines, and integration points tailored to your existing systems.",
  },
  {
    step: "03",
    title: "Build & Train",
    description: "We develop your custom AI agents, train them on your data, and rigorously test every scenario before deployment.",
  },
  {
    step: "04",
    title: "Deploy & Optimize",
    description: "We deploy to production with monitoring in place, then continuously optimize performance based on real-world feedback.",
  },
];

const benefits = [
  "Reduce operational costs by automating repetitive tasks",
  "Make faster, data-driven decisions with AI support",
  "Scale operations without proportional headcount growth",
  "Unlock insights hidden in your existing data",
  "Stay ahead of competitors with cutting-edge AI capabilities",
  "Maintain full control with transparent, explainable AI",
];

export default function IAFirstPage() {
  const { t } = useI18n()

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Brain className="h-4 w-4 text-violet-500" />
              <span className="text-sm font-medium">AI FIRST</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.services.iaFirst.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              {t.services.iaFirst.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="gradient-primary text-primary-foreground glow-blue">
                  Build Your AI Agent
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline">
                  See Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From single-purpose agents to complex multi-agent systems, we build AI that delivers real business value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-xl bg-card border border-border hover:border-violet-500/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-violet-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven process to go from idea to production-ready AI agents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="p-6 rounded-xl glass text-center">
                <div className="text-4xl font-bold gradient-text mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why AI FIRST?
              </h2>
              <p className="text-muted-foreground mb-8">
                AI is not just a tool — it is a strategic advantage. Businesses that adopt AI-first thinking
                outperform their competitors in speed, efficiency, and innovation.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-violet-500" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop"
                  alt="AI and machine learning visualization"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features from i18n */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every solution is built with enterprise-grade reliability and your specific requirements in mind.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {t.services.iaFirst.features.map((feature) => (
              <span key={feature} className="px-6 py-3 rounded-full glass font-mono text-sm">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Put AI to Work for Your Business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how custom AI agents can transform your operations, reduce costs,
              and unlock new opportunities.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gradient-primary text-primary-foreground glow-blue">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

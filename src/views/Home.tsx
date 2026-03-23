"use client";

import Link from "next/link";
import { ArrowRight, Brain, Bot, Smartphone, Sparkles, Zap, Shield, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ImageWithSkeleton } from "@/components/ui/image-skeleton";
import { Layout } from "@/components/layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { useI18n } from "@/i18n";

// Hero Section
function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particles-bg">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3]
        }}
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
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">{t.hero.badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.hero.titleStart}<span className="gradient-text">{t.hero.titleHighlight}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button size="lg" className="gradient-primary text-primary-foreground glow-blue px-8">
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="px-8">
                {t.hero.ctaSecondary}
              </Button>
            </Link>
          </motion.div>

          {/* Tech Stack Preview */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-sm text-muted-foreground mb-4">{t.hero.techLabel}</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
              {["React", "TypeScript", "Node.js", "Python", "OpenAI", "Supabase"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 rounded-lg glass text-sm font-mono"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity }
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

// Services Preview Section
function ServicesSection() {
  const { t } = useI18n();

  const services = [
    {
      icon: Brain,
      title: t.services.iaFirst.title,
      description: t.services.iaFirst.description,
      href: "/services/ia-first/",
      color: "text-violet-500",
    },
    {
      icon: Bot,
      title: t.services.chatbots.title,
      description: t.services.chatbots.description,
      href: "/services/chatbots/",
      color: "text-primary",
    },
    {
      icon: Smartphone,
      title: t.services.pwa.title,
      description: t.services.pwa.description,
      href: "/services/pwa/",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.sectionTitle}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.services.sectionSubtitle}
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link
                href={service.href}
                className="group block p-8 rounded-2xl glass hover-lift h-full"
              >
                <div className={`w-14 h-14 rounded-xl bg-card flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.color}`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <span className="inline-flex items-center text-primary font-medium">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// Why Choose MIB Section
const featureIcons = [Zap, Sparkles, Shield, HeartHandshake];

function WhyChooseSection() {
  const { t } = useI18n();

  const features = t.whyChoose.features.map((feature, index) => ({
    icon: featureIcons[index],
    title: feature.title,
    description: feature.description,
  }));

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="fade-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.whyChoose.title}<span className="gradient-text">Make It Bot</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t.whyChoose.subtitle}
              </p>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  {t.whyChoose.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors h-full">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

// Featured Projects Preview
const featuredProjects = [
  {
    title: "VetMib",
    category: "Chatbots",
    image: "/vetmib/logo.png",
    link: "/vetmib",
  },
  {
    title: "MIB - History",
    category: "PWA",
    image: "/projects/MibHistory.PNG",
  },
  {
    title: "Customer Support AI",
    category: "Chatbots",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
  },
];

function FeaturedProjectsSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.featuredWork.title}</h2>
              <p className="text-muted-foreground max-w-xl">
                {t.featuredWork.subtitle}
              </p>
            </div>
            <Link href="/portfolio" className="mt-4 md:mt-0">
              <Button variant="outline">
                {t.featuredWork.viewAll}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.title}>
              <Link
                href={project.link || "/portfolio"}
                className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all hover-lift"
              >
                <motion.div
                  className="overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithSkeleton
                    src={project.image}
                    alt={project.title}
                    aspectRatio="video"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// Testimonials Section
const testimonialAvatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
];

function TestimonialsSection() {
  const { t } = useI18n();

  const testimonials = t.testimonials.items.map((item, index) => ({
    quote: item.quote,
    author: item.author,
    role: item.role,
    avatar: testimonialAvatars[index],
  }));

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.testimonials.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <div className="p-8 rounded-2xl glass h-full flex flex-col">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-foreground mb-6 flex-1">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <ImageWithSkeleton
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    aspectRatio="auto"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const { t } = useI18n();

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
              {t.cta.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              {t.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gradient-primary text-primary-foreground glow-blue px-8">
                  {t.cta.button}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="px-8">
                  See Our Work
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Main Home Page
export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <FeaturedProjectsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
}

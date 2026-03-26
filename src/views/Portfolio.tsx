"use client";

import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ImageWithSkeleton } from "@/components/ui/image-skeleton";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useState } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const categories = ["All", "Chatbots", "PWA", "Custom Solutions"];

const projects = [
  {
    id: 1,
    title: "VetMib",
    category: "Chatbots",
    description: "Assistente IA para clínicas veterinárias. Agenda consultas, envia lembretes e responde aos clientes 24/7 pelo WhatsApp.",
    image: "/vetmib/logo.png",
    tags: ["AI", "WhatsApp", "Veterinária"],
    link: "/vetmib",
  },
  {
    id: 2,
    title: "Customer Support AI",
    category: "Chatbots",
    description: "24/7 AI-powered customer support chatbot with RAG technology.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    tags: ["AI", "Python", "OpenAI"],
  },
  {
    id: 3,
    title: "MIB - History",
    category: "PWA",
    description: "Lets discover fascinating historical facts about today and explore the rich history of the places around you. Available in Portuguese, English, and Italian.",
    image: "/projects/MibHistory.PNG",
    tags: ["PWA", "React", "JavaScript"],
    link: "https://mib-history.vercel.app/",
    external: true,
  },
  {
    id: 5,
    title: "Sales Assistant Bot",
    category: "Chatbots",
    description: "Conversational AI that qualifies leads and books meetings.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    tags: ["AI", "CRM", "Automation"],
  },
  {
    id: 6,
    title: "Field Service App",
    category: "PWA",
    description: "Offline-first app for field technicians with sync capabilities.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop",
    tags: ["PWA", "Offline", "Sync"],
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
                Our <span className="gradient-text">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Explore our recent work and see how we've helped businesses achieve 
                their goals through innovative software solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filter */}
          <ScrollReveal className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "gradient-primary text-primary-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </ScrollReveal>

          {/* Projects Grid */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <div className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all hover-lift">
                  <div className="relative">
                    <ImageWithSkeleton
                      src={project.image}
                      alt={project.title}
                      aspectRatio="video"
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                      {project.link ? (
                        project.external ? (
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="secondary" className="gap-2">
                              View Details
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </a>
                        ) : (
                          <Link href={project.link}>
                            <Button size="sm" variant="secondary" className="gap-2">
                              View Details
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </Link>
                        )
                      ) : (
                        <Button size="sm" variant="secondary" className="gap-2">
                          View Details
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs rounded-full bg-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
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
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gradient-primary text-primary-foreground glow-blue gap-2">
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}

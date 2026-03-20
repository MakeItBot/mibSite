import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Target, Heart, Users, Lightbulb, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that impact your bottom line.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships, not just projects.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We work alongside your team, ensuring knowledge transfer and empowerment.",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description: "We stay ahead of technology trends to bring you cutting-edge solutions.",
  },
];

const milestones = [
  { year: "2019", title: "Founded", description: "Started with a vision to democratize software development for SMBs." },
  { year: "2020", title: "First Major Client", description: "Delivered our first enterprise-scale Shopify integration." },
  { year: "2021", title: "AI Integration", description: "Launched our AI chatbot solutions powered by RAG technology." },
  { year: "2022", title: "Team Growth", description: "Expanded our team and opened new service lines." },
  { year: "2023", title: "100+ Projects", description: "Reached the milestone of 100 successful project deliveries." },
  { year: "2024", title: "Global Reach", description: "Now serving clients across 15+ countries worldwide." },
];

export default function AboutPage() {
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
                About <span className="gradient-text">Make It Bot</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                We're a team of passionate developers and designers building 
                software that makes a difference for businesses worldwide.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Make It Bot was born from a simple observation: small and medium-sized 
                    businesses often struggle to access the same quality software solutions 
                    that large enterprises enjoy.
                  </p>
                  <p>
                    We set out to change that. By combining deep technical expertise with 
                    a genuine understanding of business challenges, we create solutions 
                    that are not just technically excellent but truly transformative.
                  </p>
                  <p>
                    Today, we specialize in three key areas: Shopify app development, 
                    AI-powered chatbots, and progressive web applications. Each of these 
                    services represents our commitment to helping businesses thrive in 
                    the digital age.
                  </p>
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
                  <div className="text-4xl font-bold gradient-text">100+</div>
                  <div className="text-muted-foreground">Projects Delivered</div>
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
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                    alt="Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-left" delay={0.2} className="order-1 lg:order-2">
              <div>
                <span className="text-primary font-medium">Meet the Founder</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  Driven by Innovation
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    With over 10 years of experience in software development and a 
                    passion for helping businesses succeed, our founder started Make It Bot 
                    with a clear mission: make powerful technology accessible to everyone.
                  </p>
                  <p>
                    Having worked with startups and Fortune 500 companies alike, the 
                    vision was to bring enterprise-level expertise to businesses of all 
                    sizes, without the enterprise-level price tag.
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </ScrollReveal>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones that shaped who we are today
            </p>
          </ScrollReveal>
          
          <StaggerContainer className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <StaggerItem key={milestone.year}>
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
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how we can help your business grow with custom software solutions.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gradient-primary text-primary-foreground glow-blue gap-2">
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}

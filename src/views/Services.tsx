import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code2, Bot, Smartphone, Check } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const services = [
  {
    icon: Code2,
    title: "Shopify App Development",
    description: "Custom Shopify applications that extend your store's functionality and streamline operations.",
    href: "/services/shopify",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    features: [
      "Custom app development",
      "API integrations",
      "Inventory management tools",
      "Analytics dashboards",
      "Custom storefronts",
      "Checkout customizations",
    ],
  },
  {
    icon: Bot,
    title: "AI-Powered Chatbots",
    description: "Intelligent conversational AI that understands your business and serves your customers 24/7.",
    href: "/services/chatbots",
    color: "text-primary",
    bgColor: "bg-primary/10",
    features: [
      "RAG technology",
      "Custom knowledge bases",
      "Multi-language support",
      "CRM integrations",
      "Analytics & insights",
      "Continuous learning",
    ],
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    description: "Native-like web experiences that work offline and can be installed on any device.",
    href: "/services/pwa",
    color: "text-accent",
    bgColor: "bg-accent/10",
    features: [
      "Offline functionality",
      "Push notifications",
      "App-like experience",
      "Cross-platform",
      "Fast loading",
      "SEO friendly",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We dive deep into your business needs, goals, and challenges to understand the full picture.",
  },
  {
    step: "02",
    title: "Planning",
    description: "We create a detailed roadmap with clear milestones, timelines, and deliverables.",
  },
  {
    step: "03",
    title: "Development",
    description: "Our team builds your solution using agile methodologies with regular updates and feedback loops.",
  },
  {
    step: "04",
    title: "Testing",
    description: "Rigorous testing ensures your solution works flawlessly across all scenarios and devices.",
  },
  {
    step: "05",
    title: "Launch",
    description: "We deploy your solution and ensure a smooth transition with zero downtime.",
  },
  {
    step: "06",
    title: "Support",
    description: "Ongoing maintenance and support to keep your solution running at peak performance.",
  },
];

export default function ServicesPage() {
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
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Specialized software solutions designed to solve real business challenges 
                and drive measurable results.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our proven process ensures successful delivery every time.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item) => (
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
                Not Sure Which Service You Need?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's have a conversation about your goals. We'll help you identify 
                the best solution for your specific needs.
              </p>
              <Link href="/contact">
                <Button size="lg" className="gradient-primary text-primary-foreground glow-blue">
                  Schedule a Free Consultation
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

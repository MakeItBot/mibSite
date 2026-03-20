import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code2, Check, ShoppingCart, BarChart3, Palette, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Custom App Development",
    description: "Build tailored Shopify apps that add unique functionality to your store and improve operations.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Gain deep insights into your store's performance with custom dashboards and automated reports.",
  },
  {
    icon: Palette,
    title: "Custom Storefronts",
    description: "Create stunning, high-converting storefronts using Shopify's Hydrogen framework or custom themes.",
  },
  {
    icon: Zap,
    title: "API Integrations",
    description: "Connect Shopify with your existing tools and systems for seamless data flow and automation.",
  },
  {
    icon: Shield,
    title: "Inventory Management",
    description: "Automate stock tracking, reordering, and multi-location inventory management.",
  },
  {
    icon: Code2,
    title: "Checkout Customizations",
    description: "Enhance the checkout experience with custom fields, upsells, and payment integrations.",
  },
];

const benefits = [
  "Increase sales with optimized user experiences",
  "Save time with automated workflows",
  "Scale your store without limitations",
  "Get data-driven insights for better decisions",
  "Stay ahead of competition with unique features",
  "Reduce operational costs with efficient tools",
];

const techStack = ["Shopify API", "GraphQL", "React", "Node.js", "Hydrogen", "Polaris", "Liquid"];

export default function ShopifyServicePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Code2 className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">E-commerce Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Shopify App <span className="text-green-500">Development</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Custom Shopify applications that extend your store's capabilities, 
              automate workflows, and drive more sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline">
                  View Our Work
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
              From simple plugins to complex enterprise solutions, we cover the full spectrum of Shopify development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-xl bg-card border border-border hover:border-green-500/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Invest in Custom Shopify Development?
              </h2>
              <p className="text-muted-foreground mb-8">
                Off-the-shelf apps can only take you so far. Custom solutions are built 
                specifically for your business needs, giving you a competitive edge.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop"
                  alt="E-commerce dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-muted-foreground">
              We leverage Shopify's latest tools and best practices.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <span key={tech} className="px-6 py-3 rounded-full glass font-mono text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Supercharge Your Shopify Store?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss your requirements and create a solution that drives results.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

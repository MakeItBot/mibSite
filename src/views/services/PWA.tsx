import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Smartphone, Check, Wifi, Bell, Zap, Download, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "Offline Functionality",
    description: "Your app works even without internet connection, ensuring users are never left stranded.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Engage users with timely notifications, just like native mobile apps.",
  },
  {
    icon: Download,
    title: "Installable",
    description: "Users can add your app to their home screen with one tap – no app store required.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Service workers cache assets for instant loading, even on slow networks.",
  },
  {
    icon: Globe,
    title: "Cross-Platform",
    description: "One codebase runs on iOS, Android, and desktop. Build once, deploy everywhere.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "PWAs require HTTPS, ensuring all data is encrypted in transit.",
  },
];

const comparison = [
  { feature: "Development Cost", pwa: "Lower", native: "Higher (2x apps)" },
  { feature: "Time to Market", pwa: "Faster", native: "Slower" },
  { feature: "App Store Approval", pwa: "Not required", native: "Required" },
  { feature: "Updates", pwa: "Instant", native: "Store approval" },
  { feature: "Discoverability", pwa: "SEO + Stores", native: "Stores only" },
  { feature: "Maintenance", pwa: "Single codebase", native: "Multiple codebases" },
];

const benefits = [
  "Up to 3x faster development than native",
  "No app store fees or approval delays",
  "Automatic updates without user action",
  "Lower development and maintenance costs",
  "Reach users on any device or platform",
  "Better SEO and web discoverability",
];

const techStack = ["React", "Service Workers", "Workbox", "Web App Manifest", "IndexedDB", "Push API"];

export default function PWAServicePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Smartphone className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Web Technology</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Progressive Web <span className="text-accent">Apps</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Native-like experiences on the web. Installable, fast, and works offline – 
              without the complexity of traditional mobile development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Build Your PWA
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline">
                  See Examples
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">PWA Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get the best of both worlds: the reach of the web and the experience of native apps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">PWA vs Native Apps</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See why more businesses are choosing PWAs for their mobile strategy.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-border">
              <div className="grid grid-cols-3 bg-muted/50 p-4 font-semibold">
                <div>Feature</div>
                <div className="text-center text-accent">PWA</div>
                <div className="text-center">Native</div>
              </div>
              {comparison.map((row, index) => (
                <div key={row.feature} className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-card' : 'bg-muted/20'}`}>
                  <div>{row.feature}</div>
                  <div className="text-center text-accent font-medium">{row.pwa}</div>
                  <div className="text-center text-muted-foreground">{row.native}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose PWA?
              </h2>
              <p className="text-muted-foreground mb-8">
                Progressive Web Apps offer the perfect balance of capability, 
                reach, and development efficiency.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop"
                  alt="Mobile app on multiple devices"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-muted-foreground">
              Modern web technologies for optimal performance.
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Go Mobile Without the Overhead?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how a PWA can help you reach users on every platform with a single codebase.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Your PWA Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

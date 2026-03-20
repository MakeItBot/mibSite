import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Bot, Check, MessageSquare, Brain, Zap, Globe, BarChart3, Database } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "RAG Technology",
    description: "Retrieval-Augmented Generation ensures accurate, contextual responses based on your actual business data.",
  },
  {
    icon: Database,
    title: "Custom Knowledge Base",
    description: "Train your chatbot on your documents, FAQs, product catalogs, and any proprietary information.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Serve customers worldwide with automatic language detection and multilingual responses.",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description: "Provide immediate answers 24/7, reducing wait times and improving customer satisfaction.",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Advanced NLP enables human-like conversations that understand context and intent.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Track conversations, identify trends, and continuously improve your chatbot's performance.",
  },
];

const useCases = [
  {
    title: "Customer Support",
    description: "Handle common inquiries, troubleshooting, and FAQs automatically.",
    icon: "💬",
  },
  {
    title: "Sales Assistant",
    description: "Guide customers through product selection and answer pre-sale questions.",
    icon: "🛒",
  },
  {
    title: "Lead Qualification",
    description: "Engage visitors, collect information, and qualify leads 24/7.",
    icon: "🎯",
  },
  {
    title: "Internal Knowledge Base",
    description: "Help employees find information and answer internal questions instantly.",
    icon: "📚",
  },
];

const benefits = [
  "Reduce support costs by up to 80%",
  "Handle unlimited conversations simultaneously",
  "Never miss a customer query again",
  "Improve response accuracy over time",
  "Seamless handoff to human agents when needed",
  "Integration with existing CRM and tools",
];

export default function ChatbotsServicePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Bot className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Artificial Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI-Powered <span className="gradient-text">Chatbots</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Intelligent conversational AI that truly understands your business. 
              Powered by RAG technology for accurate, contextual responses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="gradient-primary text-primary-foreground glow-blue">
                  Build Your Chatbot
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                See Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powered by Advanced AI</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our chatbots go beyond simple scripts. They understand, learn, and improve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From customer support to sales, our chatbots adapt to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="p-6 rounded-xl glass text-center">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=450&fit=crop"
                  alt="AI Chatbot interface"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why AI Chatbots?
              </h2>
              <p className="text-muted-foreground mb-8">
                Transform your customer interactions with intelligent automation 
                that scales with your business.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's build a chatbot that truly understands your business and delights your customers.
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

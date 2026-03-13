import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Info } from "lucide-react";

export default function ChatbotsPage() {
  return (
    <Layout>
      <SEO
        title="AI Chatbots — Now Part of AI-Powered Workflows | Ary Hauffe Neto"
        description="Chatbot development is now part of the AI-Powered Workflows service. See current automation and AI workflow services."
      />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-medium mb-8">
              <Info className="h-4 w-4" />
              This service has moved
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Chatbots
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Chatbot development is now part of my{" "}
              <strong className="text-foreground">AI-Powered Workflows</strong> service.
            </p>
            <p className="text-muted-foreground mb-10">
              Rather than standalone chatbots, I build conversational interfaces as part of
              broader automation systems — connected to your data, your tools, and your
              existing workflows via n8n and Claude AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="gradient-primary text-primary-foreground glow-blue gap-2">
                  See AI-Powered Workflows
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Get in touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

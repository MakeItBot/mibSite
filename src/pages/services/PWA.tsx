import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Info } from "lucide-react";

export default function PWAPage() {
  return (
    <Layout>
      <SEO
        title="PWA Development — Archived | Ary Hauffe Neto"
        description="Progressive Web App development is no longer offered. See current automation and integration services."
      />
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-sm font-medium mb-8">
              <Info className="h-4 w-4" />
              Service no longer offered
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Progressive Web Apps
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              I no longer offer PWA development as a standalone service. My focus has shifted
              to workflow automation and backend system integration.
            </p>
            <p className="text-muted-foreground mb-10">
              If your team needs a lightweight admin dashboard or internal tool to accompany an
              automation system, that's something I can include as part of a broader project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="gradient-primary text-primary-foreground glow-blue gap-2">
                  See current services
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

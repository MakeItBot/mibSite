"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const FooterCTA = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding bg-gradient-to-br from-primary to-primary/90 text-primary-foreground transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container-tight text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Don't Let the Post-Purchase Journey Be a Dead End
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Join 1,500+ Shopify stores already transforming their Thank You pages into powerful engagement tools. Start your free trial today.
        </p>
        <Button
          size="lg"
          className="bg-accent hover:bg-success-dark text-accent-foreground text-lg px-10 py-7 shadow-xl shadow-black/20 transition-all hover:shadow-2xl hover:-translate-y-1"
        >
          Transform Your Thank You Page
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
        <p className="text-sm text-primary-foreground/60 mt-4">
          Start Free Trial • No credit card required
        </p>
      </div>
    </section>
  );
};

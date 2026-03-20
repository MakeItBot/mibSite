"use client";

import { ShieldCheck, Repeat, HeadphonesIcon, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const touchpoints = [
  { name: "Thank You Page", description: "Engage at peak excitement" },
  { name: "Order Status", description: "Keep customers informed" },
  { name: "Checkout", description: "Build trust before purchase" },
];

const outcomes = [
  { icon: ShieldCheck, label: "Build Trust", color: "text-primary" },
  { icon: Repeat, label: "Repeat Purchases", color: "text-accent" },
  { icon: HeadphonesIcon, label: "Reduce Tickets", color: "text-primary" },
];

export const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding bg-background transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-medium mb-6">
            The Solution
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Seamless Post-Purchase Engagement, Built for Shopify
          </h2>
          <p className="text-lg text-muted-foreground">
            TrustFlow empowers you to engage customers at the most critical moment—right after they buy—with beautiful, customizable blocks on your Thank You, Order Status, and Checkout pages. Build trust, reduce questions, and seamlessly encourage repeat purchases.
          </p>
        </div>

        {/* Visual Flow Diagram */}
        <div className="relative">
          {/* Touchpoints */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {touchpoints.map((point, index) => (
              <div key={point.name} className="relative">
                <div className="bg-secondary rounded-xl p-6 text-center border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{point.name}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
                {index < touchpoints.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Arrow down */}
          <div className="flex justify-center mb-12">
            <div className="w-px h-12 bg-gradient-to-b from-primary/40 to-accent/40" />
          </div>

          {/* Outcomes */}
          <div className="grid md:grid-cols-3 gap-6">
            {outcomes.map((outcome) => (
              <div key={outcome.label} className="bg-card rounded-xl p-6 text-center border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <outcome.icon className={`w-8 h-8 ${outcome.color}`} />
                </div>
                <h3 className="font-semibold text-foreground text-lg">{outcome.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import { MessageSquareX, TrendingDown, Clock, FileQuestion } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const painPoints = [
  {
    icon: MessageSquareX,
    title: "Support Ticket Flood",
    description: "Your customers are left wondering 'Where's my order?' leading to a flood of support tickets that drain your team's time.",
  },
  {
    icon: TrendingDown,
    title: "Dead-End Journey",
    description: "The post-purchase journey is a dead end, missing a golden chance to build loyalty and drive repeat purchases.",
  },
  {
    icon: Clock,
    title: "Missed Momentum",
    description: "You're not capitalizing on a customer's peak excitement to drive their next purchase while engagement is highest.",
  },
  {
    icon: FileQuestion,
    title: "Underperforming Pages",
    description: "Your Thank You page is underperforming, just showing basic order details instead of working for your business.",
  },
];

export const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding bg-section-alt transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Are You Losing Revenue After the Sale?
          </h2>
          <p className="text-lg text-muted-foreground">
            Most Shopify stores invest heavily in getting customers to checkout—then completely neglect what happens next. Sound familiar?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={point.title}
              className="group bg-card rounded-xl p-6 border border-border hover:border-destructive/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                  <point.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

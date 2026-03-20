"use client";

import {
  MapPin,
  HeadphonesIcon,
  Clock,
  Gift,
  MessageSquare,
  TrendingUp,
  Percent,
  ShieldCheck,
  Crown
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const universalFeatures = [
  {
    icon: MapPin,
    title: "Order Tracking CTA",
    benefit: "Reduce 'where is my order?' inquiries by 70%",
    description: "Give customers one-click access to real-time tracking, keeping them informed without contacting support.",
  },
  {
    icon: HeadphonesIcon,
    title: "VIP Support",
    benefit: "Turn support into a loyalty-building experience",
    description: "Offer instant access to dedicated support channels, making customers feel valued from their first purchase.",
  },
  {
    icon: Clock,
    title: "Smart Delivery Promise",
    benefit: "Set clear expectations and cut support tickets by 60%",
    description: "Automatically display estimated delivery dates based on location and shipping method.",
  },
  {
    icon: Gift,
    title: "Coupon Distribution",
    benefit: "Drive repeat purchases with timely incentives",
    description: "Deliver personalized discount codes at the perfect moment—when customers are most excited about your brand.",
  },
  {
    icon: MessageSquare,
    title: "Quick Survey",
    benefit: "Capture valuable feedback while engagement is high",
    description: "Gather insights with beautiful one-question surveys that customers actually complete.",
  },
];

const plusFeatures = [
  {
    icon: TrendingUp,
    title: "Inventory Urgency",
    benefit: "Create FOMO that drives immediate action",
    description: "Display real-time stock levels to encourage customers to complete additional purchases before items sell out.",
  },
  {
    icon: Percent,
    title: "Dynamic Discount Reminder",
    benefit: "Recover abandoned cart value automatically",
    description: "Remind customers of active discounts and create urgency with countdown timers.",
  },
  {
    icon: ShieldCheck,
    title: "Security Badges",
    benefit: "Build trust with visible security credentials",
    description: "Display SSL, payment security, and trust badges that reassure customers their data is protected.",
  },
];

const FeatureCard = ({
  icon: Icon,
  title,
  benefit,
  description,
  isPremium = false
}: {
  icon: React.ElementType;
  title: string;
  benefit: string;
  description: string;
  isPremium?: boolean;
}) => (
  <div className={`group bg-card rounded-xl p-6 border transition-all duration-300 hover:shadow-lg ${
    isPremium
      ? 'border-primary/30 hover:border-primary/50 bg-gradient-to-br from-card to-secondary/30'
      : 'border-border hover:border-primary/20'
  }`}>
    <div className="flex items-start gap-4">
      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
        isPremium
          ? 'bg-primary/15 group-hover:bg-primary/25'
          : 'bg-accent/10 group-hover:bg-accent/20'
      }`}>
        <Icon className={`w-6 h-6 ${isPremium ? 'text-primary' : 'text-accent'}`} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-semibold text-foreground">{title}</h3>
          {isPremium && (
            <Badge variant="secondary" className="bg-primary/10 text-primary border-0 text-xs">
              <Crown className="w-3 h-3 mr-1" />
              Plus
            </Badge>
          )}
        </div>
        <p className="text-accent font-medium text-sm mb-2">{benefit}</p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  </div>
);

export const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding bg-section-alt transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Build Trust & Boost Revenue
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful engagement blocks designed to transform your post-purchase experience into a revenue-generating machine.
          </p>
        </div>

        {/* Universal Features */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-border" />
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              For All Shopify Stores
            </h3>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universalFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>

        {/* Plus Features */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-primary/20" />
            <div className="flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
              <Crown className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
                Shopify Plus Exclusive
              </h3>
            </div>
            <div className="h-px flex-1 bg-primary/20" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plusFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} isPremium />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

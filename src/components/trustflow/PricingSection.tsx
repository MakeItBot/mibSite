import { Button } from "@/components/ui/button";
import { Check, Crown, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const starterFeatures = [
  "Order Tracking CTA",
  "VIP Support Block",
  "Smart Delivery Promise",
  "Coupon Distribution",
  "Quick Survey",
  "Brand Customization",
  "Email Support",
  "Analytics Dashboard",
];

const plusFeatures = [
  "Everything in Starter",
  "Inventory Urgency Block",
  "Dynamic Discount Reminder",
  "Security Badges",
  "Priority Support",
  "Custom Integrations",
  "Dedicated Account Manager",
  "Advanced Analytics",
];

export const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding bg-background transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Start Converting Browsers into Loyal Customers
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your store. All plans include a 14-day free trial with no credit card required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">Starter</h3>
              <p className="text-muted-foreground text-sm">Perfect for growing stores</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-foreground">$9</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-accent font-medium mt-1">14-day free trial</p>
            </div>

            <Button className="w-full bg-accent hover:bg-success-dark text-accent-foreground mb-8 py-6 text-lg shadow-lg shadow-accent/20">
              Start Free Trial
            </Button>

            <ul className="space-y-3">
              {starterFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Plus Plan */}
          <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border-2 border-primary shadow-lg">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Most Popular
              </div>
            </div>

            <div className="mb-6 pt-2">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-foreground">Plus</h3>
                <Crown className="w-5 h-5 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm">For Shopify Plus stores</p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-foreground">Custom</span>
              </div>
              <p className="text-sm text-primary font-medium mt-1">Contact for pricing</p>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-8 py-6 text-lg shadow-lg shadow-primary/20">
              Contact Sales
            </Button>

            <ul className="space-y-3">
              {plusFeatures.map((feature, index) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className={`w-5 h-5 flex-shrink-0 ${index === 0 ? 'text-accent' : 'text-primary'}`} />
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Risk-free message */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              14-Day Free Trial
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              No Coding Required
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent" />
              Cancel Anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

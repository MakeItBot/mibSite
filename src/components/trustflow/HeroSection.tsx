import { Button } from "@/components/ui/button";
import { Star, Check, Package, MessageCircle, Gift } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 section-padding transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-tight relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/50 border border-primary/10 rounded-full px-4 py-2 text-sm">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-muted-foreground">4.9/5 • Trusted by 1,500+ Shopify stores</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Turn Your Thank You Page Into a{" "}
              <span className="gradient-text">Revenue Engine</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Post-Purchase Engagement That Pays for Itself. Build trust, reduce support tickets, and drive repeat revenue—all from your Thank You page.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-accent hover:bg-success-dark text-accent-foreground text-lg px-8 py-6 shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/20 hover:bg-secondary">
                Watch Demo
              </Button>
            </div>

            {/* Quick benefits */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              {["14-day free trial", "No coding required", "Cancel anytime"].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Mockup Illustration */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-2xl border border-border p-6 animate-float">
              {/* Browser bar */}
              <div className="flex items-center gap-2 pb-4 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                </div>
                <div className="flex-1 bg-muted rounded-full h-6 flex items-center px-3">
                  <span className="text-xs text-muted-foreground">yourstore.myshopify.com/thank-you</span>
                </div>
              </div>

              {/* Order Confirmation Mock */}
              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Order Confirmed!</p>
                    <p className="text-sm text-muted-foreground">Order #1234 • Thank you for your purchase</p>
                  </div>
                </div>

                <div className="h-px bg-border" />

                {/* TrustFlow Blocks */}
                <div className="space-y-3">
                  <p className="text-xs font-medium text-primary uppercase tracking-wider">TrustFlow Blocks</p>

                  {/* Delivery Promise Block */}
                  <div className="bg-secondary/50 rounded-lg p-4 border border-primary/10">
                    <div className="flex items-center gap-3">
                      <Package className="w-8 h-8 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Estimated Delivery</p>
                        <p className="text-sm text-accent font-semibold">Jan 8 - Jan 10, 2026</p>
                      </div>
                    </div>
                  </div>

                  {/* Support Block */}
                  <div className="bg-secondary/50 rounded-lg p-4 border border-primary/10">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-8 h-8 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Need Help?</p>
                        <p className="text-sm text-muted-foreground">Chat with our VIP support team</p>
                      </div>
                    </div>
                  </div>

                  {/* Coupon Block */}
                  <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                    <div className="flex items-center gap-3">
                      <Gift className="w-8 h-8 text-accent" />
                      <div>
                        <p className="font-medium text-foreground">Your Next Order Discount</p>
                        <p className="text-sm font-bold text-accent">SAVE15 - 15% Off</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

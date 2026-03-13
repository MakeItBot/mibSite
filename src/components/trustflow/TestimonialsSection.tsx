import { Star, Shield, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    quote: "Since installing TrustFlow, our 'order status' support tickets dropped by over 50%. The delivery promise block alone is a game-changer for our customer experience.",
    author: "Sarah K.",
    role: "Founder",
    company: "Luxe Home Essentials",
    avatar: "SK",
  },
  {
    quote: "We've seen a 23% increase in repeat purchases since adding the coupon block to our Thank You page. The ROI was positive within the first week.",
    author: "Marcus Chen",
    role: "Head of E-commerce",
    company: "ActiveWear Co.",
    avatar: "MC",
  },
  {
    quote: "The quick survey feature has given us insights we never had before. Now we understand exactly what our customers want, straight from their own words.",
    author: "Emily Rodriguez",
    role: "Customer Success Manager",
    company: "Organic Beauty Shop",
    avatar: "ER",
  },
];

const trustBadges = [
  { icon: Shield, label: "Shopify Partner" },
  { icon: CheckCircle, label: "GDPR Compliant" },
  { icon: CheckCircle, label: "CCPA Compliant" },
  { icon: Shield, label: "SOC 2 Certified" },
];

export const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding bg-section-alt transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by Shopify Merchants
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of successful stores already transforming their post-purchase experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-border">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <badge.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

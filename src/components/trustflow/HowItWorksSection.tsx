import { Download, Palette, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Install & Connect",
    description: "Add TrustFlow from the Shopify App Store with one click. No coding or complex setup required—just instant integration with your store.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Customize",
    description: "Drag-and-drop the engagement blocks you want. Customize colors, text, and positioning to perfectly match your brand identity.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Publish & Profit",
    description: "Hit publish and your new post-purchase experience goes live instantly. Start seeing results from day one—no waiting, no delays.",
  },
];

export const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding bg-background transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground rounded-full px-4 py-2 text-sm font-medium mb-6">
            Simple Setup
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Started in Minutes, See Results Immediately
          </h2>
          <p className="text-lg text-muted-foreground">
            No developers needed. No lengthy onboarding. Just three simple steps to transform your post-purchase experience.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                {/* Step number badge */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25 transform rotate-3 hover:rotate-0 transition-transform">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground max-w-sm mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

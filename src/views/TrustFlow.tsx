import { Header } from "@/components/trustflow/Header";
import { HeroSection } from "@/components/trustflow/HeroSection";
import { ProblemSection } from "@/components/trustflow/ProblemSection";
import { SolutionSection } from "@/components/trustflow/SolutionSection";
import { FeaturesSection } from "@/components/trustflow/FeaturesSection";
import { HowItWorksSection } from "@/components/trustflow/HowItWorksSection";
import { TestimonialsSection } from "@/components/trustflow/TestimonialsSection";
import { PricingSection } from "@/components/trustflow/PricingSection";
import { FAQSection } from "@/components/trustflow/FAQSection";
import { FooterCTA } from "@/components/trustflow/FooterCTA";
import { Footer } from "@/components/trustflow/Footer";

export default function TrustFlowPage() {
  return (
    <>

      {/* TrustFlow Scoped Container - Light Mode Only */}
      <div className="trustflow-scope light min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <section id="features">
            <FeaturesSection />
          </section>
          <section id="how-it-works">
            <HowItWorksSection />
          </section>
          <TestimonialsSection />
          <section id="pricing">
            <PricingSection />
          </section>
          <section id="faq">
            <FAQSection />
          </section>
          <FooterCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}

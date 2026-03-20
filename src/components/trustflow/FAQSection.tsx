"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const faqs = [
  {
    question: "Do I need coding skills to use TrustFlow?",
    answer: "Not at all! TrustFlow is designed for non-technical users. Our intuitive drag-and-drop interface lets you add and customize engagement blocks in minutes without writing a single line of code. If you can use Shopify, you can use TrustFlow.",
  },
  {
    question: "Can I customize the look of the blocks to match my store?",
    answer: "Absolutely! Every block is fully customizable. You can adjust colors, fonts, text, spacing, and positioning to perfectly match your store's brand identity. We also offer pre-designed templates if you want to get started quickly.",
  },
  {
    question: "Which Shopify plans is the app compatible with?",
    answer: "TrustFlow works with all Shopify plans—from Basic to Advanced. Our Starter plan includes universal blocks that work on any Shopify store. Shopify Plus merchants unlock additional premium blocks designed specifically for high-volume stores.",
  },
  {
    question: "How does the free trial work?",
    answer: "Your 14-day free trial starts the moment you install TrustFlow. You get full access to all features with no credit card required. If you love it (and we think you will), you can upgrade to a paid plan. If not, simply uninstall—no strings attached.",
  },
  {
    question: "What if I need help setting up?",
    answer: "We've got you covered! All plans include email support, and our help center is packed with guides and video tutorials. Plus plan customers get priority support with faster response times and access to a dedicated account manager.",
  },
];

export const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding bg-section-alt transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="container-tight">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. If you don't see what you're looking for, reach out to our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

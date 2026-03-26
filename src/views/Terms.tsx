"use client";

import { Layout } from "@/components/layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import { useI18n } from "@/i18n";

export default function TermsPage() {
  const { t } = useI18n();

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.terms.title}</h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.1}>
              <p className="text-muted-foreground mb-12">{t.terms.lastUpdated}</p>
            </ScrollReveal>

            <StaggerContainer className="prose prose-lg dark:prose-invert max-w-none">
              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using Make It Bot's services, you accept and agree to be bound by these 
                  Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">2. Services</h2>
                <p className="text-muted-foreground mb-4">
                  Make It Bot provides software development services including but not limited to AI chatbot development, custom AI agents, and Progressive Web App development. The specific
                  scope of services will be defined in individual project agreements.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">3. Project Agreements</h2>
                <p className="text-muted-foreground mb-4">
                  Each project will be governed by a separate agreement that outlines the scope, timeline, 
                  deliverables, and payment terms. These project agreements, together with these Terms of 
                  Service, constitute the complete agreement between parties.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  Unless otherwise specified in a project agreement:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Client retains ownership of their existing intellectual property</li>
                  <li>Work product created specifically for the client transfers upon full payment</li>
                  <li>Make It Bot retains rights to general tools, methodologies, and know-how</li>
                </ul>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Payment terms will be specified in each project agreement. Generally, projects require 
                  a deposit before work begins, with remaining payments tied to milestones or completion.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">6. Confidentiality</h2>
                <p className="text-muted-foreground mb-4">
                  Both parties agree to keep confidential any proprietary information shared during the 
                  course of the project. This includes but is not limited to business plans, technical 
                  specifications, and customer data.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  Make It Bot's liability is limited to the amount paid by the client for the specific 
                  services in question. We are not liable for any indirect, incidental, or consequential damages.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">8. Warranty</h2>
                <p className="text-muted-foreground mb-4">
                  We warrant that our services will be performed in a professional manner consistent with 
                  industry standards. We provide a 30-day bug fix warranty after project delivery for issues 
                  directly related to our work.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">9. Termination</h2>
                <p className="text-muted-foreground mb-4">
                  Either party may terminate a project agreement with written notice. In case of termination, 
                  the client is responsible for payment of all work completed up to the termination date.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">10. Governing Law</h2>
                <p className="text-muted-foreground mb-4">
                  These terms are governed by the laws of Brazil. Any disputes will be resolved in the 
                  courts of São Paulo, Brazil.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">11. Changes to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify these terms at any time. Changes will be posted on this 
                  page with an updated revision date.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact</h2>
                <p className="text-muted-foreground mb-4">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  Email: hello@makeit.bot<br />
                  Location: São Paulo, Brazil
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>
    </Layout>
  );
}

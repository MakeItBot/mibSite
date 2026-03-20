import { Layout } from "@/components/layout";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal animation="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.1}>
              <p className="text-muted-foreground mb-12">Last updated: January 2025</p>
            </ScrollReveal>

            <StaggerContainer className="prose prose-lg dark:prose-invert max-w-none">
              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, such as when you fill out a contact form, 
                  request a quote, or communicate with us. This may include your name, email address, phone number, 
                  and any other information you choose to provide.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Respond to your inquiries and provide customer service</li>
                  <li>Send you project updates and relevant communications</li>
                  <li>Improve our services and website experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties. 
                  We may share information with trusted service providers who assist us in operating our website 
                  and conducting our business, as long as they agree to keep this information confidential.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                  over the Internet is 100% secure.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">5. Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Our website may use cookies to enhance your browsing experience. You can choose to disable 
                  cookies through your browser settings, though this may affect some functionality of the website.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">6. Third-Party Links</h2>
                <p className="text-muted-foreground mb-4">
                  Our website may contain links to third-party websites. We are not responsible for the privacy 
                  practices or content of these external sites.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to access, correct, or delete your personal information. To exercise these 
                  rights, please contact us using the information provided below.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">8. Changes to This Policy</h2>
                <p className="text-muted-foreground mb-4">
                  We may update this privacy policy from time to time. We will notify you of any changes by 
                  posting the new policy on this page with an updated revision date.
                </p>
              </StaggerItem>

              <StaggerItem>
                <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
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

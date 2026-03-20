"use client";

import { Zap } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Changelog", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Support", href: "#" },
    { label: "Status", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-16 px-4 md:px-8">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <a href="#" className="flex items-center gap-2">
              <img src="/trustf/favicon-96x96.png" alt="TrustFlow" className="w-9 h-9" />
              <span className="text-xl font-bold text-background">TrustFlow</span>
              </a>
            </div>
            <p className="text-background/60 max-w-sm mb-6">
              Transform your post-purchase experience into a powerful engine for building trust, reducing support tickets, and driving repeat revenue.
            </p>
            <p className="text-sm text-background/40">
              © {new Date().getFullYear()} TrustFlow. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/60 hover:text-background transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/60 hover:text-background transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/60 hover:text-background transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-background/40 hover:text-background/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-background/40">
            Made with ❤️ for Shopify merchants
          </p>
        </div>
      </div>
    </footer>
  );
};

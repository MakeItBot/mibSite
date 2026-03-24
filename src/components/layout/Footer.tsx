"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  MessageCircle,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/i18n";

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/MakeItBot", icon: Github },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
];

export function Footer() {
  const { t, locale } = useI18n();

  const footerLinks = {
    solucoes: [
      { name: locale === "pt" ? "Todas as Soluções" : "All Solutions", href: "/solucoes/" },
      { name: locale === "pt" ? "Veterinárias" : "Veterinary", href: "/solucoes/veterinarias/" },
      { name: locale === "pt" ? "Agendamento Inteligente" : "Smart Scheduling", href: "/solucoes/veterinarias/agendamento-inteligente/" },
      { name: "Anti No-Show", href: "/solucoes/veterinarias/agendamento-inteligente/anti-no-show/" },
      { name: locale === "pt" ? "Lembretes Automáticos" : "Auto Reminders", href: "/solucoes/veterinarias/agendamento-inteligente/lembretes-automaticos/" },
      { name: "Follow-up Pós-Cirurgia", href: "/solucoes/veterinarias/followup-pos-cirurgia/" },
      { name: "Alertas de Complicações", href: "/solucoes/veterinarias/followup-pos-cirurgia/alertas-complicacoes/" },
    ],
    company: [
      { name: locale === "pt" ? "Sobre Nós" : "About Us", href: "/about/" },
      { name: "Blog", href: "/blog/" },
      { name: locale === "pt" ? "Portfólio" : "Portfolio", href: "/portfolio/" },
      { name: locale === "pt" ? "Contacto" : "Contact", href: "/contact/" },
    ],
    services: [
      { name: t.services.iaFirst.title, href: "/services/ia-first/" },
      { name: t.services.chatbots.title, href: "/services/chatbots/" },
      { name: t.services.pwa.title, href: "/services/pwa/" },
      { name: locale === "pt" ? "Todos os Serviços" : "All Services", href: "/services/" },
    ],
    legal: [
      { name: locale === "pt" ? "Política de Privacidade" : "Privacy Policy", href: "/privacy/" },
      { name: locale === "pt" ? "Termos de Serviço" : "Terms of Service", href: "/terms/" },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg p-0.5 bg-gradient-to-br from-primary to-cyan-accent shadow-lg group-hover:scale-105 transition-transform">
                <img
                  src="/favicon-96x96.png"
                  alt="Make It Bot Logo"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
              <span className="font-semibold text-xl">Make It Bot</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm mt-4">
              {t.footer.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:contact@makeit.bot"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@makeit.bot
              </a>
              <a
                href="tel:+393514006183"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +39 (351) 400-6183
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Remote First, Worldwide
              </div>
            </div>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.solucoesTitle}</h4>
            <ul className="space-y-3">
              {footerLinks.solucoes.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.companyTitle}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.servicesTitle}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.newsletterTitle}</h4>
            <p className="text-muted-foreground text-sm mb-4">
              {t.footer.newsletterSubtitle}
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder={t.footer.subscribePlaceholder}
                className="bg-background"
              />
              <Button className="w-full gradient-primary text-primary-foreground">
                {t.footer.subscribeButton}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {t.footer.copyright}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href="https://wa.me/+393514006183"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 hover:bg-green-500/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-6 right-6 z-40 rounded-full shadow-lg hover:shadow-xl glass"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, MessageCircle, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_LINK =
  "https://wa.me/+554796605110?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20automa%C3%A7%C3%A3o%20comercial";

const footerLinks = {
  navegacao: [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/servicos" },
    { name: "Portfólio", href: "/portfolio" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" },
  ],
  legal: [
    { name: "Política de Privacidade", href: "/privacy" },
    { name: "Termos de Uso", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/makeit-bot", icon: Linkedin },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="w-10 h-10 rounded-lg p-0.5 bg-gradient-to-br from-primary to-cyan-accent shadow-lg group-hover:scale-105 transition-transform">
                <img
                  src="/favicon-96x96.png"
                  alt="Make It Bot Logo"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
              <span className="font-semibold text-xl">makeit.bot</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Automatizamos o processo comercial da sua empresa com bots de WhatsApp inteligentes,
              para que você venda mais sem contratar mais.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:contato@makeit.bot"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                contato@makeit.bot
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                +39 (351) 400-6183
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Remoto · Brasil & Internacional
              </div>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-3">
              {footerLinks.navegacao.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} makeit.bot. Todos os direitos reservados.
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
                href={WA_LINK}
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

      {/* Scroll to Top — positioned above WhatsApp float button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-24 right-6 z-40 rounded-full shadow-lg hover:shadow-xl glass"
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
}

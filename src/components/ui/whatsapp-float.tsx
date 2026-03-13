import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/+554796605110?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20automa%C3%A7%C3%A3o%20comercial";

export function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

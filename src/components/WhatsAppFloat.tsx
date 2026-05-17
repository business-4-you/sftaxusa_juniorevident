import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Olá! Vim pelo site e gostaria de uma consultoria contábil.",
  );
  const href = `https://wa.me/${site.whatsappNumber}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 hover:shadow-xl hover:shadow-whatsapp/40 transition-all duration-300 hover:scale-[1.03] pl-4 pr-5 py-3"
    >
      <MessageCircle className="size-6 shrink-0" strokeWidth={2.2} />
      <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
        Fale no WhatsApp
      </span>
    </a>
  );
}

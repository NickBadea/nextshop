// Contact WhatsApp, într-un singur loc: numărul (format internațional, fără "+") și mesajul prestabilit.
export const WHATSAPP_PHONE = "40771753423";

export const WHATSAPP_MESSAGE =
  "Bună ziua! Aș dori informații despre mobilier și rafturi pentru magazin.";

// Link wa.me cu mesaj precompletat (implicit, mesajul general al site-ului).
export function buildWhatsAppUrl(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = buildWhatsAppUrl();

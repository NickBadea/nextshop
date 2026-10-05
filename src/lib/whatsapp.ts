// Contact WhatsApp, într-un singur loc: numărul (format internațional, fără "+") și mesajul prestabilit.
export const WHATSAPP_PHONE = "40771753423";

export const WHATSAPP_MESSAGE =
  "Bună ziua! Aș dori informații despre mobilier și rafturi pentru magazin.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

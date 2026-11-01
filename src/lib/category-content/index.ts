import type { CategoryContent } from "./types";
import { vitrineContent } from "./vitrine";
import { tejgheleContent } from "./tejghele";
import { panificatieContent } from "./panificatie";
import { fructeLegumeContent } from "./fructe-legume";
import { RAFTURI_H1, RAFTURI_SLUG } from "../rafturi-content";

export type CategoryPage = {
  content: CategoryContent;
  // Mesajul precompletat pentru butonul secundar WhatsApp din apelul final.
  whatsappMessage: string;
};

// Cheia = slug-ul categoriei, exact ca în baza de date (decodat).
export const categoryPages: Record<string, CategoryPage> = {
  vitrine: {
    content: vitrineContent,
    whatsappMessage: "Bună ziua! Aș dori informații despre vitrine frigorifice pentru magazin.",
  },
  tejghele: {
    content: tejgheleContent,
    whatsappMessage: "Bună ziua! Aș dori informații despre tejghele pentru magazin.",
  },
  "panificație": {
    content: panificatieContent,
    whatsappMessage: "Bună ziua! Aș dori informații despre rafturi pentru pâine pentru magazin.",
  },
  "fructe-&-legume": {
    content: fructeLegumeContent,
    whatsappMessage:
      "Bună ziua! Aș dori informații despre rafturi pentru legume și fructe pentru magazin.",
  },
};

export function getCategoryPage(slug: string): CategoryPage | null {
  return categoryPages[slug] ?? null;
}

// Numele categoriei afișat în breadcrumb: același cu H1-ul paginii, nu cel din baza de date
// (ex. "Raft Perete" în DB, "Rafturi magazin" ca H1).
export function getCategoryDisplayName(slug: string, dbName: string): string {
  if (slug === RAFTURI_SLUG) return RAFTURI_H1;

  return categoryPages[slug]?.content.h1 ?? dbName;
}

// Text simplu (fără sintaxa de linkuri/îngroșat), pentru JSON-LD.
export function toPlainText(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "");
}

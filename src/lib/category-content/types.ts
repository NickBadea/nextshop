// Structura conținutului pentru paginile de categorie (în afară de Rafturi, care are fișierul lui).
// Textele pot conține linkuri în format [text](/cale) și text îngroșat în format **text**.

export type CategorySource = { text: string; href: string };

export type CategoryBlock =
  | { type: "section"; heading: string; paragraphs: string[]; sources?: CategorySource[] }
  | { type: "cta"; text: string; button: string; href: string }
  | {
      type: "callout";
      variant: "summary" | "tip" | "check";
      title: string;
      items?: string[];
      text?: string;
      note?: string;
    }
  | { type: "table"; title: string; headers: string[]; rows: string[][] }
  | { type: "steps"; title: string; steps: { title: string; text: string }[] }
  | { type: "faq"; title: string; items: { question: string; answer: string }[] }
  | {
      type: "seeAlso";
      title: string;
      links: { text: string; href: string; description: string }[];
    }
  | {
      type: "finalCta";
      heading: string;
      text: string;
      primary: { text: string; href: string };
      secondary: string;
    };

export type CategoryContent = {
  seo: { title: string; description: string };
  h1: string;
  intro: string;
  blocks: CategoryBlock[];
};

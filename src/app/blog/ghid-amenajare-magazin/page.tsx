import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getGuideBySlug } from "@/lib/guide";
import { guideMdxComponents } from "@/components/guide/guideMdxComponents";
import GuideToc, { type TocSection } from "@/components/guide/GuideToc";
import { guideFaqItems } from "@/components/guide/guideFaqData";

const SLUG = "ghid-amenajare-magazin";
const PAGE_URL = "https://nextshopretail.ro/blog/ghid-amenajare-magazin";

export const metadata = {
  title: "Ghid amenajare magazin: layout, rafturi, vitrine și autorizații | NextShop",
  description:
    "Ghid complet de amenajare magazin: tipuri de layout, alegerea rafturilor și vitrinelor frigorifice, autorizații necesare în România și greșeli de evitat.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Ghid amenajare magazin: layout, rafturi, vitrine și autorizații",
    description:
      "Ghid complet de amenajare magazin: tipuri de layout, alegerea rafturilor și vitrinelor frigorifice, autorizații necesare în România și greșeli de evitat.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    title: "Ghid amenajare magazin: layout, rafturi, vitrine și autorizații",
    description:
      "Ghid complet de amenajare magazin: tipuri de layout, alegerea rafturilor și vitrinelor frigorifice, autorizații necesare în România și greșeli de evitat.",
  },
};

const tocSections: TocSection[] = [
  { id: "1-de-ce-conteaza-amenajarea", label: "1. De ce contează amenajarea" },
  { id: "2-tipuri-de-layout", label: "2. Tipuri de layout" },
  { id: "3-zona-de-intrare", label: "3. Zona de intrare și decompresie" },
  { id: "4-traseul-clientului", label: "4. Traseul clientului" },
  { id: "5-rafturile", label: "5. Rafturile" },
  { id: "6-vitrine-frigorifice", label: "6. Vitrine frigorifice" },
  { id: "7-iluminatul", label: "7. Iluminatul" },
  { id: "8-zona-de-casa", label: "8. Zona de casă și tejghele" },
  { id: "9-latimea-culoarelor", label: "9. Lățimea culoarelor" },
  { id: "10-amenajare-pe-tip-de-spatiu", label: "10. Amenajare pe tip de spațiu" },
  { id: "11-autorizatii", label: "11. Autorizații necesare" },
  { id: "12-bugetul", label: "12. Bugetul unei amenajări" },
  { id: "13-zece-greseli", label: "13. Zece greșeli frecvente" },
  { id: "14-plan-de-actiune", label: "14. Plan de acțiune" },
  { id: "15-checklist-final", label: "15. Checklist final" },
  { id: "16-intrebari-frecvente", label: "16. Întrebări frecvente" },
];

const howToSteps = [
  { name: "Evaluarea spațiului și a conceptului", text: "Stabilești tipul de magazin, sortimentul principal și suprafața disponibilă." },
  { name: "Alegerea layout-ului", text: "Grid, loop, free-flow sau hibrid, în funcție de tipul de magazin." },
  { name: "Randare 3D a amenajării", text: "Vizualizezi configurația completă — rafturi, vitrine, zonă de casă — și ajustezi orice element cât timp modificarea e gratuită." },
  { name: "Depunerea documentației pentru autorizații", text: "Se face în paralel cu finalizarea configurației." },
  { name: "Confirmarea ofertei și a termenelor de livrare", text: "Verifici dacă mobilierul e din stoc sau necesită producție." },
  { name: "Livrare", text: "Mobilierul comandat este livrat la locația magazinului." },
  { name: "Montaj", text: "Montajul se realizează conform configurației stabilite la randare." },
  { name: "Verificare finală înainte de deschidere", text: "Testarea fluxului real, conform checklist-ului final." },
  { name: "Deschidere", text: "Magazinul este pregătit pentru prima zi de funcționare." },
];

export default function GhidAmenajareMagazinPage() {
  const guide = getGuideBySlug(SLUG);

  if (!guide) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    image: `https://nextshopretail.ro${guide.coverImage}`,
    datePublished: guide.date,
    dateModified: guide.date,
    author: {
      "@type": "Organization",
      name: "NextShop Retail",
    },
    publisher: {
      "@type": "Organization",
      name: "NextShop Retail",
      logo: {
        "@type": "ImageObject",
        url: "https://nextshopretail.ro/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PAGE_URL,
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Plan de acțiune pas cu pas — de la spațiu gol la deschidere",
    step: howToSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guideFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative h-[320px] md:h-[420px] flex items-center">
        <Image
          src={guide.coverImage}
          alt={guide.title}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white text-center">
          <p className="text-sm font-semibold text-blue-200 uppercase tracking-wide mb-4">
            Ghid NextShop
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {guide.title}
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            Un ghid practic pentru proprietari de magazine alimentare,
            minimarketuri, supermarketuri, magazine mixte, brutării, cofetării
            și cafenele — de la alegerea layout-ului până la autorizațiile
            necesare în România.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <GuideToc sections={tocSections}>
          <article>
            <MDXRemote source={guide.content} components={guideMdxComponents} />
          </article>
        </GuideToc>
      </div>
    </main>
  );
}

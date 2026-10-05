export const dynamic = "force-dynamic";

import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import CategoryClient from "./CategoryClient";
import { RafturiIntro, RafturiSections } from "@/components/produse/RafturiContent";
import {
  RAFTURI_H1,
  RAFTURI_SEO,
  RAFTURI_SLUG,
  rafturiFaq,
} from "@/lib/rafturi-content";

type PageProps = {
  params: Promise<{
    category: string;
  }>;
};

const categorySeo: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  rafturi: {
    title: RAFTURI_SEO.title,
    description: RAFTURI_SEO.description,
  },
  vitrine: {
    title: "Vitrine frigorifice pentru magazine",
    description:
      "Vitrine frigorifice pentru magazine alimentare, supermarketuri, cofetării, patiserii, băuturi, lactate și spații comerciale.",
  },
  tejghele: {
    title: "Tejghele comerciale pentru magazine",
    description:
      "Tejghele comerciale, mobilier pentru servire, recepție, casă de marcat și organizarea zonei de vânzare din magazine.",
  },
  gondole: {
    title: "Gondole pentru magazine",
    description:
      "Gondole centrale pentru magazine, supermarketuri și spații comerciale. Soluții pentru expunerea eficientă a produselor.",
  },
  "fructe-&-legume": {
    title: "Mobilier pentru fructe și legume",
    description:
      "Mobilier comercial pentru expunerea fructelor și legumelor în magazine, supermarketuri, minimarketuri și spații alimentare.",
  },
  "coffee-corner": {
    title: "Mobilier pentru coffee corner",
    description:
      "Soluții pentru coffee corner, cafenele și zone de servire: mobilier comercial, module de expunere și echipamente pentru magazine.",
  },
  accesorii: {
    title: "Accesorii pentru magazine",
    description:
      "Accesorii pentru rafturi, gondole, expunere produse și organizarea spațiilor comerciale.",
  },
  "panificație": {
    title: "Mobilier pentru panificație și brutării",
    description:
      "Mobilier comercial pentru panificație, brutării, patiserii și zone de expunere produse de panificație.",
  },
};

function getSeoForCategory(slug: string, categoryName?: string) {
  if (categorySeo[slug]) {
    return categorySeo[slug];
  }

  const cleanName = categoryName || "Produse";

  return {
    title: `${cleanName} pentru magazine`,
    description: `${cleanName} pentru magazine, supermarketuri, minimarketuri și spații comerciale. Soluții profesionale NextShop pentru retail.`,
  };
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const categorySlug = decodeURIComponent(category);

  const { data: categoryData } = await supabase
    .from("categories")
    .select("name, slug")
    .eq("slug", categorySlug)
    .maybeSingle();

  if (!categoryData) {
    return {
      title: "Categorie produse",
      description:
        "Produse pentru magazine, rafturi, vitrine frigorifice și mobilier comercial NextShop.",
    };
  }

  const seo = getSeoForCategory(categorySlug, categoryData.name);
  const isRafturi = categorySlug === RAFTURI_SLUG;

  return {
    // Titlul paginii de rafturi include deja sufixul brandului, deci ocolește template-ul din layout.
    title: isRafturi ? { absolute: seo.title } : seo.title,
    description: seo.description,
    alternates: {
      canonical: `https://nextshopretail.ro/produse/${encodeURIComponent(
        categorySlug
      )}`,
    },
    openGraph: {
      title: isRafturi ? seo.title : `${seo.title} | NextShop`,
      description: seo.description,
      url: `https://nextshopretail.ro/produse/${encodeURIComponent(
        categorySlug
      )}`,
      siteName: "NextShop",
      locale: "ro_RO",
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categorySlug = decodeURIComponent(category);

  const { data: categoryData } = await supabase
    .from("categories")
    .select("name, slug, image")
    .eq("slug", categorySlug)
    .maybeSingle();

  if (!categoryData) return notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://nextshopretail.ro",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Produse",
        item: "https://nextshopretail.ro/produse",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: categoryData.name,
        item: `https://nextshopretail.ro/produse/${encodeURIComponent(
          categorySlug
        )}`,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${categoryData.name} | NextShop`,
    description: getSeoForCategory(categorySlug, categoryData.name).description,
    url: `https://nextshopretail.ro/produse/${encodeURIComponent(
      categorySlug
    )}`,
  };

  const isRafturi = categorySlug === RAFTURI_SLUG;

  const faqSchema = isRafturi
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: rafturiFaq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <CategoryClient
        categorySlug={categorySlug}
        initialCategory={{ name: categoryData.name, image: categoryData.image }}
        title={isRafturi ? RAFTURI_H1 : undefined}
        intro={isRafturi ? <RafturiIntro /> : undefined}
        afterContent={isRafturi ? <RafturiSections /> : undefined}
      />
    </>
  );
}
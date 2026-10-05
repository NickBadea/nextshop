import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { blogMdxComponents } from "@/components/BlogMdxComponents";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const url = `https://nextshopretail.ro/blog/${post.slug}`;
  const imageUrl = `https://nextshopretail.ro${post.coverImage}`;

  return {
    // Dacă articolul are un titlu SEO dedicat (metaTitle), acesta ocolește template-ul din layout.
    title: post.metaTitle
      ? { absolute: post.metaTitle }
      : `${post.title} | Blog NextShop`,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.metaTitle ?? post.title,
      description: post.excerpt,
      url,
      siteName: "NextShop Retail",
      locale: "ro_RO",
      type: "article",
      publishedTime: post.date,
      images: [{ url: imageUrl, alt: post.coverAlt ?? post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle ?? post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://nextshopretail.ro${post.coverImage}`,
    datePublished: post.date,
    dateModified: post.date,
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
      "@id": `https://nextshopretail.ro/blog/${post.slug}`,
    },
  };

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="relative h-[300px] md:h-[420px] flex items-center">
        <Image
          src={post.coverImage}
          alt={post.coverAlt ?? post.title}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-white text-center">
          <p className="text-sm text-gray-200 mb-3">{formatDate(post.date)}</p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <MDXRemote source={post.content} components={blogMdxComponents} />

          <div className="mt-12 rounded-xl bg-blue-600 p-8 text-center">
            <p className="text-white font-semibold text-lg mb-5">
              Ai nevoie de rafturi, gondole sau vitrine frigorifice pentru
              magazinul tău?
            </p>

            <Link
              href="/cere-oferta"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Cere ofertă
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

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

  return {
    title: `${post.title} | Blog NextShop`,
    description: post.excerpt,
    alternates: {
      canonical: `https://nextshopretail.ro/blog/${post.slug}`,
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

  return (
    <main className="bg-white min-h-screen">
      <section className="relative h-[300px] md:h-[420px] flex items-center">
        <Image
          src={post.coverImage}
          alt={post.title}
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

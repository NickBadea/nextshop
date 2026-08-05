import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog NextShop – Ghiduri pentru amenajare magazin și supermarket",
  description:
    "Articole și ghiduri practice despre amenajare magazin, mobilier comercial, rafturi și vitrine frigorifice, utile înainte să-ți echipezi spațiul comercial.",
  alternates: {
    canonical: "https://nextshopretail.ro/blog",
  },
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-white min-h-screen">
      <section className="relative h-[260px] md:h-[340px] flex items-center">
        <Image
          src="/hero-produse.jpg"
          alt="Blog NextShop – ghiduri pentru amenajare magazin"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
            Blog NextShop
          </h1>

          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
            Ghiduri practice despre amenajare magazin, mobilier comercial și
            echipamente pentru spații comerciale.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    {formatDate(post.date)}
                  </p>

                  <h2 className="text-xl font-semibold text-black mb-3">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <span className="inline-block mt-5 text-blue-600 font-semibold">
                    Citește articolul →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

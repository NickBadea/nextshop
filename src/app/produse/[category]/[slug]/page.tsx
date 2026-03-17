export const dynamic = "force-dynamic";

import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductGallery from "@/components/ProductGallery";
import AddToQuoteButton from "@/components/AddToQuoteButton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; category: string }>;
}) {

  const { slug } = await params;

  const { data: product } = await supabase
    .from("products")
    .select("name, description, images")
    .eq("slug", slug)
    .maybeSingle();

  if (!product) {
    return {
      title: "Produs | NextShop",
    };
  }

  let images: string[] = [];

  try {
    images = product.images ? JSON.parse(product.images) : [];
  } catch {
    images = [];
  }

  return {
    title: `${product.name} | NextShop`,
    description:
      product.description ||
      "Mobilier profesional pentru magazine retail.",

    openGraph: {
      title: product.name,
      description: product.description,
      images: images[0] ? [images[0]] : [],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string; category: string }>;
}) {

  const { slug, category } = await params;

  const { data: product } = await supabase
    .from("products")
    .select(`
      *,
      category:categories (
        name,
        slug
      )
    `)
    .eq("slug", slug)
    .maybeSingle();

  if (!product) return notFound();

  let images: string[] = [];

  try {
    images = product.images ? JSON.parse(product.images) : [];
  } catch {
    images = [];
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: images[0],
  };

  const { data: related } = await supabase
    .from("products")
    .select("id,name,slug,images")
    .eq("category_id", product.category_id)
    .neq("id", product.id)
    .limit(3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="bg-white">

        {/* PRODUCT */}

        <section className="bg-gray-50 py-20">

          <div className="max-w-7xl mx-auto px-6">

            {/* BREADCRUMB */}

            <nav className="text-sm text-gray-500 mb-4 flex items-center gap-2">

              <Link href="/" className="hover:text-black">
                Home
              </Link>

              <span>/</span>

              <Link href="/produse" className="hover:text-black">
                Produse
              </Link>

              <span>/</span>

              {product.category && (
                <>
                  <Link
                    href={`/produse/${product.category.slug}`}
                    className="hover:text-black"
                  >
                    {product.category.name}
                  </Link>

                  <span>/</span>
                </>
              )}

              <span className="text-black font-medium">
                {product.name}
              </span>

            </nav>

            {/* PRODUCT GRID */}

            <div className="grid md:grid-cols-2 gap-16 mt-10">

              <ProductGallery images={images} />

              <div>

                <h1 className="text-4xl font-bold text-black mb-6">
                  {product.name}
                </h1>

                <p className="text-gray-600 leading-relaxed mb-10 whitespace-pre-line">
  {product.description}
</p>

                {/* CTA */}

                <div className="max-w-md">

                  <AddToQuoteButton
                    product={{
                      id: product.id,
                      name: product.name,
                      slug: product.slug,
                      image: images[0],
                    }}
                    className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-5 px-8 rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-[2px] transition"
                  />

                  {/* CONTACT */}

                  <div className="mt-8 text-sm text-gray-600 leading-relaxed">

                    <p className="font-semibold text-black mb-1">
                      Ai nevoie de informații suplimentare?
                    </p>

                    <p className="mb-2">
                      Contactează-ne și îți oferim toate detaliile despre acest produs.
                    </p>

                    <p>
                      Email:{" "}
                      <a
                        href="mailto:nextshopretail@yahoo.com"
                        className="text-blue-600 hover:underline"
                      >
                        nextshopretail@yahoo.com
                      </a>
                    </p>

                    <p>
                      Telefon:{" "}
                      <a
                        href="tel:+40771753423"
                        className="text-blue-600 hover:underline"
                      >
                        +40 771 753 423
                      </a>
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* RELATED PRODUCTS */}

        {related && related.length > 0 && (

          <section className="bg-white py-20">

            <div className="max-w-7xl mx-auto px-6">

              <h2 className="text-3xl font-bold mb-12 text-black">
                Produse similare
              </h2>

              <div className="grid md:grid-cols-3 gap-10">

                {related.map((item: any) => {

                  let relImages: string[] = [];

                  try {
                    relImages = item.images ? JSON.parse(item.images) : [];
                  } catch {
                    relImages = [];
                  }

                  return (

                    <Link
                      key={item.id}
                      href={`/produse/${category}/${item.slug}`}
                      className="group border rounded-xl overflow-hidden bg-white transition hover:shadow-xl"
                    >

                      {relImages[0] && (
                        <div className="overflow-hidden">
                          <img
                            src={relImages[0]}
                            className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}

                      <div className="p-6">
                        <h3 className="font-semibold text-black">
                          {item.name}
                        </h3>
                      </div>

                    </Link>

                  );

                })}

              </div>

            </div>

          </section>

        )}

      </main>
    </>
  );
}
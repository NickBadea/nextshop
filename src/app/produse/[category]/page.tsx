"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import AddToQuoteButton from "@/components/AddToQuoteButton";
import { LayoutGrid, List } from "lucide-react";

export default function CategoryPage() {

  const params = useParams();
  const searchParams = useSearchParams();

  const categorySlug = decodeURIComponent(params.category as string);

  const page = Number(searchParams.get("page") || 1);
  const limit = 16;

  const [products, setProducts] = useState<any[]>([]);
  const [category, setCategory] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {

    const loadData = async () => {

      const { data: categoryData } = await supabase
        .from("categories")
        .select("*")
        .eq("slug", categorySlug)
        .maybeSingle();

      if (!categoryData) return;

      setCategory(categoryData);

      const from = (page - 1) * limit;
      const to = from + limit - 1;

      const { data, count } = await supabase
  .from("products")
  .select("*", { count: "exact" })
  .eq("category_id", categoryData.id)
  .order("position", { ascending: true })
  .range(from, to);

      setProducts(data || []);
      setTotalPages(Math.ceil((count || 0) / limit));

    };

    if (categorySlug) loadData();

  }, [categorySlug, page]);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO CATEGORY */}

      <section className="relative h-[220px] flex items-center">

        {category?.image && (
          <img
            src={category.image}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

          <nav className="text-sm text-gray-300 mb-2 flex items-center gap-2">

            <Link href="/" className="hover:text-white">
              Home
            </Link>

            <span>/</span>

            <Link href="/produse" className="hover:text-white">
              Produse
            </Link>

            <span>/</span>

            <span className="font-medium">
              {category?.name}
            </span>

          </nav>

          <h1 className="text-4xl md:text-5xl font-bold">
            {category?.name}
          </h1>

        </div>

      </section>

      {/* CONTENT */}

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* SEARCH */}

        <input
          type="text"
          placeholder="Caută produs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-xl px-4 py-3 w-full text-black mb-8 shadow-sm"
        />

        {/* VIEW TOGGLE */}

        <div className="flex items-center justify-between mb-10">

          <span className="text-sm text-gray-600">
            Afișare
          </span>

          <div className="flex border rounded-lg overflow-hidden bg-gray-100">

            <button
              onClick={() => setView("list")}
              className={`px-3 py-2 ${
                view === "list"
                  ? "bg-white text-black shadow"
                  : "text-gray-500"
              }`}
            >
              <List size={18} />
            </button>

            <button
              onClick={() => setView("grid")}
              className={`px-3 py-2 ${
                view === "grid"
                  ? "bg-white text-black shadow"
                  : "text-gray-500"
              }`}
            >
              <LayoutGrid size={18} />
            </button>

          </div>

        </div>

        {/* GRID VIEW */}

        {view === "grid" && (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {filteredProducts.map((product) => {

              let images: string[] = [];

              try {
                images = product.images ? JSON.parse(product.images) : [];
              } catch {}

              return (

                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group"
                >

                  <Link href={`/produse/${encodeURIComponent(categorySlug)}/${encodeURIComponent(product.slug)}`}>

                    <div className="aspect-[4/3] bg-white overflow-hidden flex items-center justify-center">

  {images[0] && (
    <img
      src={images[0]}
      className="w-full h-full object-contain p-4 transition duration-500 group-hover:scale-105"
    />
  )}

</div>

                  </Link>

                  <div className="p-6 text-center">

                    <h3 className="font-semibold text-black text-lg mb-4">
                      {product.name}
                    </h3>

                    <AddToQuoteButton
                      product={{
                        id: product.id,
                        name: product.name,
                        slug: product.slug,
                        image: images[0],
                      }}
                    />

                  </div>

                </div>

              );

            })}

          </div>

        )}

       {/* LIST VIEW */}

{view === "list" && (

  <div className="space-y-6">

    {filteredProducts.map((product) => {

      let images: string[] = [];

      try {
        images = product.images ? JSON.parse(product.images) : [];
      } catch {}

      return (

        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition"
        >

          {/* TITLU */}

          <Link
            href={`/produse/${encodeURIComponent(categorySlug)}/${encodeURIComponent(product.slug)}`}
          >
            <h3 className="font-semibold text-black text-lg mb-4 leading-snug">
              {product.name}
            </h3>
          </Link>

          {/* CONTENT */}

          <div className="flex items-center gap-4">

            {/* IMAGINE */}

            <div className="w-28 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">

              {images[0] && (
                <img
                  src={images[0]}
                  className="w-full h-full object-cover"
                />
              )}

            </div>

            {/* BUTON */}

            <div className="flex-1 flex justify-end">

              <div className="w-full max-w-[180px]">
                <AddToQuoteButton
                  product={{
                    id: product.id,
                    name: product.name,
                    slug: product.slug,
                    image: images[0],
                  }}
                />
              </div>

            </div>

          </div>

        </div>

      );

    })}

  </div>

)}
        {/* PAGINATION */}

        {totalPages >= 1 && (

          <div className="flex justify-center mt-16 gap-2 flex-wrap">

            {Array.from({ length: totalPages }, (_, i) => {

              const pageNumber = i + 1;

              return (
                <Link
                  key={pageNumber}
                  href={`?page=${pageNumber}`}
                  className={`
                    px-4 py-2 rounded-lg border text-sm transition
                    ${pageNumber === page
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 hover:bg-gray-100"}
                  `}
                >
                  {pageNumber}
                </Link>
              );

            })}

          </div>

        )}

      </div>

    </main>
  );
}
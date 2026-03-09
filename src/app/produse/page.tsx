"use client";

export const dynamic = "force-dynamic";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import AddToQuoteButton from "@/components/AddToQuoteButton";
import { LayoutGrid, List } from "lucide-react";
import Image from "next/image";


export default function ProdusePage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"grid" | "list">("grid");


  
  // FETCH CATEGORIES
  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase.from("categories").select("id,name");
      setCategories(data || []);
    };
    fetchCategories();
  }, []);

  // FETCH PRODUCTS
  useEffect(() => {
    const fetchProducts = async () => {
      let query = supabase
        .from("products")
        .select(`
  id,
  name,
  slug,
  images,
  category:categories!left(name)
`)
        .order("created_at", { ascending: false });

      if (activeCategory) {
        query = query.eq("category_id", activeCategory);
      }

      const { data } = await query;
      setProducts(data || []);
    };

    fetchProducts();
  }, [activeCategory]);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[240px] md:h-[340px] flex items-center">
        <Image
          src="/hero-produse.jpg"
          alt="Mobilier retail profesional"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
            Produse
          </h1>

          <p className="text-base md:text-lg text-gray-200">
            Mobilier profesional pentru magazine retail
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-5 py-10 md:py-16">
        {/* SEARCH */}
        <input
          type="text"
          placeholder="Caută produs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-3 w-full text-black placeholder-gray-500 mb-6"
        />

        {/* CATEGORIES */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
          <button
            onClick={() => setActiveCategory(null)}
            className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium ${
              activeCategory === null
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-black"
            }`}
          >
            Toate
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* VIEW TOGGLE */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm text-gray-600">Afișare</span>

          <div className="flex border rounded-lg overflow-hidden bg-gray-100">
            <button
              onClick={() => setView("list")}
              className={`px-3 py-2 flex items-center justify-center ${
                view === "list"
                  ? "bg-white text-black shadow"
                  : "text-gray-500"
              }`}
            >
              <List size={18} />
            </button>

            <button
              onClick={() => setView("grid")}
              className={`px-3 py-2 flex items-center justify-center ${
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              let images: string[] = [];
              try {
                images = product.images ? JSON.parse(product.images) : [];
              } catch {}

              return (
                <div
                  key={product.id}
                  className="border rounded-xl p-5 hover:shadow-lg transition bg-white flex flex-col items-center text-center"
                >
                  <Link href={`/produse/${product.slug}`}>
                    <div className="aspect-square w-full bg-gray-50 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                      {images[0] ? (
                        <img
                          src={images[0]}
                          alt={product.name}
                          className="object-contain h-full w-full"
                        />
                      ) : (
                        <span className="text-gray-400">
                          Fără imagine
                        </span>
                      )}
                    </div>

                    <h3 className="font-semibold text-black text-lg mb-3 hover:text-blue-600">
                      {product.name}
                    </h3>
                  </Link>

                  <AddToQuoteButton
                    product={{
                      id: product.id,
                      name: product.name,
                      slug: product.slug,
                      image: images[0],
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* LIST VIEW */}
        {view === "list" && (

  <div className="space-y-4">

    {filteredProducts.map((product) => {

      let images: string[] = [];

      try {
        images = product.images ? JSON.parse(product.images) : [];
      } catch {}

      return (

        <div
          key={product.id}
          className="
          border rounded-xl p-4
          flex flex-col md:flex-row
          md:items-center
          gap-4
          hover:shadow-md transition
          "
        >

          {/* IMAGE */}

          <div className="w-16 h-16 bg-gray-50 rounded flex items-center justify-center overflow-hidden shrink-0">

            {images[0] ? (
              <img
                src={images[0]}
                alt={product.name}
                className="object-contain h-full w-full"
              />
            ) : (
              "-"
            )}

          </div>


          {/* TITLE */}

          <div className="flex-1">

            <Link href={`/produse/${product.slug}`}>

              <h3 className="font-semibold text-black text-lg hover:text-blue-600">
                {product.name}
              </h3>

            </Link>

          </div>


          {/* BUTTON */}

          <div className="md:w-[200px]">

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
      </div>
    </main>
  );
}
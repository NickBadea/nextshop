"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Image from "next/image";

export default function ProduseClient() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase
        .from("categories")
        .select("*")
        .order("position", { ascending: true });

      setCategories(data || []);
    };

    fetchCategories();
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <section className="relative h-[260px] md:h-[340px] flex items-center">
        <Image
          src="/hero-produse.jpg"
          alt="Rafturi metalice, vitrine frigorifice și mobilier comercial"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
            Rafturi, vitrine și mobilier comercial
          </h1>

          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
            Alege din gama noastră de rafturi metalice, gondole, vitrine
            frigorifice, tejghele și echipamente profesionale pentru magazine.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Produse pentru amenajarea magazinului tău
            </h2>

            <p className="text-gray-600 leading-relaxed">
              NextShop oferă soluții pentru magazine alimentare, supermarketuri,
              minimarketuri, cafenele, brutării și alte spații comerciale:
              rafturi metalice, gondole, vitrine frigorifice, tejghele, mobilier
              comercial și accesorii pentru expunerea produselor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/produse/${cat.slug}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition"
              >
                {cat.image && (
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                )}

                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white text-xl md:text-2xl font-bold text-center px-4">
                    {cat.name}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
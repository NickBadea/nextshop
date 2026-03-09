export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { getCategories } from "@/lib/getCategories";
import { useEffect, useState } from "react";

export const metadata = {
  title: "Mobilier profesional pentru magazine retail",
  description:
    "Tejghele, rafturi și vitrine profesionale pentru magazine retail. Soluții complete pentru spații comerciale în Craiova.",
};

export default function Home() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getCategories();
      setCategories(data || []);
    }
    load();
  }, []);

  return (
    <main className="bg-white">

      {/* HERO */}
      <Reveal>
        <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center text-center">

          <Image
            src="/hero2.jpg"
            alt="Mobilier profesional pentru magazine retail"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 max-w-5xl px-6 text-white flex flex-col items-center">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Mobilier profesional pentru retail modern Craiova
            </h1>

            <p className="mt-6 md:mt-8 text-base md:text-xl text-gray-200 max-w-3xl">
              Tejghele, rafturi și vitrine proiectate pentru performanță,
              durabilitate și design contemporan.
            </p>

            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6">

              <Link
                href="/produse"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold transition"
              >
                Vezi produsele
              </Link>

              <Link
                href="/cere-oferta"
                className="border border-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
              >
                Cere ofertă
              </Link>

            </div>

          </div>

        </section>
      </Reveal>


      {/* CINE SUNTEM */}
      <Reveal>
        <section className="py-16 md:py-28 bg-white">

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-24 items-center">

            <div>

              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 md:mb-8">
                Cine suntem
              </h2>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Oferim soluții profesionale în Craiova pentru amenajarea magazinelor și spațiilor comerciale.
                De la rafturi modulare și tejghele până la vitrine și echipamente pentru retail,
                ajutăm antreprenorii să creeze magazine funcționale, bine organizate și ușor de gestionat.
                Punem accent pe produse durabile, soluții eficiente de expunere și consultanță
                în alegerea echipamentelor potrivite pentru fiecare tip de magazin.
              </p>

              <Link
                href="/cine-suntem"
                className="inline-block mt-6 md:mt-8 text-blue-600 font-semibold hover:underline"
              >
                Află mai mult →
              </Link>

            </div>


            <div className="relative h-[320px] md:h-[420px] group">

              <div className="absolute w-[75%] h-[75%] top-0 left-0 rounded-xl overflow-hidden shadow-xl transition duration-500 group-hover:-rotate-3">
                <Image
                  src="/about.jpg"
                  alt="Amenajare magazin retail"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute w-[75%] h-[75%] bottom-0 right-0 rounded-xl overflow-hidden shadow-xl transition duration-500 group-hover:rotate-3">
                <Image
                  src="/about2.jpg"
                  alt="Mobilier comercial pentru magazine"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

          </div>

        </section>
      </Reveal>


      {/* DE CE NOI */}
      <Reveal>
        <section className="relative py-16 md:py-28">

          <Image
            src="/why.jpg"
            alt="Mobilier retail profesional"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 md:mb-16">
              De ce să ne alegi
            </h2>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-stretch">

              <Reveal delay={0.1}>
                <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg transition duration-300 hover:rotate-1 h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-black mb-4">
                    Materiale premium
                  </h3>

                  <p className="text-gray-600">
                    Structuri solide și finisaje durabile concepute
                    pentru utilizare comercială intensivă.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg transition duration-300 hover:rotate-1 h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-black mb-4">
                    Soluții personalizate
                  </h3>

                  <p className="text-gray-600">
                    Adaptăm designul și dimensiunile în funcție
                    de spațiul tău și fluxul de clienți.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg transition duration-300 hover:rotate-1 h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-black mb-4">
                    Ofertare rapidă
                  </h3>

                  <p className="text-gray-600">
                    Primești rapid o ofertă clară și consultanță
                    pentru alegerea soluției potrivite.
                  </p>
                </div>
              </Reveal>

            </div>

          </div>

        </section>
      </Reveal>


      {/* CTA */}
      <Reveal>
        <section className="bg-blue-600 text-white py-16 md:py-28 text-center">

          <div className="max-w-4xl mx-auto px-6">

            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
              Transformă spațiul tău comercial
            </h2>

            <p className="text-blue-100 mb-8 md:mb-10 text-base md:text-lg">
              Fie că deschizi un magazin nou sau vrei să modernizezi spațiul existent,
              îți oferim soluții complete de mobilier retail adaptate nevoilor tale.
            </p>

            <Link
              href="/cere-oferta"
              className="bg-white text-blue-600 px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Cere ofertă
            </Link>

          </div>

        </section>
      </Reveal>

    </main>
  );
}
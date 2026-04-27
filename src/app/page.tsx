export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Rafturi, vitrine frigorifice și mobilier comercial | NextShop Craiova",
  description:
    "NextShop oferă rafturi metalice, gondole, vitrine frigorifice, tejghele, case de marcat și mobilier comercial pentru magazine în Craiova și în toată România.",
  alternates: {
    canonical: "https://nextshopretail.ro",
  },
};

export default async function Home() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <Reveal>
        <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center text-center">
          <Image
            src="/hero2.jpg"
            alt="Rafturi metalice, vitrine frigorifice și mobilier comercial pentru magazine"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={75}
          />

          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 max-w-5xl px-6 text-white flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Rafturi, vitrine, tejghele și mobilier comercial
            </h1>

            <p className="mt-6 md:mt-8 text-base md:text-xl text-gray-100 max-w-3xl leading-relaxed">
              Soluții complete pentru magazine: rafturi metalice, gondole,
              vitrine frigorifice, tejghele, case de marcat și mobilier
              comercial în Craiova și în toată România.
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
                Soluții pentru magazine și spații comerciale
              </h2>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                NextShop oferă soluții profesionale pentru amenajarea
                magazinelor și spațiilor comerciale: rafturi metalice, gondole,
                vitrine frigorifice, tejghele, case de marcat și mobilier
                comercial. Lucrăm cu magazine, supermarketuri, minimarketuri,
                brutării, cafenele și alte spații comerciale care au nevoie de
                produse durabile, funcționale și ușor de integrat în designul
                magazinului.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed text-base md:text-lg">
                Oferim consultanță în alegerea produselor potrivite, în funcție
                de dimensiunea spațiului, tipul magazinului, fluxul de clienți
                și modul de expunere al produselor.
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
                  alt="Amenajare magazin cu rafturi metalice și mobilier comercial"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 75vw, 40vw"
                  quality={75}
                />
              </div>

              <div className="absolute w-[75%] h-[75%] bottom-0 right-0 rounded-xl overflow-hidden shadow-xl transition duration-500 group-hover:rotate-3">
                <Image
                  src="/about2.jpg"
                  alt="Vitrine frigorifice și soluții pentru magazine"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 75vw, 40vw"
                  quality={75}
                />
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CATEGORII PRINCIPALE */}
<Reveal>
  <section className="py-16 md:py-28 bg-blue-600">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Produse pentru amenajarea magazinului tău
              </h2>

              <p className="text-gray-600 leading-relaxed text-white md:text-lg">
                Gama NextShop include mobilier comercial și echipamente pentru
                magazine alimentare, supermarketuri, minimarketuri, brutării,
                cafenele, cofetării, patiserii și alte spații comerciale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Link
                href="/produse/rafturi"
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src="/about.jpg"
                    alt="Rafturi metalice pentru magazine"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-black/35"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Rafturi metalice
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Rafturi pentru magazine, supermarketuri, minimarketuri și
                    spații comerciale care au nevoie de organizare eficientă.
                  </p>

                  <span className="inline-block mt-5 text-blue-600 font-semibold">
                    Vezi categoria →
                  </span>
                </div>
              </Link>

              <Link
                href="/produse/vitrine"
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src="/about2.jpg"
                    alt="Vitrine frigorifice pentru magazine"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-black/35"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Vitrine frigorifice
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Vitrine pentru produse alimentare, băuturi, lactate, carne,
                    cofetărie, patiserie și zone refrigerate.
                  </p>

                  <span className="inline-block mt-5 text-blue-600 font-semibold">
                    Vezi categoria →
                  </span>
                </div>
              </Link>

              <Link
                href="/produse/tejghele"
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src="/why.jpg"
                    alt="Tejghele comerciale pentru magazine"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-black/35"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Tejghele comerciale
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Tejghele și mobilier pentru servire, casă de marcat,
                    recepție și organizarea zonei de vânzare.
                  </p>

                  <span className="inline-block mt-5 text-blue-600 font-semibold">
                    Vezi categoria →
                  </span>
                </div>
              </Link>

              <Link
                href="/produse/gondole"
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src="/hero2.jpg"
                    alt="Gondole pentru magazine"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-black/35"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Gondole pentru magazine
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Gondole centrale pentru expunerea produselor și organizarea
                    eficientă a culoarelor din magazin.
                  </p>

                  <span className="inline-block mt-5 text-blue-600 font-semibold">
                    Vezi categoria →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CRAIOVA / LOCAL */}
      <Reveal>
        <section className="py-16 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative h-[340px] md:h-[460px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/why.jpg"
                alt="Rafturi și mobilier comercial pentru magazine din Craiova"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
              />

              <div className="absolute inset-0 bg-black/45"></div>

              <div className="absolute left-6 right-6 bottom-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  NextShop Craiova
                </h3>

                <p className="text-gray-100 leading-relaxed">
                  Soluții pentru magazine alimentare, supermarketuri,
                  minimarketuri și spații comerciale.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 md:mb-8">
                Rafturi și mobilier comercial pentru magazine din Craiova
              </h2>

              <div className="space-y-5 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  Dacă ai un magazin în Craiova sau vrei să deschizi un spațiu
                  comercial, NextShop te poate ajuta cu rafturi metalice,
                  gondole, vitrine frigorifice, tejghele și soluții complete de
                  mobilier comercial.
                </p>

                <p>
                  Produsele sunt potrivite pentru magazine alimentare,
                  supermarketuri, minimarketuri, brutării, cafenele, cofetării,
                  patiserii și spații comerciale care au nevoie de mobilier
                  rezistent, practic și ușor de adaptat.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/produse"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
                >
                  Vezi produsele
                </Link>

                <Link
                  href="/cere-oferta"
                  className="border border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition text-center"
                >
                  Cere ofertă
                </Link>
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
            alt="Amenajare magazin cu rafturi, vitrine și mobilier comercial"
            fill
            className="object-cover"
            sizes="100vw"
            quality={75}
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 md:mb-16">
              De ce să alegi NextShop
            </h2>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-stretch">
              <Reveal delay={0.1}>
                <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg transition duration-300 hover:rotate-1 h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-black mb-4">
                    Produse rezistente
                  </h3>

                  <p className="text-gray-600">
                    Structuri solide și finisaje durabile, concepute pentru
                    utilizare comercială intensivă.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg transition duration-300 hover:rotate-1 h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-black mb-4">
                    Soluții adaptate magazinului
                  </h3>

                  <p className="text-gray-600">
                    Alegem împreună produsele potrivite în funcție de spațiu,
                    categorie, flux de clienți și tipul produselor expuse.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg transition duration-300 hover:rotate-1 h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-black mb-4">
                    Ofertare rapidă
                  </h3>

                  <p className="text-gray-600">
                    Primești rapid o ofertă clară și consultanță pentru alegerea
                    soluției potrivite.
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
              Cere ofertă pentru rafturi, vitrine și mobilier comercial
            </h2>

            <p className="text-white/90 mb-8 md:mb-10 text-base md:text-lg leading-relaxed">
              Fie că deschizi un magazin nou sau vrei să modernizezi spațiul
              existent, îți oferim soluții complete de mobilier comercial
              adaptate nevoilor tale.
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
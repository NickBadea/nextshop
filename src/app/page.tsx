export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Eye,
  MoveHorizontal,
  LayoutGrid,
  Sparkles,
  AlertTriangle,
  Boxes,
  Apple,
  Croissant,
  Milk,
  Snowflake,
  CupSoda,
  SprayCan,
  CreditCard,
  TrendingUp,
  Ruler,
  ShieldCheck,
  Settings2,
  MessageSquare,
  ClipboardList,
  FileCheck2,
  Truck,
  Wrench,
  Store,
  Building2,
  ShoppingBasket,
  Coffee,
  CakeSlice,
} from "lucide-react";

export const metadata = {
  title: "Amenajare Magazin și Supermarket – Rafturi | NextShop",
  description:
    "Amenajare magazin și amenajare supermarket cu rafturi metalice, gondole, vitrine frigorifice și mobilier comercial. Consultanță gratuită, ofertă rapidă, Craiova.",
  alternates: {
    canonical: "https://nextshopretail.ro",
  },
  openGraph: {
    title: "Amenajare Magazin și Supermarket | NextShop Retail",
    description:
      "Soluții complete de amenajare magazin și supermarket: rafturi, gondole, vitrine frigorifice, tejghele și mobilier comercial, în Craiova și în toată România.",
  },
  twitter: {
    title: "Amenajare Magazin și Supermarket | NextShop Retail",
    description:
      "Soluții complete de amenajare magazin și supermarket: rafturi, gondole, vitrine frigorifice, tejghele și mobilier comercial, în Craiova și în toată România.",
  },
};

const faqItems = [
  {
    question: "Ce presupune un serviciu de amenajare magazin la NextShop?",
    answer:
      "Amenajarea magazin include consultanță pentru alegerea produselor potrivite, recomandarea combinației optime de rafturi metalice, gondole, vitrine frigorifice și tejghele, livrarea produselor și montajul final la locația magazinului tău.",
  },
  {
    question: "Lucrați și cu supermarketuri, nu doar cu magazine mici?",
    answer:
      "Da, oferim soluții complete de amenajare supermarket, de la organizarea pe raioane până la echiparea cu rafturi, gondole și vitrine frigorifice pentru volume mari de produse și flux ridicat de clienți.",
  },
  {
    question:
      "Ce tip de rafturi magazin recomandați pentru un magazin alimentar?",
    answer:
      "Depinde de tipul produselor. Pentru produse de bază recomandăm rafturi metalice reglabile, pentru fructe și legume rafturi cu design înclinat, iar pentru panificație rafturi cu compartimente adaptate formei produselor.",
  },
  {
    question: "Cât durează livrarea produselor?",
    answer:
      "Termenul de livrare variază în funcție de tipul și cantitatea de produse comandate. La confirmarea comenzii, primești un termen estimat clar, comunicat împreună cu oferta.",
  },
  {
    question: "Livrați doar în Craiova sau și în alte orașe din România?",
    answer:
      "Livrăm în toată România. Showroom-ul nostru se află în zona Metro, Craiova, dar lucrăm cu clienți din orice regiune a țării.",
  },
  {
    question: "Rafturile și mobilierul comercial au garanție?",
    answer:
      "Da, produsele NextShop beneficiază de garanție, conform specificațiilor fiecărui tip de produs. Detaliile exacte despre perioada de garanție sunt comunicate la momentul ofertei, în funcție de categoria de produs.",
  },
  {
    question:
      "Ce se întâmplă dacă un raft sau o piesă de mobilier se defectează în perioada de garanție?",
    answer:
      "În perioada de garanție, analizăm problema semnalată și, dacă defectul este cauzat de un viciu de fabricație, reparăm sau înlocuim produsul, conform condițiilor de garanție agreate.",
  },
  {
    question: "Oferiți și montaj, sau livrați doar produsele?",
    answer:
      "Oferim atât livrare, cât și montaj, astfel încât magazinul tău să fie gata de funcționare fără să fie nevoie să te ocupi tu de asamblarea rafturilor sau a mobilierului comercial.",
  },
  {
    question:
      "Pot alege o combinație personalizată de rafturi, gondole și vitrine pentru magazinul meu?",
    answer:
      "Da, fiecare proiect de amenajare magazin este adaptat specificului afacerii tale. Recomandăm o combinație de produse în funcție de spațiu, tipul produselor comercializate și fluxul de clienți.",
  },
  {
    question: "Cum pot cere o ofertă pentru amenajarea magazinului meu?",
    answer:
      "Poți completa formularul de „Cere ofertă” de pe site sau ne poți contacta direct telefonic ori pe email. Îți răspundem rapid cu o recomandare de produse și un termen estimat de livrare.",
  },
];

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
              Amenajare magazin și supermarket cu rafturi profesionale
            </h1>

            <p className="mt-6 md:mt-8 text-base md:text-xl text-gray-100 max-w-3xl leading-relaxed">
              Servicii complete de amenajare magazin și amenajare supermarket:
              rafturi metalice, gondole, vitrine frigorifice, tejghele și
              mobilier comercial, în Craiova și în toată România.
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
                Amenajare magazin și supermarket – soluții complete
              </h2>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                NextShop este specializat în amenajare magazin și amenajare
                supermarket: rafturi metalice, gondole, vitrine frigorifice,
                tejghele și mobilier comercial. Lucrăm cu magazine,
                supermarketuri, minimarketuri, brutării, cafenele și alte
                spații comerciale care au nevoie de rafturi magazin durabile,
                funcționale și ușor de integrat în designul spațiului.
              </p>

              <p className="mt-5 text-gray-600 leading-relaxed text-base md:text-lg">
                Oferim consultanță pentru amenajarea magazinului, în funcție de
                dimensiunea spațiului, tipul afacerii, fluxul de clienți și
                modul de expunere a produselor pe rafturi.
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
                Gama NextShop acoperă toate nevoile de amenajare magazin și
                amenajare supermarket: magazine alimentare, minimarketuri,
                brutării, cafenele, cofetării, patiserii și alte spații
                comerciale.
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
                    Rafturi magazin pentru supermarketuri, minimarketuri și
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
                Amenajare magazin în Craiova – rafturi și mobilier comercial
              </h2>

              <div className="space-y-5 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  Dacă vrei o amenajare magazin sau amenajare supermarket în
                  Craiova, NextShop te poate ajuta cu rafturi magazin, gondole,
                  vitrine frigorifice, tejghele și mobilier comercial complet.
                </p>

                <p>
                  Soluțiile noastre sunt potrivite pentru magazine alimentare,
                  supermarketuri, minimarketuri, brutării, cafenele, cofetării,
                  patiserii și spații comerciale care au nevoie de mobilier
                  rezistent, practic și adaptabil.
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
                    Rafturi rezistente
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
                    Amenajare adaptată magazinului
                  </h3>

                  <p className="text-gray-600">
                    Proiectăm împreună amenajarea magazinului în funcție de
                    spațiu, categorie, flux de clienți și produsele expuse.
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

      {/* CE INSEAMNA O AMENAJARE CORECTA */}
      <Reveal>
        <section className="py-16 md:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-center text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
              Amenajare magazin
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
              Ce înseamnă o amenajare corectă a magazinului
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              O amenajare magazin bine gândită nu înseamnă doar montarea unor
              rafturi și așezarea produselor pe ele. Este vorba despre un
              proces care ține cont de fluxul de clienți, de tipul produselor
              comercializate, de suprafața disponibilă și de imaginea pe care
              magazinul vrea să o transmită.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Indiferent dacă vorbim despre un magazin alimentar de cartier,
              un minimarket sau un spațiu comercial mai mare, o amenajare
              corectă urmărește câteva obiective esențiale: vizibilitate bună
              pentru produse, culoare de circulație suficient de largi pentru
              clienți, zone clar delimitate (produse proaspete, băuturi,
              produse de bază, casă de marcat) și un aspect plăcut, ordonat.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Eye, label: "Vizibilitate bună pentru produse" },
                {
                  icon: MoveHorizontal,
                  label: "Culoare de circulație suficient de largi",
                },
                { icon: LayoutGrid, label: "Zone clar delimitate" },
                { icon: Sparkles, label: "Aspect plăcut și ordonat" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl shadow-lg p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <item.icon className="mx-auto text-blue-600" size={28} />
                  <p className="mt-4 text-sm font-semibold text-black leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              La NextShop, pornim orice proiect de amenajare magazin de la o
              discuție despre specificul afacerii tale. Analizăm dimensiunea
              spațiului, tipul de produse pe care le vinzi, fluxul estimat de
              clienți și bugetul disponibil, iar apoi recomandăm o combinație
              de rafturi metalice, gondole, vitrine frigorifice și tejghele
              care se potrivește nevoilor reale ale magazinului.
            </p>

            <div className="mt-8 max-w-3xl mx-auto flex gap-4 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6">
              <AlertTriangle
                className="shrink-0 text-amber-500 mt-1"
                size={24}
              />
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                O greșeală frecventă este alegerea rafturilor sau a
                mobilierului comercial doar pe baza prețului, fără a lua în
                calcul durabilitatea sau adaptabilitatea la schimbări
                viitoare (extinderea gamei de produse, reorganizarea
                spațiului, deschiderea unei noi zone de vânzare). De aceea,
                în procesul de amenajare, punem accent pe soluții modulare,
                care pot fi extinse sau reconfigurate ușor, fără a fi nevoie
                de o investiție complet nouă.
              </p>
            </div>

            <p className="mt-10 text-black font-medium leading-relaxed text-lg md:text-xl text-center max-w-3xl mx-auto">
              O amenajare magazin reușită se vede în timp: în viteza cu care
              clienții găsesc produsele, în eficiența angajaților care
              gestionează stocul și în felul în care spațiul rămâne
              funcțional chiar și atunci când afacerea crește.
            </p>
          </div>
        </section>
      </Reveal>

      {/* AMENAJARE SUPERMARKET */}
      <Reveal>
        <section className="py-16 md:py-28 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-center text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
              Amenajare supermarket
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
              Amenajare supermarket – ce presupune
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Amenajarea unui supermarket este un proces mai complex decât
              amenajarea unui magazin mic sau a unui minimarket, pentru că
              implică un volum mai mare de produse, mai multe categorii de
              mărfuri și un flux de clienți semnificativ mai ridicat. O
              amenajare supermarket bine realizată trebuie să gestioneze
              eficient toate aceste elemente, fără a compromite experiența de
              cumpărare.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              Primul pas într-un proiect de amenajare supermarket este
              organizarea pe raioane: produse de bază, fructe și legume,
              panificație, lactate, produse congelate, băuturi, produse de
              curățenie și zona de casă. Fiecare raion are nevoie de un tip
              specific de mobilier: rafturi metalice pentru produsele de
              bază, vitrine frigorifice pentru lactate și produse proaspete,
              gondole pentru expunerea produselor de sezon sau a ofertelor
              speciale și tejghele pentru zona de casă.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Boxes, label: "Produse de bază" },
                { icon: Apple, label: "Fructe și legume" },
                { icon: Croissant, label: "Panificație" },
                { icon: Milk, label: "Lactate" },
                { icon: Snowflake, label: "Produse congelate" },
                { icon: CupSoda, label: "Băuturi" },
                { icon: SprayCan, label: "Produse de curățenie" },
                { icon: CreditCard, label: "Zona de casă" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl shadow-md p-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <item.icon className="mx-auto text-blue-600" size={24} />
                  <p className="mt-3 text-sm font-semibold text-black leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              Un alt aspect esențial este fluxul de circulație. Într-un
              supermarket, culoarele trebuie să fie suficient de largi pentru
              a permite trecerea simultană a mai multor clienți, iar
              amplasarea rafturilor și a gondolelor trebuie să direcționeze
              natural traseul de cumpărare, fără a crea aglomerări sau zone
              moarte.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              La NextShop, oferim soluții complete de amenajare supermarket:
              de la rafturi metalice modulare, care pot fi reconfigurate pe
              măsură ce gama de produse se extinde, până la vitrine
              frigorifice profesionale pentru produsele care necesită
              refrigerare constantă. Lucrăm atât cu supermarketuri care se
              deschid pentru prima dată, cât și cu spații existente care au
              nevoie de o reorganizare sau de o extindere a zonelor de
              expunere.
            </p>

            <div className="mt-8 max-w-3xl mx-auto flex gap-4 rounded-xl bg-blue-600 p-6">
              <TrendingUp className="shrink-0 text-white mt-1" size={24} />
              <p className="text-white/95 leading-relaxed text-base md:text-lg">
                Un supermarket amenajat corect nu doar că arată profesionist,
                dar contribuie direct la creșterea vânzărilor: produsele bine
                expuse și ușor accesibile sunt cumpărate mai des, iar un flux
                clar de circulație reduce timpul petrecut de clienți în
                căutarea produselor și îmbunătățește experiența generală de
                cumpărare.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CUM ALEGI RAFTURILE */}
      <Reveal>
        <section className="py-16 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
              Rafturi magazin
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
              Cum alegi rafturile potrivite pentru magazinul tău
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto mb-12 md:mb-16">
              Alegerea rafturilor magazin potrivite este una dintre cele mai
              importante decizii într-un proiect de amenajare, pentru că
              rafturile influențează direct atât modul în care sunt expuse
              produsele, cât și eficiența spațiului disponibil. Nu toate
              rafturile magazin sunt potrivite pentru orice tip de afacere,
              iar alegerea greșită poate duce la spațiu prost folosit sau la
              produse greu accesibile pentru clienți.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Boxes,
                  title: "1. Tipul produselor",
                  text: "Pentru produse de bază (conserve, produse de curățenie, băuturi îmbuteliate), rafturile metalice clasice, cu rafturi reglabile pe înălțime, sunt cea mai practică soluție. Pentru fructe și legume, sunt necesare rafturi speciale, cu design înclinat și sisteme de scurgere, iar pentru produsele de panificație, rafturi cu compartimente adaptate formei pâinii și produselor de patiserie.",
                },
                {
                  icon: Ruler,
                  title: "2. Dimensiunea spațiului",
                  text: "Într-un magazin mic sau minimarket, rafturile trebuie să maximizeze capacitatea de depozitare pe verticală, fără a bloca vizibilitatea sau a îngusta prea mult culoarele. Într-un supermarket, unde spațiul este de obicei mai generos, rafturile pot fi organizate pe insule sau pe rânduri lungi, cu gondole pentru capetele de raft, unde se expun de obicei ofertele speciale.",
                },
                {
                  icon: ShieldCheck,
                  title: "3. Material și rezistență",
                  text: "Rafturile metalice sunt alegerea standard pentru magazinele alimentare, datorită rezistenței la greutate mare și a ușurinței de curățare și întreținere. Finisajele de calitate (vopsire electrostatică, protecție anticorozivă) prelungesc durata de viață a rafturilor, chiar și în condiții de utilizare intensivă.",
                },
                {
                  icon: Settings2,
                  title: "4. Flexibilitate",
                  text: "Un magazin care se dezvoltă are nevoie de rafturi care pot fi reconfigurate, extinse sau mutate, fără a fi nevoie de o investiție complet nouă de fiecare dată când se schimbă structura magazinului.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col transition duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-5">
                    <item.icon className="text-white" size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-black mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-gray-600 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              La NextShop, te ajutăm să alegi rafturile magazin potrivite
              pentru specificul afacerii tale, ținând cont de tipul
              produselor, dimensiunea spațiului și bugetul disponibil, astfel
              încât investiția să fie una eficientă pe termen lung.
            </p>
          </div>
        </section>
      </Reveal>

      {/* ETAPELE UNUI PROIECT */}
      <Reveal>
        <section className="py-16 md:py-28 bg-blue-600">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
              Etapele unui proiect de amenajare magazin cu NextShop
            </h2>

            <p className="text-white/90 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto mb-12 md:mb-16">
              Un proiect de amenajare magazin sau amenajare supermarket
              implică mai mulți pași, de la prima discuție până la montajul
              final al mobilierului comercial. La NextShop, urmăm un proces
              clar, astfel încât fiecare client să știe exact la ce să se
              aștepte în fiecare etapă.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: MessageSquare,
                  title: "1. Discuția inițială și evaluarea nevoilor",
                  text: "Totul pornește de la o discuție despre specificul afacerii tale: tipul magazinului, produsele pe care le comercializezi, dimensiunea spațiului și bugetul disponibil. Această etapă ne ajută să înțelegem ce tip de rafturi, vitrine frigorifice, gondole sau tejghele se potrivesc cel mai bine nevoilor tale.",
                },
                {
                  icon: ClipboardList,
                  title: "2. Consultanță și recomandare de soluții",
                  text: "Pe baza informațiilor primite, îți recomandăm o combinație de produse potrivită pentru amenajarea magazinului sau supermarketului tău, ținând cont de fluxul de clienți, de categoriile de produse și de bugetul stabilit.",
                },
                {
                  icon: FileCheck2,
                  title: "3. Ofertă și confirmare",
                  text: "Primești o ofertă clară, cu produsele recomandate, cantitățile necesare și termenele estimate de livrare. După confirmare, trecem la etapa de producție sau pregătire a comenzii.",
                },
                {
                  icon: Truck,
                  title: "4. Livrare",
                  text: "Produsele sunt livrate la adresa magazinului tău, în Craiova sau oriunde în România, în funcție de termenele stabilite în ofertă.",
                },
                {
                  icon: Wrench,
                  title: "5. Montaj și organizare finală",
                  text: "La final, te ajutăm cu montajul rafturilor, gondolelor și al celorlalte piese de mobilier comercial, astfel încât magazinul să fie gata de funcționare cât mai rapid posibil.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="flex gap-5 md:gap-6 items-start bg-white rounded-xl shadow-lg p-6 md:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 flex items-center justify-center">
                    <step.icon className="text-white" size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-black mb-2">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-12 text-white/90 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Acest proces ne permite să livrăm proiecte de amenajare magazin
              și amenajare supermarket adaptate real nevoilor fiecărui
              client, indiferent dacă este vorba despre un magazin nou sau
              despre modernizarea unui spațiu existent.
            </p>
          </div>
        </section>
      </Reveal>

      {/* FAQ */}
      <Reveal>
        <section className="py-16 md:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12 md:mb-16">
              Întrebări frecvente
            </h2>

            <FaqAccordion items={faqItems} />
          </div>
        </section>
      </Reveal>

      {/* TIPURI DE SPATII COMERCIALE */}
      <Reveal>
        <section className="py-16 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
              Pentru cine amenajăm
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-6">
              Tipuri de spații comerciale pentru care oferim soluții de
              amenajare
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto mb-12 md:mb-16">
              Experiența NextShop în amenajare magazin și amenajare
              supermarket acoperă o gamă largă de spații comerciale, fiecare
              cu cerințe specifice de mobilier și organizare. Iată
              principalele tipuri de afaceri cu care lucrăm și ce presupune
              amenajarea pentru fiecare dintre ele.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Store,
                  title: "Magazine alimentare de cartier",
                  text: "Pentru magazinele alimentare mici și mijlocii, prioritatea este maximizarea spațiului disponibil fără a compromite accesul clienților la produse. Recomandăm rafturi metalice modulare, care pot fi ajustate pe înălțime, combinate cu vitrine frigorifice compacte pentru produsele lactate și băuturi, și o tejghea funcțională pentru zona de casă.",
                },
                {
                  icon: Building2,
                  title: "Supermarketuri",
                  text: "Pentru amenajare supermarket, abordarea este diferită: volumul mare de produse și fluxul ridicat de clienți impun o organizare pe raioane clar delimitate, culoare largi de circulație și gondole strategice pentru produsele de sezon sau ofertele speciale. Vitrinele frigorifice trebuie să acopere zone extinse, pentru produse proaspete, congelate și lactate.",
                },
                {
                  icon: ShoppingBasket,
                  title: "Minimarketuri",
                  text: "Minimarketurile au nevoie de soluții compacte, dar eficiente. Rafturile trebuie să permită expunerea unei game variate de produse într-un spațiu redus, motiv pentru care recomandăm adesea rafturi cu rafturi ajustabile și gondole de dimensiuni mici, potrivite pentru culoare înguste.",
                },
                {
                  icon: Croissant,
                  title: "Brutării și patiserii",
                  text: "Pentru aceste spații, mobilierul trebuie adaptat formei specifice a produselor: rafturi și vitrine cu compartimente pentru pâine, cornuri, produse de patiserie, precum și tejghele cu vitrină pentru produsele care necesită expunere vizuală atractivă și acces rapid din partea vânzătorului.",
                },
                {
                  icon: Coffee,
                  title: "Cafenele și coffee corner",
                  text: "Amenajarea unei cafenele sau a unui coffee corner într-un magazin existent presupune mobilier compact, tejghele dedicate pentru zona de preparare și servire, precum și vitrine pentru produsele de patiserie sau gustările asociate băuturilor calde.",
                },
                {
                  icon: CakeSlice,
                  title: "Cofetării",
                  text: "Pentru cofetării, vitrinele frigorifice joacă un rol central, fiind principalul instrument de prezentare a produselor. Alegem vitrine cu temperatură controlată, potrivite pentru torturi, prăjituri și alte produse sensibile la temperatură, combinate cu mobilier de prezentare pentru zona de vânzare.",
                },
                {
                  icon: Apple,
                  title: "Fructe și legume",
                  text: "Zonele dedicate fructelor și legumelor, fie în cadrul unui magazin alimentar, fie ca standuri separate, necesită rafturi speciale, cu design înclinat și sisteme de scurgere, pentru a menține prospețimea produselor și a facilita accesul clienților.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col transition duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-5">
                    <item.icon className="text-white" size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-black mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-gray-600 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Indiferent de tipul spațiului comercial, procesul de amenajare
              magazin la NextShop pornește întotdeauna de la înțelegerea
              specificului afacerii tale, pentru a recomanda o combinație de
              produse care servește real nevoile magazinului, brutăriei,
              cafenelei sau supermarketului tău.
            </p>
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <Reveal>
        <section className="bg-blue-600 text-white py-16 md:py-28 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
              Cere ofertă pentru amenajare magazin sau supermarket
            </h2>

            <p className="text-white/90 mb-8 md:mb-10 text-base md:text-lg leading-relaxed">
              Fie că deschizi un magazin nou sau vrei să modernizezi spațiul
              existent, îți oferim soluții complete de amenajare magazin,
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
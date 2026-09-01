"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Boxes,
  LayoutGrid,
  Snowflake,
  ConciergeBell,
  ShieldCheck,
  SprayCan,
  TrendingUp,
  ShoppingCart,
  Coffee,
  Settings2,
  MoveHorizontal,
  Ruler,
  HandCoins,
} from "lucide-react";

const produseFaqItems = [
  {
    question: "Ce tipuri de mobilier magazin oferă NextShop?",
    answer:
      "Oferim rafturi metalice, gondole, vitrine frigorifice, tejghele și mobilier specializat pentru fructe și legume, panificație și coffee corner, potrivit pentru magazine alimentare, mixte și supermarketuri.",
  },
  {
    question: "Ce mobilier recomandați pentru un magazin alimentar mic?",
    answer:
      "Pentru un magazin alimentar de dimensiuni reduse, recomandăm rafturi metalice reglabile, o vitrină frigorifică compactă pentru lactate și băuturi, și o tejghea funcțională pentru zona de casă.",
  },
  {
    question:
      "Ce presupune mobilierul pentru un supermarket, față de un magazin obișnuit?",
    answer:
      "Mobilierul supermarket presupune volume mai mari de rafturi organizate pe raioane, gondole multiple pentru capete de raft și insule centrale, precum și vitrine frigorifice extinse pentru mai multe categorii de produse proaspete.",
  },
  {
    question:
      "Aveți idei de amenajare pentru un magazin mixt (alimentar și nealimentar)?",
    answer:
      "Da, recomandăm zonarea clară pe categorii, amplasarea produselor de impuls lângă casă, poziționarea strategică a vitrinelor frigorifice și, dacă spațiul permite, o mică zonă de coffee corner.",
  },
  {
    question: "Mobilierul poate fi reconfigurat dacă îmi schimb gama de produse?",
    answer:
      "Majoritatea rafturilor și gondolelor NextShop sunt modulare, ceea ce permite reconfigurarea sau extinderea lor pe măsură ce magazinul se dezvoltă sau se schimbă tipul de produse comercializate.",
  },
  {
    question: "Livrați mobilier magazin în toată România?",
    answer:
      "Da, livrăm în toată țara. Showroom-ul nostru se află în zona Metro, Craiova, dar lucrăm cu clienți din orice regiune.",
  },
  {
    question: "Cât durează livrarea mobilierului comandat?",
    answer:
      "Termenul de livrare depinde de tipul și cantitatea de mobilier comandat. Primești un termen estimat clar odată cu oferta.",
  },
  {
    question: "Mobilierul magazin are garanție?",
    answer:
      "Da, produsele NextShop beneficiază de garanție, conform specificațiilor fiecărei categorii de mobilier. Detaliile despre perioada de garanție sunt comunicate la momentul ofertei.",
  },
  {
    question: "Oferiți și montaj pentru mobilierul livrat?",
    answer:
      "Da, oferim atât livrare, cât și montaj, astfel încât magazinul tău să fie gata de funcționare fără să te ocupi tu de asamblare.",
  },
  {
    question: "Cum pot cere o ofertă pentru mobilierul magazinului meu?",
    answer:
      "Poți completa formularul de „Cere ofertă” de pe site sau ne poți contacta telefonic ori pe email. Îți recomandăm rapid o combinație de mobilier potrivită pentru magazinul tău.",
  },
];

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
            Mobilier magazin pentru alimentare, mixte și supermarketuri
          </h1>

          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
            Descoperă gama NextShop de mobilier magazin: rafturi metalice,
            gondole, vitrine frigorifice și tejghele pentru magazine
            alimentare și mixte.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Mobilier magazin pentru fiecare tip de spațiu comercial
            </h2>

            <p className="text-gray-600 leading-relaxed">
              NextShop oferă mobilier magazin alimentar, mobilier supermarket
              și soluții pentru magazine mixte, cafenele și brutării: rafturi
              metalice, gondole, vitrine frigorifice, tejghele și accesorii
              pentru expunere.
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

      {/* MOBILIER MAGAZIN - CE TIPURI OFERIM */}
      <Reveal>
        <section className="py-16 md:py-28 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-center text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
              Mobilier magazin
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
              Mobilier magazin – ce tipuri oferim
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Gama NextShop de mobilier magazin acoperă toate nevoile unui
              spațiu comercial, indiferent de dimensiune sau profil de
              activitate. Fiecare tip de mobilier are un rol precis în
              organizarea magazinului și în modul în care produsele ajung la
              clienți.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Boxes,
                  title: "Rafturile metalice",
                  text: "sunt coloana vertebrală a oricărui magazin alimentar sau mixt. Sunt disponibile în variante reglabile pe înălțime, potrivite pentru produse de bază, conserve, băuturi îmbuteliate sau produse de curățenie, și pot fi configurate pe măsura spațiului disponibil.",
                },
                {
                  icon: LayoutGrid,
                  title: "Gondolele",
                  text: "sunt piese centrale de mobilier magazin, folosite pentru expunerea produselor de sezon, a ofertelor speciale sau a produselor cu rotație rapidă. Sunt frecvent amplasate pe culoarele principale sau la capetele rândurilor de rafturi, în zonele cu cel mai mare trafic de clienți.",
                },
                {
                  icon: Snowflake,
                  title: "Vitrinele frigorifice",
                  text: "completează gama de mobilier magazin pentru produsele care necesită refrigerare: lactate, mezeluri, băuturi răcite, produse congelate sau produse de patiserie și cofetărie. Sunt disponibile în variante verticale, orizontale sau de tip insulă, în funcție de spațiul și tipul de produse expuse.",
                },
                {
                  icon: ConciergeBell,
                  title: "Tejghelele",
                  text: "organizează zona de casă și de servire, fiind esențiale atât pentru magazinele alimentare clasice, cât și pentru cafenele sau coffee corner-uri integrate în spațiul comercial.",
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

                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              La acestea se adaugă mobilierul specializat pentru anumite
              categorii de produse: rafturi cu design înclinat pentru fructe
              și legume, respectiv mobilier cu compartimente adaptate pentru
              panificație și produse de patiserie.
            </p>

            <p className="mt-6 text-black font-medium leading-relaxed text-lg md:text-xl text-center max-w-3xl mx-auto">
              Toate aceste categorii de mobilier magazin pot fi combinate în
              funcție de specificul afacerii tale, de la un magazin alimentar
              de cartier până la un supermarket sau un magazin mixt cu mai
              multe zone de vânzare.
            </p>
          </div>
        </section>
      </Reveal>

      {/* MOBILIER PENTRU MAGAZIN ALIMENTAR */}
      <Reveal>
        <section className="py-16 md:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-center text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
              Magazin alimentar
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
              Mobilier pentru magazin alimentar
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Mobilierul magazin alimentar trebuie să răspundă unor cerințe
              specifice: rezistență la utilizare intensivă, ușurință în
              curățare și capacitatea de a păstra produsele proaspete în
              condiții optime. Fiind un spațiu în care produsele se schimbă
              frecvent și fluxul de clienți este constant, alegerea
              mobilierului potrivit influențează direct eficiența activității
              zilnice.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, label: "Rezistență la utilizare intensivă" },
                { icon: SprayCan, label: "Ușurință în curățare" },
                { icon: Snowflake, label: "Produse păstrate proaspete" },
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
              Pentru un magazin alimentar, baza mobilierului o reprezintă
              rafturile metalice, alese pentru rezistența la greutate și
              pentru finisajele care rezistă la manipulare frecventă. Acestea
              sunt folosite pentru produse de bază, conserve, produse de
              curățenie și băuturi îmbuteliate, fiind de obicei organizate pe
              culoare clar delimitate.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              Vitrinele frigorifice sunt indispensabile pentru un magazin
              alimentar, acoperind zonele de lactate, mezeluri, produse
              congelate și băuturi răcite. Alegerea corectă a vitrinelor, în
              funcție de temperatura necesară și de volumul de produse,
              previne pierderile cauzate de o refrigerare inadecvată.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              Gondolele completează mobilierul magazin alimentar prin
              expunerea produselor de sezon sau a ofertelor speciale, de
              obicei amplasate în zone strategice, cu vizibilitate ridicată
              pentru clienți. Tejghelele, la rândul lor, organizează zona de
              casă și, în multe cazuri, servesc și pentru produse care
              necesită cântărire sau servire directă (mezeluri, brânzeturi,
              produse de patiserie).
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              Un aspect important pentru mobilierul magazin alimentar este
              flexibilitatea: rafturile modulare, care pot fi reconfigurate
              pe măsură ce gama de produse se schimbă, oferă un avantaj real
              pe termen lung, evitând investiții repetate în mobilier nou.
            </p>

            <div className="mt-8 max-w-3xl mx-auto rounded-xl bg-blue-50 border-l-4 border-blue-600 p-6">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                Recomandăm combinații de mobilier magazin alimentar adaptate
                exact tipului de produse comercializate și dimensiunii
                spațiului, astfel încât fiecare magazin să funcționeze
                eficient, indiferent de suprafață.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* MOBILIER PENTRU SUPERMARKET */}
      <Reveal>
        <section className="py-16 md:py-28 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-center text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
              Supermarket
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
              Mobilier pentru supermarket
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Mobilierul supermarket trebuie gândit la o scară diferită față
              de un magazin alimentar clasic. Volumul mare de produse,
              numărul ridicat de categorii și fluxul constant de clienți
              impun soluții de mobilier care combină capacitate mare de
              depozitare cu organizare clară pe raioane.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              Într-un supermarket, rafturile metalice sunt organizate de
              obicei pe rânduri lungi, grupate pe categorii de produse:
              alimente de bază, produse de curățenie, băuturi, produse de
              îngrijire personală. Această organizare pe raioane, susținută
              de mobilier modular, permite clienților să găsească rapid
              produsele căutate, chiar și într-un spațiu cu suprafață mare.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              Gondolele joacă un rol important în mobilierul supermarket,
              fiind folosite atât pentru capetele de raft, unde se expun
              ofertele speciale, cât și pentru insulele centrale, dedicate
              produselor sezoniere sau promoțiilor. Amplasarea corectă a
              gondolelor influențează direct traseul de cumpărare al
              clienților prin magazin.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              Vitrinele frigorifice pentru supermarket acoperă, de regulă,
              zone mult mai extinse decât într-un magazin alimentar obișnuit:
              lactate, produse congelate, mezeluri, băuturi răcite și,
              adesea, o zonă dedicată produselor proaspete (fructe, legume,
              produse de patiserie). Aceste vitrine trebuie să mențină
              temperatura constantă chiar și în condiții de trafic ridicat și
              deschidere frecventă a ușilor.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              Tejghelele pentru supermarket sunt organizate de obicei în zone
              multiple de casă, pentru a gestiona eficient fluxul de clienți
              la orele de vârf, iar mobilierul complementar (rafturi pentru
              produse de impuls, standuri pentru cataloage sau materiale
              promoționale) completează experiența de cumpărare.
            </p>

            <div className="mt-8 max-w-3xl mx-auto flex gap-4 rounded-xl bg-blue-600 p-6">
              <TrendingUp className="shrink-0 text-white mt-1" size={24} />
              <p className="text-white/95 leading-relaxed text-base md:text-lg">
                Oferim mobilier supermarket complet, de la rafturi modulare
                care pot fi extinse pe măsură ce afacerea crește, până la
                vitrine frigorifice profesionale, adaptate volumului de
                produse și fluxului de clienți specific unui supermarket.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* IDEI DE AMENAJARE PENTRU MAGAZIN MIXT */}
      <Reveal>
        <section
          id="amenajare-magazin-mixt"
          className="py-16 md:py-28 bg-blue-600 scroll-mt-24"
        >
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-white/80 font-semibold tracking-wide uppercase text-sm mb-4">
              Magazin mixt
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
              Idei de amenajare pentru magazin mixt
            </h2>

            <p className="text-white/90 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto mb-12 md:mb-16">
              Un magazin mixt combină, de obicei, produse alimentare cu
              produse nealimentare (articole de uz casnic, produse de
              igienă, uneori chiar și o zonă de cafenea sau coffee corner),
              ceea ce face ca amenajarea să fie mai complexă decât la un
              magazin specializat pe o singură categorie. Iată câteva idei de
              amenajare magazin mixt care pot ajuta la organizarea eficientă
              a unui astfel de spațiu.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: LayoutGrid,
                  title: "Zonare clară pe categorii",
                  text: "Prima idee esențială este delimitarea clară a zonelor: alimente de bază, produse proaspete, produse nealimentare, eventual zona de cafenea. Rafturile metalice și gondolele pot fi folosite ca elemente de separare vizuală între aceste zone, fără a fi nevoie de pereți despărțitori.",
                },
                {
                  icon: ShoppingCart,
                  title: "Produse de impuls lângă casă",
                  text: "Zona de lângă tejghea și casa de marcat este ideală pentru produse de impuls (gustări, băuturi, produse mici nealimentare), profitând de timpul de așteptare al clienților.",
                },
                {
                  icon: Snowflake,
                  title: "Vitrine frigorifice poziționate strategic",
                  text: "Într-un magazin mixt, vitrinele frigorifice pentru produse proaspete și băuturi răcite ar trebui poziționate astfel încât să fie vizibile din mai multe puncte ale magazinului, nu doar într-un colț izolat.",
                },
                {
                  icon: Coffee,
                  title: "Zonă de coffee corner, dacă spațiul permite",
                  text: "Multe magazine mixte adaugă o mică zonă de cafenea sau coffee corner, cu o tejghea dedicată și câteva rafturi pentru produse de patiserie. Aceasta poate crește timpul petrecut de clienți în magazin și valoarea medie a coșului de cumpărături.",
                },
                {
                  icon: Settings2,
                  title: "Rafturi modulare pentru flexibilitate",
                  text: "Pentru că un magazin mixt tinde să-și schimbe frecvent gama de produse (în funcție de sezon sau de cerere), rafturile modulare, ușor de reconfigurat, sunt o alegere mai bună decât mobilierul fix.",
                },
                {
                  icon: MoveHorizontal,
                  title: "Culoare de circulație pentru trafic mixt",
                  text: "Într-un magazin mixt, clienții au motive diferite de vizită (cumpărături zilnice, produse de uz casnic, o cafea rapidă), așa că e important ca fluxul de circulație să permită acces rapid la fiecare zonă, fără aglomerare.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="w-11 h-11 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                    <item.icon className="text-white" size={20} />
                  </div>

                  <h3 className="text-base font-semibold text-black mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-white/90 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Ajutăm proprietarii de magazine mixte să găsească cele mai
              potrivite idei de amenajare, combinând rafturi, gondole,
              vitrine frigorifice și tejghele într-o configurație care
              servește toate categoriile de produse comercializate.
            </p>
          </div>
        </section>
      </Reveal>

      {/* CUM ALEGI MOBILIERUL POTRIVIT */}
      <Reveal>
        <section className="py-16 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
              Ghid de alegere
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
              Cum alegi mobilierul potrivit pentru magazinul tău
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto mb-12 md:mb-16">
              Alegerea mobilierului magazin potrivit depinde de câțiva
              factori esențiali, care variază de la un tip de afacere la
              altul. Indiferent dacă amenajezi un magazin alimentar, un
              supermarket sau un magazin mixt, câteva criterii rămân valabile
              în toate cazurile.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Boxes,
                  title: "Tipul produselor comercializate",
                  text: "Produsele de bază au nevoie de rafturi metalice standard, produsele proaspete necesită vitrine frigorifice, iar produsele de impuls sau cele sezoniere se expun cel mai bine pe gondole, în zone cu vizibilitate ridicată.",
                },
                {
                  icon: Ruler,
                  title: "Dimensiunea spațiului disponibil",
                  text: "Într-un spațiu mic, mobilierul trebuie să maximizeze capacitatea de depozitare pe verticală, în timp ce într-un supermarket sau un spațiu generos, mobilierul poate fi organizat pe rânduri lungi și insule centrale.",
                },
                {
                  icon: MoveHorizontal,
                  title: "Fluxul de clienți",
                  text: "Un magazin cu trafic ridicat are nevoie de culoare mai largi și de o dispunere a mobilierului care să evite aglomerările, în timp ce un magazin mai mic poate opta pentru o configurație mai compactă.",
                },
                {
                  icon: HandCoins,
                  title: "Bugetul disponibil",
                  text: "Bugetul determină tipul și cantitatea de mobilier ales, dar merită analizat și din perspectiva investiției pe termen lung: mobilierul de calitate, cu finisaje durabile, reduce nevoia de înlocuiri frecvente.",
                },
                {
                  icon: Settings2,
                  title: "Flexibilitatea și posibilitatea de extindere",
                  text: "Un magazin care se dezvoltă are nevoie de mobilier modular, ușor de reconfigurat sau extins, fără a necesita o investiție complet nouă de fiecare dată când se schimbă gama de produse sau structura spațiului.",
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

                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-gray-600 leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto">
              Te ajutăm să alegi mobilierul magazin potrivit pentru profilul
              exact al afacerii tale, indiferent dacă vorbim despre un
              magazin alimentar, un supermarket sau un magazin mixt, ținând
              cont de toate aceste criterii într-o recomandare personalizată.
            </p>
          </div>
        </section>
      </Reveal>

      {/* FAQ */}
      <Reveal>
        <section className="py-16 md:py-28 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12 md:mb-16">
              Întrebări frecvente
            </h2>

            <FaqAccordion items={produseFaqItems} />
          </div>
        </section>
      </Reveal>
    </main>
  );
}
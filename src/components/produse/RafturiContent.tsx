import Image from "next/image";
import Link from "next/link";
import { Boxes, Building2, ChevronDown, Store } from "lucide-react";
import { RAFTURI_FAQ_TITLE, rafturiFaq } from "@/lib/rafturi-content";

const inlineLink = "text-blue-600 font-semibold hover:underline";

export function RafturiIntro() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        <p className="max-w-4xl text-gray-600 leading-relaxed text-base md:text-lg">
          Rafturi metalice pentru magazine alimentare, minimarketuri,
          supermarketuri și alte spații comerciale. Alege din gama de mai jos
          sau spune-ne ce vinzi și cât spațiu ai, iar Next Shop Retail îți
          propune configurația potrivită și o ofertă clară. Suntem dealer
          Modern Expo pentru sud-vestul României și ținem în stoc multe dintre
          repere.
        </p>
      </div>
    </section>
  );
}

export function RafturiSections() {
  return (
    <>
      {/* RAFTURI PENTRU FIECARE TIP DE SPATIU */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Rafturi magazin pentru fiecare tip de spațiu comercial
          </h2>

          <p className="max-w-4xl text-gray-600 leading-relaxed text-base md:text-lg mb-12">
            Rafturile unui magazin alimentar de cartier nu se aleg după aceleași
            criterii ca ale unui supermarket. Se schimbă tipul mărfii, greutatea
            ei, ritmul de reaprovizionare și suprafața de acoperit. De aceea
            gama de mai sus se alege mai ușor dacă pornești de la spațiul tău,
            nu de la catalog.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-gray-100 shadow-lg p-8 transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-5">
                <Store className="text-white" size={22} aria-hidden="true" />
              </div>

              <h3 className="text-xl font-semibold text-black mb-3">
                Magazin alimentar și minimarket
              </h3>

              <p className="text-gray-600 leading-relaxed">
                În spațiile mici, fiecare metru liniar contează. Rafturile
                magazin alimentar se montează de regulă pe perete și în culoare
                scurte, iar polițele de la nivelul ochilor merg către produsele
                cu marjă bună sau cu vânzare rapidă. Un sistem modular îți
                permite să muți și să adaugi polițe atunci când se schimbă
                sortimentul, fără să cumperi mobilierul de la zero.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-lg p-8 transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-5">
                <Building2 className="text-white" size={22} aria-hidden="true" />
              </div>

              <h3 className="text-xl font-semibold text-black mb-3">
                Supermarket
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Un volum mare de marfă cere rânduri lungi, organizate pe raioane,
                și capete de gondolă pentru promoții. La rafturile supermarket
                contează uniformitatea: același sistem pe tot rândul, ca o
                extindere peste doi ani să nu însemne piese care nu se potrivesc
                între ele. Pentru expunerea din mijlocul culoarelor, vezi și{" "}
                <Link href="/produse/gondole" className={inlineLink}>
                  gondolele
                </Link>
                .
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-lg p-8 transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-5">
                <Boxes className="text-white" size={22} aria-hidden="true" />
              </div>

              <h3 className="text-xl font-semibold text-black mb-3">
                Categorii cu cerințe speciale
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Unele zone ale magazinului au nevoie de mobilier dedicat. Pentru{" "}
                <Link href="/produse/fructe-%26-legume" className={inlineLink}>
                  fructe și legume
                </Link>
                , pentru{" "}
                <Link href="/produse/panifica%C8%9Bie" className={inlineLink}>
                  panificație
                </Link>{" "}
                și pentru{" "}
                <Link href="/produse/accesorii" className={inlineLink}>
                  accesorii
                </Link>{" "}
                avem categorii separate, cu modele gândite pentru marfa
                respectivă.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CUM ALEGI - TEXT + IMAGINE */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Cum alegi rafturile potrivite pentru magazinul tău
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed text-base md:text-lg">
              <p>
                Înainte de a compara modele, merită răspuns la câteva întrebări
                simple.
              </p>

              <p>
                <strong className="text-black font-semibold">
                  Ce pui pe raft?
                </strong>{" "}
                Conservele, apele îmbuteliate și produsele de curățenie cer
                polițe care țin greutate, iar articolele mici se așază mai bine
                pe polițe mai puțin adânci, la îndemâna clientului. Pentru
                majoritatea produselor mici și mijlocii, polițele de 35-40 cm
                sunt un punct de pornire bun. Adâncimi mai mari alegi doar acolo
                unde marfa o cere.
              </p>

              <p>
                <strong className="text-black font-semibold">
                  Unde se uită clientul?
                </strong>{" "}
                Produsele de la nivelul ochilor se vând de regulă mai bine decât
                cele de pe polițele de jos. Polițele de jos rămân pentru
                greutate și stoc, iar cele de sus pentru marfă voluminoasă,
                pentru că mulți clienți nu ajung la ele.
              </p>

              <p>
                <strong className="text-black font-semibold">
                  Cât de largi sunt culoarele?
                </strong>{" "}
                Adâncimea rafturilor din ambele părți se scade din lățimea
                culoarului. Un culoar prea îngust încetinește tot magazinul la
                orele aglomerate.
              </p>

              <p>
                <strong className="text-black font-semibold">
                  Vrei să extinzi mai târziu?
                </strong>{" "}
                Alege un sistem din aceeași gamă. Piesele din sisteme diferite
                nu sunt, în general, compatibile între ele.
              </p>

              <p>
                Despre înălțimi, adâncimi, capacitate de încărcare și amplasare
                găsești mai multe în{" "}
                <Link href="/blog/ghid-amenajare-magazin" className={inlineLink}>
                  ghidul nostru de amenajare a unui magazin
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="order-first lg:order-2">
            <Image
              src="/rafturi-magazin-alimentar.webp"
              alt="Rafturi metalice într-un magazin alimentar, cu produse expuse pe polițe și culoar liber"
              width={1600}
              height={1051}
              loading="lazy"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* DE LA CONSULTANTA LA LIVRARE */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            De la consultanță la livrare
          </h2>

          <p className="text-white/90 leading-relaxed text-base md:text-lg">
            Next Shop Retail este dealer Modern Expo pentru sud-vestul
            României, cu showroom în zona Metro, Calea București nr. 139A,
            Pielești. Pornim de la planul spațiului, de la lista produselor și
            de la fluxul de clienți, apoi propunem o configurație de rafturi
            comerciale. Înainte de comandă poți vedea magazinul într-o randare
            3D și poți muta polițele pe ecran, nu după montaj. Ținem în stoc
            multe dintre repere și livrăm în toată țara.
          </p>
        </div>
      </section>

      {/* INTREBARI FRECVENTE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            {RAFTURI_FAQ_TITLE}
          </h2>

          <div className="space-y-4">
            {rafturiFaq.map((item, index) => {
              const parts = item.link ? item.answer.split(item.link.text) : null;

              return (
                <details
                  key={item.question}
                  open={index === 0}
                  className="group rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 open:shadow-md"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-6 py-5 text-left font-semibold text-black focus-visible:outline-2 focus-visible:outline-blue-600 [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>

                    <ChevronDown
                      aria-hidden="true"
                      size={20}
                      className="shrink-0 text-blue-600 transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>

                  <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {item.link && parts ? (
                      <>
                        {parts[0]}
                        <Link href={item.link.href} className={inlineLink}>
                          {item.link.text}
                        </Link>
                        {parts.slice(1).join(item.link.text)}
                      </>
                    ) : (
                      item.answer
                    )}
                  </p>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* APEL FINAL */}
      <section className="py-16 md:py-24 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ai nevoie de rafturi pentru magazinul tău?
          </h2>

          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8">
            Spune-ne ce vinzi și ce suprafață ai. Îți propunem configurația, o
            randare 3D și o ofertă clară.
          </p>

          <Link
            href="/cere-oferta"
            className="inline-block bg-white text-blue-600 px-8 py-3 md:px-10 md:py-4 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Cere ofertă
          </Link>
        </div>
      </section>
    </>
  );
}

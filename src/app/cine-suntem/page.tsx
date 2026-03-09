import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Cine suntem | MobilierPro",
  description:
    "Descoperă experiența noastră în furnizarea de mobilier profesional pentru magazine și spații comerciale.",
};

export default function CineSuntem() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden">

        <Image
          src="/about-hero.jpg"
          alt="Mobilier profesional pentru magazine retail"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white text-center">

          <Reveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Construim spații comerciale funcționale și moderne
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
              Experiență, calitate și soluții personalizate pentru fiecare proiect.
            </p>
          </Reveal>

        </div>

      </section>


      {/* DESCRIERE */}
      <section className="py-16 md:py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-black">
              Povestea noastră
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Suntem o companie specializată în furnizarea de mobilier comercial
              și soluții complete pentru amenajarea magazinelor retail. Lucrăm
              cu antreprenori, comercianți și lanțuri de magazine care au nevoie
              de echipamente profesionale pentru organizarea și prezentarea produselor.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg mt-6 md:mt-8">
              Portofoliul nostru include rafturi comerciale, tejghele, vitrine,
              vitrine frigorifice și alte echipamente esențiale pentru funcționarea
              unui magazin modern. Produsele pe care le oferim sunt concepute pentru
              a optimiza spațiul, a îmbunătăți experiența clienților și a facilita
              gestionarea eficientă a magazinului.
            </p>
          </Reveal>

        </div>

      </section>


      {/* PUNCTE FORTE */}
      <section className="bg-blue-600 py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-6">

          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12 md:mb-16">
              Punctele noastre forte
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-stretch">

            <Reveal delay={0.1}>
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-md text-center h-full flex flex-col justify-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

                <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-4 md:mb-6">
                  Dealer autorizat Modern Expo
                </h3>

                <p className="text-gray-600">
                  Produse originale de la unul dintre cei mai mari producători
                  de mobilier comercial din Europa.
                </p>

              </div>
            </Reveal>


            <Reveal delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-md text-center h-full flex flex-col justify-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

                <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-4 md:mb-6">
                  Produse disponibile din stoc
                </h3>

                <p className="text-gray-600">
                  Multe dintre produsele noastre pot fi livrate rapid,
                  fără timpi lungi de așteptare.
                </p>

              </div>
            </Reveal>


            <Reveal delay={0.3}>
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-md text-center h-full flex flex-col justify-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]">

                <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-4 md:mb-6">
                  Consultanță
                </h3>

                <p className="text-gray-600">
                  Te ajutăm să alegi soluțiile potrivite pentru organizarea
                  eficientă a magazinului.
                </p>

              </div>
            </Reveal>

          </div>

        </div>

      </section>


      {/* VALORI */}
      <section className="bg-white py-16 md:py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <Reveal>
            <h2 className="text-2xl md:text-3xl text-black font-bold mb-8 md:mb-10">
              Valorile noastre
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Ne ghidăm după principii clare: profesionalism, transparență
              și orientare către client. Construim relații pe termen lung
              și livrăm soluții care contribuie la succesul partenerilor noștri.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 md:mt-12">

              <Link
                href="/cere-oferta"
                className="bg-blue-600 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold transition hover:bg-blue-700 hover:scale-[1.03]"
              >
                Solicită ofertă
              </Link>

            </div>
          </Reveal>

        </div>

      </section>

    </main>
  );
}
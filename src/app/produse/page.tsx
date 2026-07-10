import ProduseClient from "./ProduseClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Mobilier Magazin, Alimentar și Supermarket | NextShop",
  description:
    "Mobilier magazin pentru alimentare, supermarketuri și magazine mixte: rafturi, vitrine, gondole și tejghele. Idei de amenajare și ofertă rapidă.",
  alternates: {
    canonical: "https://nextshopretail.ro/produse",
  },
  openGraph: {
    title: "Mobilier Magazin pentru Alimentare și Supermarketuri",
    description:
      "Descoperă gama NextShop de mobilier magazin: rafturi, gondole, vitrine frigorifice și tejghele, potrivite pentru magazine alimentare, mixte și supermarketuri.",
  },
  twitter: {
    title: "Mobilier Magazin pentru Alimentare și Supermarketuri",
    description:
      "Descoperă gama NextShop de mobilier magazin: rafturi, gondole, vitrine frigorifice și tejghele, potrivite pentru magazine alimentare, mixte și supermarketuri.",
  },
};

export default function ProdusePage() {
  return <ProduseClient />;
}
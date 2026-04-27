import ProduseClient from "./ProduseClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Rafturi, vitrine frigorifice și mobilier comercial pentru magazine",
  description:
    "Descoperă gama NextShop de rafturi metalice, gondole, vitrine frigorifice, tejghele, case de marcat și mobilier comercial pentru magazine.",
  alternates: {
    canonical: "https://nextshopretail.ro/produse",
  },
};

export default function ProdusePage() {
  return <ProduseClient />;
}
"use client";

import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { guideFaqItems } from "./guideFaqData";

// Cele două întrebări care conțin linkuri interne în textul original
// primesc aici varianta cu link real; restul folosesc textul simplu.
const displayItems = guideFaqItems.map((item) => {
  if (item.question.startsWith("Cât costă, orientativ")) {
    return {
      question: item.question,
      answer: (
        <>
          Nu există o cifră unică validă pentru toate cazurile — variază după
          suprafață, tipul de vitrine alese (cu uși costă mai mult la
          achiziție, dar recuperează diferența prin economia de energie),
          gradul de personalizare și dacă montajul este inclus. Cel mai util
          demers este să ceri o ofertă personalizată, care ține cont de planul
          tău concret de spațiu —{" "}
          <Link href="/cere-oferta" className="text-blue-600 font-semibold hover:underline">
            poți solicita una direct de la NextShop
          </Link>
          .
        </>
      ),
    };
  }

  if (item.question.startsWith("Ce fac dacă magazinul meu este atât alimentar")) {
    return {
      question: item.question,
      answer: (
        <>
          Recomandarea din secțiunea 10 rămâne un layout hibrid — grid pentru
          produsele de bază, insule free-flow pentru zonele speciale — cu
          zonare vizuală clară între categorii, folosind chiar mobilierul ca
          separator, fără pereți fizici. Detalii suplimentare despre acest tip
          de configurație găsești și pe{" "}
          <Link
            href="/produse#amenajare-magazin-mixt"
            className="text-blue-600 font-semibold hover:underline"
          >
            pagina noastră dedicată amenajării de magazine mixte
          </Link>
          .
        </>
      ),
    };
  }

  return item;
});

export default function GuideFaq() {
  return <FaqAccordion items={displayItems} />;
}

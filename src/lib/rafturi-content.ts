export const RAFTURI_SLUG = "rafturi";

export const RAFTURI_H1 = "Rafturi magazin";

export const RAFTURI_SEO = {
  title: "Rafturi magazin: sisteme metalice | NextShop Retail",
  description:
    "Rafturi magazin din metal pentru magazine alimentare, minimarketuri și supermarketuri. Sisteme FS System, consultanță de configurare și ofertă rapidă.",
};

export const RAFTURI_FAQ_TITLE = "Întrebări frecvente despre rafturile pentru magazin";

export type RafturiFaqItem = {
  question: string;
  // Textul simplu al răspunsului (folosit și în FAQPage JSON-LD).
  answer: string;
  // Dacă răspunsul conține un link intern, textul linkului apare identic în `answer`.
  link?: { text: string; href: string };
};

export const rafturiFaq: RafturiFaqItem[] = [
  {
    question: "Ce rafturi pentru magazin recomandați pentru un spațiu alimentar mic?",
    answer:
      "Pentru un spațiu sub 100 mp, de obicei rafturi metalice modulare pe perete și unul sau două rânduri de gondole în culoar. Alegerea exactă depinde de sortiment și de forma spațiului, deci o confirmăm pe planul tău, înainte de ofertă.",
  },
  {
    question: "Care este diferența dintre un raft de magazin de perete și o gondolă?",
    answer:
      "Raftul de perete se sprijină de perete și se accesează dintr-o singură parte. Gondola stă liberă în culoar și se accesează din ambele părți, deci oferă două fronturi de expunere pe aceeași structură. Majoritatea magazinelor le combină.",
  },
  {
    question: "Pot extinde mai târziu sistemul de rafturi?",
    answer:
      "Da, dacă alegi un sistem modular și rămâi în aceeași gamă. Piesele din sisteme diferite nu sunt, în general, compatibile, așa că merită să te gândești la extindere încă de la prima comandă.",
  },
  {
    question: "Cât de adânci ar trebui să fie polițele?",
    answer:
      "Pentru produse mici și mijlocii, 35-40 cm sunt un punct de pornire bun. Mai adânci alegi doar pentru marfă voluminoasă sau stoc. Polițele prea adânci ascund produsele din spate și îngustează culoarul.",
  },
  {
    question: "Aveți rafturile în stoc?",
    answer:
      "Ținem în stoc multe dintre repere, dar disponibilitatea exactă depinde de model și de cantitate. O confirmăm când ceri oferta.",
  },
  {
    question: "Livrați rafturile în toată România?",
    answer:
      "Da. Showroom-ul se află în zona Metro, Calea București nr. 139A, Pielești, dar livrăm în toată țara. Termenul îl primești odată cu oferta.",
  },
  {
    question: "Rafturile au garanție?",
    answer:
      "Da, produsele beneficiază de garanție, cu perioada specificată pentru fiecare categorie. Detaliile le primești în ofertă.",
  },
  {
    question: "Cum cer o ofertă pentru rafturi?",
    answer:
      "Adaugă produsele dorite în coșul de ofertă și trimite cererea din pagina Cere ofertă, sau sună-ne la +40 771 753 423. Dacă nu știi încă ce model ți se potrivește, descrie-ne spațiul și produsele, iar noi propunem configurația.",
    link: { text: "Cere ofertă", href: "/cere-oferta" },
  },
];

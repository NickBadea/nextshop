"use client";

import ChecklistWidget from "./ChecklistWidget";

const items = [
  "Layout-ul ales corespunde tipului de magazin și volumului de clienți estimat",
  "Zona de decompresie de la intrare este liberă vizual, fără mobilier înalt sau materiale promoționale aglomerate",
  "Polițele de la nivelul ochilor sunt alocate produselor cu marjă bună sau rulaj rapid",
  "Vitrinele frigorifice mențin temperatura sub 5°C și sunt poziționate cu vizibilitate din mai multe puncte",
  "Iluminatul este uniform ca temperatură de culoare pe tot magazinul, dimensionat corect pe zone",
  "Culoarele permit trecerea confortabilă a unui cărucior sau coș, inclusiv la intersecții",
  "Zona de casă este poziționată conform tipului de layout, cu produse de impuls la îndemână",
  "Toate autorizațiile (DSP, DSVSA, ISU dacă e cazul, Primărie) sunt depuse sau obținute",
  "Casa de marcat este fiscalizată",
  "Ai testat traseul real prin magazin, la o simulare de trafic aglomerat, înainte de ziua deschiderii",
];

export default function FinalChecklist() {
  return <ChecklistWidget storageKey="ghid-checklist-final" items={items} />;
}

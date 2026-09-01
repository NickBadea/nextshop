"use client";

import ChecklistWidget from "./ChecklistWidget";

const items = [
  "Confirmarea destinației spațiului (comercial, în cartea funciară)",
  "Înființarea firmei (SRL, cel mai frecvent, cod CAEN 4711/4712 pentru comerț alimentar)",
  "Depunerea documentației la DSP",
  "Înregistrarea la DSVSA",
  "Declarație sau aviz ISU, în funcție de suprafață",
  "Autorizația de funcționare de la Primărie",
  "Fiscalizarea casei de marcat",
];

export default function AutorizatiiChecklist() {
  return <ChecklistWidget storageKey="ghid-checklist-autorizatii" items={items} />;
}

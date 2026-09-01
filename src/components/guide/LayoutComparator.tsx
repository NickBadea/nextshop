"use client";

import { useState } from "react";

type TabKey = "grid" | "loop" | "freeflow";

const tabs: {
  key: TabKey;
  label: string;
  text: string;
  recommended: string;
}[] = [
  {
    key: "grid",
    label: "Grid",
    text: "Culoare paralele, drepte, cu rafturi dispuse perpendicular pe traseul principal. Densitate maximă de produse pe metru pătrat și navigare previzibilă.",
    recommended: "Magazine alimentare, minimarketuri, supermarketuri.",
  },
  {
    key: "loop",
    label: "Loop",
    text: "Traseu circular sau în formă de „U” care trece pe lângă majoritatea categoriilor, indiferent de motivul inițial al vizitei clientului.",
    recommended: "Supermarketuri medii-mari, magazine mixte cu multe categorii.",
  },
  {
    key: "freeflow",
    label: "Free-flow",
    text: "Produse grupate în insule sau cluster-e tematice, fără culoare rigide — mobilier cu profil jos, spațiu flexibil și vizual deschis.",
    recommended: "Brutării, cofetării, cafenele, magazine mici cu accent pe atmosferă.",
  },
];

function GridDiagram() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-w-xs mx-auto">
      <rect x="4" y="4" width="232" height="152" rx="6" fill="none" stroke="#d1d5db" strokeWidth="2" />
      {[20, 60, 100, 140, 180].map((x) => (
        <rect key={x} x={x} y="16" width="14" height="128" fill="#2563eb" opacity="0.85" rx="2" />
      ))}
      <rect x="4" y="4" width="232" height="10" fill="#93c5fd" opacity="0.6" />
    </svg>
  );
}

function LoopDiagram() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-w-xs mx-auto">
      <rect x="4" y="4" width="232" height="152" rx="6" fill="none" stroke="#d1d5db" strokeWidth="2" />
      <rect x="30" y="24" width="180" height="112" rx="10" fill="none" stroke="#2563eb" strokeWidth="6" strokeDasharray="14 8" />
      <path d="M 190 40 l 10 -6 l 0 12 z" fill="#2563eb" />
      <rect x="70" y="50" width="24" height="60" fill="#93c5fd" rx="2" />
      <rect x="150" y="50" width="24" height="60" fill="#93c5fd" rx="2" />
    </svg>
  );
}

function FreeFlowDiagram() {
  return (
    <svg viewBox="0 0 240 160" className="w-full h-auto max-w-xs mx-auto">
      <rect x="4" y="4" width="232" height="152" rx="6" fill="none" stroke="#d1d5db" strokeWidth="2" />
      <ellipse cx="70" cy="55" rx="28" ry="18" fill="#2563eb" opacity="0.85" />
      <ellipse cx="160" cy="45" rx="20" ry="14" fill="#2563eb" opacity="0.65" />
      <ellipse cx="120" cy="105" rx="34" ry="20" fill="#2563eb" opacity="0.75" />
      <ellipse cx="195" cy="115" rx="18" ry="14" fill="#2563eb" opacity="0.55" />
    </svg>
  );
}

const diagrams: Record<TabKey, () => React.JSX.Element> = {
  grid: GridDiagram,
  loop: LoopDiagram,
  freeflow: FreeFlowDiagram,
};

export default function LayoutComparator() {
  const [active, setActive] = useState<TabKey>("grid");
  const activeTab = tabs.find((tab) => tab.key === active)!;
  const Diagram = diagrams[active];

  return (
    <div className="not-prose my-8 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="flex border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            className={`flex-1 px-4 py-3 text-sm md:text-base font-semibold transition ${
              active === tab.key
                ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8 items-center">
        <Diagram />

        <div>
          <p className="text-gray-600 leading-relaxed mb-4">{activeTab.text}</p>

          <p className="text-sm text-black font-semibold">
            Recomandat pentru: <span className="font-normal text-gray-600">{activeTab.recommended}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

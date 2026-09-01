"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";

type LayoutType = "grid" | "loop" | "freeflow" | "herringbone" | "spine" | "hibrid";

type Option = {
  label: string;
  scores: Partial<Record<LayoutType, number>>;
};

type Question = {
  question: string;
  options: Option[];
};

const questions: Question[] = [
  {
    question: "Ce tip de magazin ai sau vrei să deschizi?",
    options: [
      { label: "Magazin alimentar de cartier sau minimarket", scores: { grid: 2, herringbone: 1 } },
      { label: "Supermarket", scores: { loop: 2, hibrid: 1 } },
      { label: "Magazin mixt (alimentar + nealimentar)", scores: { hibrid: 2, loop: 1 } },
      { label: "Brutărie, cofetărie sau cafenea", scores: { freeflow: 2, spine: 1 } },
    ],
  },
  {
    question: "Ce suprafață are, aproximativ, spațiul tău?",
    options: [
      { label: "Sub 50 mp", scores: { herringbone: 2, freeflow: 1 } },
      { label: "50-150 mp", scores: { grid: 2, hibrid: 1 } },
      { label: "150-300 mp", scores: { hibrid: 2, loop: 1 } },
      { label: "Peste 300 mp", scores: { loop: 2, hibrid: 1 } },
    ],
  },
  {
    question: "Cum arată forma spațiului?",
    options: [
      { label: "Dreptunghi regulat și spațios", scores: { grid: 2 } },
      { label: "Îngust și alungit (fațadă mică, adâncime mare)", scores: { spine: 2 } },
      { label: "Neregulat, cu colțuri sau stâlpi", scores: { herringbone: 2 } },
      { label: "Nu știu încă / spațiu standard", scores: { grid: 1, hibrid: 1 } },
    ],
  },
  {
    question: "Ce contează mai mult pentru afacerea ta?",
    options: [
      { label: "Viteza — clientul vine, cumpără rapid, pleacă", scores: { grid: 2 } },
      { label: "Experiența — vreau ca clientul să descopere cât mai multe produse", scores: { loop: 2, freeflow: 1 } },
      { label: "Atmosfera — un spațiu mic și primitor, cu accent pe anumite produse", scores: { freeflow: 2 } },
    ],
  },
  {
    question: "Ce buget ai alocat, orientativ, pentru mobilier și amenajare?",
    options: [
      { label: "Redus — prioritizez esențialul", scores: { grid: 1, herringbone: 1 } },
      { label: "Mediu — vreau o soluție echilibrată", scores: { hibrid: 2 } },
      { label: "Generos — vreau o experiență completă pentru clienți", scores: { loop: 2, freeflow: 1 } },
    ],
  },
];

const results: Record<LayoutType, { title: string; description: string }> = {
  grid: {
    title: "Layout de tip grid (grilă)",
    description:
      "Culoare paralele, drepte, cu densitate maximă de produse și navigare previzibilă — potrivit atunci când clienții vin cu un obiectiv clar, iar viteza și predictibilitatea contează mai mult decât experiența de explorare.",
  },
  loop: {
    title: "Layout de tip loop / racetrack",
    description:
      "Direcționează clienții pe un traseu care trece pe lângă majoritatea categoriilor, expunându-i la cât mai multe produse posibil — potrivit pentru supermarketuri sau magazine mixte cu multe categorii diferite.",
  },
  freeflow: {
    title: "Layout free-flow (liber)",
    description:
      "Produse grupate în insule sau cluster-e tematice, fără culoare rigide — potrivit pentru brutării, cofetării, cafenele cu zonă de produse sau magazine mici cu accent pe atmosferă.",
  },
  herringbone: {
    title: "Layout herringbone (os de pește)",
    description:
      "Culoare dispuse în unghi, care permit expunerea unei game variate de produse într-un mod ordonat, chiar și în spații mici sau cu formă neregulată.",
  },
  spine: {
    title: "Layout spine (coloană centrală)",
    description:
      "Un culoar central din care se ramifică zonele secundare de expunere — potrivit pentru spații alungite, cu fațadă îngustă și adâncime mare.",
  },
  hibrid: {
    title: "Layout hibrid",
    description:
      "Grid pentru zona de produse de bază, completat cu insule free-flow pentru produsele proaspete, de impuls sau de sezon — abordarea recomandată cel mai des pentru magazinele mixte.",
  },
};

export default function LayoutQuiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Partial<Record<LayoutType, number>>>({});
  const [finished, setFinished] = useState(false);

  function selectOption(option: Option) {
    const nextScores = { ...scores };

    (Object.keys(option.scores) as LayoutType[]).forEach((type) => {
      nextScores[type] = (nextScores[type] || 0) + (option.scores[type] || 0);
    });

    setScores(nextScores);

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  }

  function restart() {
    setStep(0);
    setScores({});
    setFinished(false);
  }

  function getWinner(): LayoutType {
    let winner: LayoutType = "grid";
    let best = -1;

    (Object.keys(results) as LayoutType[]).forEach((type) => {
      const value = scores[type] || 0;

      if (value > best) {
        best = value;
        winner = type;
      }
    });

    return winner;
  }

  if (finished) {
    const winner = getWinner();
    const result = results[winner];

    return (
      <div className="not-prose my-8 rounded-xl border border-blue-100 bg-blue-50 p-6 md:p-8 text-center">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
          Rezultatul tău
        </p>

        <h4 className="text-xl md:text-2xl font-bold text-black mb-3">
          {result.title}
        </h4>

        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
          {result.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#2-tipuri-de-layout"
            className="text-blue-600 font-semibold hover:underline"
          >
            Vezi detalii despre toate tipurile de layout →
          </a>

          <button
            type="button"
            onClick={restart}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition"
          >
            <RotateCcw size={14} />
            Reia testul
          </button>
        </div>
      </div>
    );
  }

  const current = questions[step];

  return (
    <div className="not-prose my-8 rounded-xl border border-gray-200 bg-white shadow-sm p-6 md:p-8">
      <p className="text-sm text-gray-500 mb-2">
        Întrebarea {step + 1} din {questions.length}
      </p>

      <h4 className="text-lg md:text-xl font-semibold text-black mb-5">
        {current.question}
      </h4>

      <div className="grid sm:grid-cols-2 gap-3">
        {current.options.map((option) => (
          <button
            key={option.label}
            type="button"
            onClick={() => selectOption(option)}
            className="text-left border border-gray-200 rounded-lg px-4 py-3 hover:border-blue-600 hover:bg-blue-50 transition text-gray-700"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

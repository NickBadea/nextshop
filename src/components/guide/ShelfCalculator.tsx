"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator } from "lucide-react";

type StoreType = "alimentar-mic" | "minimarket" | "supermarket" | "mixt";

const densityFactors: Record<StoreType, number> = {
  "alimentar-mic": 1.4,
  minimarket: 1.6,
  supermarket: 1.1,
  mixt: 1.0,
};

const storeTypeLabels: Record<StoreType, string> = {
  "alimentar-mic": "Magazin alimentar mic",
  minimarket: "Minimarket",
  supermarket: "Supermarket",
  mixt: "Magazin mixt",
};

export default function ShelfCalculator() {
  const [surface, setSurface] = useState("");
  const [storeType, setStoreType] = useState<StoreType>("alimentar-mic");

  const surfaceValue = Number(surface);
  const isValid = surfaceValue > 0;
  const estimate = isValid ? Math.round(surfaceValue * densityFactors[storeType]) : null;

  return (
    <div className="not-prose my-8 rounded-xl border border-gray-200 bg-white shadow-sm p-6 md:p-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
          <Calculator className="text-white" size={20} />
        </div>

        <h4 className="text-lg md:text-xl font-semibold text-black">
          Câți metri liniari de raft îmi trebuie?
        </h4>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Suprafață totală (mp)
          </label>

          <input
            type="number"
            min={1}
            inputMode="numeric"
            value={surface}
            onChange={(e) => setSurface(e.target.value)}
            placeholder="ex. 80"
            className="w-full border border-gray-300 rounded-lg p-3 text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Tip de magazin
          </label>

          <select
            value={storeType}
            onChange={(e) => setStoreType(e.target.value as StoreType)}
            className="w-full border border-gray-300 rounded-lg p-3 text-black bg-white"
          >
            {(Object.keys(storeTypeLabels) as StoreType[]).map((type) => (
              <option key={type} value={type}>
                {storeTypeLabels[type]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="rounded-lg bg-blue-50 p-5 mb-4">
        {estimate ? (
          <p className="text-black">
            Estimare orientativă:{" "}
            <span className="font-bold text-blue-600 text-lg">
              ~{estimate} metri liniari
            </span>{" "}
            de raft pentru un {storeTypeLabels[storeType].toLowerCase()} de {surfaceValue} mp.
          </p>
        ) : (
          <p className="text-gray-500">
            Introdu suprafața magazinului tău ca să vezi o estimare.
          </p>
        )}
      </div>

      <p className="text-sm text-gray-500 leading-relaxed mb-5">
        Aceasta este o estimare orientativă, bazată pe un raport simplu
        suprafață–densitate de raft, <strong>nu o ofertă fermă</strong>. Numărul
        real depinde de layout-ul ales, lățimea culoarelor, tipul de rafturi și
        specificul produselor tale.
      </p>

      <Link
        href="/cere-oferta"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Cere un calcul precis, adaptat spațiului tău
      </Link>
    </div>
  );
}

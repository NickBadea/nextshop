"use client";

import { useEffect, useState } from "react";
import { Check, RotateCcw } from "lucide-react";

export default function ChecklistWidget({
  storageKey,
  items,
}: {
  storageKey: string;
  items: string[];
}) {
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed) && parsed.length === items.length) {
          setChecked(parsed);
        }
      }
    } catch {
      // localStorage indisponibil sau date corupte — pornim cu lista goală
    }

    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    try {
      localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {
      // localStorage indisponibil — progresul nu se salvează, dar pagina funcționează
    }
  }, [checked, hydrated, storageKey]);

  const completedCount = checked.filter(Boolean).length;

  function toggle(index: number) {
    setChecked((prev) => prev.map((v, i) => (i === index ? !v : v)));
  }

  function reset() {
    setChecked(items.map(() => false));
  }

  return (
    <div className="not-prose my-8 rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-4 border-b border-gray-100 px-6 py-4">
        <p className="font-semibold text-black">
          {completedCount} din {items.length} pași completați
        </p>

        <button
          type="button"
          onClick={reset}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition"
        >
          <RotateCcw size={14} />
          Șterge progresul
        </button>
      </div>

      <ul className="divide-y divide-gray-100">
        {items.map((item, index) => {
          const isChecked = checked[index];

          return (
            <li key={item}>
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-start gap-3 px-6 py-4 text-left hover:bg-gray-50 transition"
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition ${
                    isChecked
                      ? "bg-blue-600 border-blue-600"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {isChecked && <Check size={14} className="text-white" />}
                </span>

                <span
                  className={`text-base leading-relaxed ${
                    isChecked ? "text-gray-400 line-through" : "text-gray-700"
                  }`}
                >
                  {item}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

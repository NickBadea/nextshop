import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

// Acordeon cu <details>/<summary>: răspunsurile rămân în DOM și când sunt închise.
export default function FaqDetails({
  items,
}: {
  items: { question: string; answer: ReactNode }[];
}) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <details
          key={item.question}
          open={index === 0}
          className="group rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 open:shadow-md"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-6 py-5 text-left font-semibold text-black focus-visible:outline-2 focus-visible:outline-blue-600 [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>

            <ChevronDown
              aria-hidden="true"
              size={20}
              className="shrink-0 text-blue-600 transition-transform duration-300 group-open:rotate-180"
            />
          </summary>

          <p className="px-6 pb-5 text-gray-600 leading-relaxed">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

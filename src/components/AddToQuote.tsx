"use client";

import { useQuote } from "@/context/QuoteContext";

export default function AddToQuote({ product }: any) {
  const { addItem } = useQuote();

  return (
    <button
      onClick={() => addItem(product)}
      className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
    >
      Adaugă la ofertă
    </button>
  );
}
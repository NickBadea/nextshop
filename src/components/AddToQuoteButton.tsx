"use client";

import { useQuote } from "@/context/QuoteContext";
import toast from "react-hot-toast";

interface Props {
  product: {
    id: number;
    name: string;
    slug: string;
    image?: string;
  };
  className?: string;
}

export default function AddToQuoteButton({ product, className = "" }: Props) {

  const { addItem } = useQuote();

  function handleAdd() {

    addItem({
      ...product,
      quantity: 1
    });

    toast.success("Produs adăugat la ofertă", {
      duration: 2500,
      style: {
        background: "#111",
        color: "#fff",
      },
    });

  }

  return (
    <button
      onClick={handleAdd}
      className={`
        inline-flex
        items-center
        justify-center
        bg-blue-600
        text-white
        px-5
        py-3
        rounded-md
        text-sm
        font-medium
        hover:bg-blue-700
        transition
        whitespace-nowrap
        ${className}
      `}
    >
      Adaugă la ofertă
    </button>
  );
}
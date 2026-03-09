"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function QuoteToast({ product }: any) {

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-6 right-6 z-50 bg-white shadow-xl border rounded-lg p-5 w-72 animate-fade">

      <p className="font-semibold mb-2">
        ✔ Produs adăugat
      </p>

      <p className="text-sm text-gray-600 mb-4">
        {product}
      </p>

      <Link
        href="/cere-oferta"
        className="text-blue-600 font-medium hover:underline"
      >
        Vezi oferta →
      </Link>

    </div>
  );
}
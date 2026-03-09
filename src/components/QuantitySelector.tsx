"use client";

import { useState } from "react";

export default function QuantitySelector() {

  const [qty, setQty] = useState(1);

  return (
    <div className="flex items-center gap-6">

      <span className="text-sm text-gray-600">
        Cantitate
      </span>

      <div className="flex items-center border rounded-lg overflow-hidden">

        <button
          onClick={() => qty > 1 && setQty(qty - 1)}
          className="px-4 py-2 hover:bg-gray-100 text-lg"
        >
          −
        </button>

        <div className="px-6 font-medium">
          {qty}
        </div>

        <button
          onClick={() => setQty(qty + 1)}
          className="px-4 py-2 hover:bg-gray-100 text-lg"
        >
          +
        </button>

      </div>

    </div>
  );
}
"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  slug: string;
  quantity: number;
  image?: string
};

type QuoteContextType = {
  items: Product[];
  addItem: (product: any) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearQuote: () => void;
};

const QuoteContext = createContext<QuoteContextType | null>(null);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);

  // Load din localStorage
  useEffect(() => {
    const saved = localStorage.getItem("quote");

    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  // Save în localStorage
  useEffect(() => {
    localStorage.setItem("quote", JSON.stringify(items));
  }, [items]);

  function addItem(product: any) {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);

      if (existing) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          slug: product.slug,
          quantity: 1,
        },
      ];
    });
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }

  function updateQuantity(id: string, quantity: number) {
    setItems((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, quantity }
          : p
      )
    );
  }

  function clearQuote() {
    setItems([]);
  }

  return (
    <QuoteContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearQuote,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);

  if (!context) {
    throw new Error("useQuote must be used inside QuoteProvider");
  }

  return context;
}
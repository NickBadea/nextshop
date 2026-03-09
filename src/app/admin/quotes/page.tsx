"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function QuotesPage() {

  const [quotes, setQuotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadQuotes() {

    const { data, error } = await supabase
      .from("quote_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setQuotes(data || []);
    setLoading(false);
  }

  async function deleteQuote(id: string) {

    const confirmDelete = confirm("Ștergi această cerere?");

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("quote_requests")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      alert("Nu s-a putut șterge cererea.");
      return;
    }

    // scoate instant din UI
    setQuotes((prev) => prev.filter((q) => q.id !== id));
  }

  useEffect(() => {
    loadQuotes();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-black">
        Se încarcă...
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gray-100 px-4 py-6 text-black">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Cereri ofertă
        </h1>

        {quotes.length === 0 && (
          <div className="bg-white border rounded-xl p-6 text-center">
            Nu există cereri încă.
          </div>
        )}

        <div className="space-y-4">

          {quotes.map((q) => {

            let products: any[] = [];

            try {
              products = q.products || [];
            } catch {
              products = [];
            }

            return (

              <div
                key={q.id}
                className="bg-white border rounded-xl p-5 shadow-sm"
              >

                <div className="grid md:grid-cols-2 gap-5">

                  {/* CLIENT */}

                  <div className="space-y-1 text-sm">

                    <p><strong>Nume:</strong> {q.name}</p>
                    <p><strong>Telefon:</strong> {q.phone}</p>
                    <p><strong>Email:</strong> {q.email}</p>
                    <p><strong>Firmă:</strong> {q.company}</p>

                  </div>

                  {/* PRODUSE */}

                  <div>

                    <p className="font-semibold mb-2 text-sm">
                      Produse cerute
                    </p>

                    <ul className="list-disc ml-5 text-sm space-y-1">

                      {products.map((p: any) => (
                        <li key={p.id}>
                          {p.name} — <strong>{p.quantity} buc</strong>
                        </li>
                      ))}

                      {products.length === 0 && (
                        <li className="text-gray-400">
                          Nu există produse
                        </li>
                      )}

                    </ul>

                  </div>

                </div>

                {q.message && (

                  <div className="mt-4">

                    <p className="font-semibold text-sm">
                      Mesaj
                    </p>

                    <p className="text-gray-600 text-sm">
                      {q.message}
                    </p>

                  </div>

                )}

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-5">

                  <p className="text-xs text-gray-400">
                    {new Date(q.created_at).toLocaleString()}
                  </p>

                  <button
                    onClick={() => deleteQuote(q.id)}
                    className="text-red-600 text-sm hover:underline"
                  >
                    Șterge
                  </button>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </div>

  );

}
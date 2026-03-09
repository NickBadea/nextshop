"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactRequestsPage() {

  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadRequests() {

    const { data, error } = await supabase
      .from("contact_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if(error){
      console.error(error);
      return;
    }

    setRequests(data || []);
    setLoading(false);
  }

  async function deleteRequest(id: string) {

    if (!confirm("Ștergi acest mesaj?")) return;

    const { error } = await supabase
      .from("contact_requests")
      .delete()
      .eq("id", id);

    if(error){
      alert("Nu s-a putut șterge mesajul.");
      console.error(error);
      return;
    }

    loadRequests();
  }

  useEffect(() => {
    loadRequests();
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        Se încarcă...
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gray-100 px-4 py-6 text-black">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Cereri contact
        </h1>

        <div className="space-y-4">

  {requests.length === 0 && (
    <div className="bg-white text-black border rounded-xl p-6 text-center">
      Nu există cereri încă.
    </div>
  )}

  {requests.map((r) => (

            <div
              key={r.id}
              className="bg-white border rounded-xl p-5 shadow-sm"
            >

              <div className="grid md:grid-cols-2 gap-5">

                <div className="space-y-1 text-sm">
                  <p><strong>Nume:</strong> {r.name}</p>
                  <p><strong>Telefon:</strong> {r.phone}</p>
                  <p><strong>Email:</strong> {r.email}</p>
                </div>

                <div>
                  <p className="font-semibold mb-2 text-sm">
                    Mesaj
                  </p>

                  <p className="text-gray-600 text-sm">
                    {r.message}
                  </p>
                </div>

              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-5">

                <p className="text-xs text-gray-400">
                  {new Date(r.created_at).toLocaleString()}
                </p>

                <button
                  onClick={() => deleteRequest(r.id)}
                  className="text-red-600 text-sm hover:underline"
                >
                  Șterge
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}
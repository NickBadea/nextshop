"use client";

import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";

export const dynamic = "force-dynamic";

export default function NewCategory() {

  const router = useRouter();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const [name, setName] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async () => {

    const slug = name.toLowerCase().replace(/\s+/g, "-");

    let imageUrl = null;

    if (image) {

      const fileName = `${Date.now()}-${image.name}`;

      const { error: uploadError } = await supabase.storage
        .from("categories")
        .upload(fileName, image);

      if (uploadError) {
        alert(uploadError.message);
        return;
      }

      const { data } = supabase.storage
        .from("categories")
        .getPublicUrl(fileName);

      imageUrl = data.publicUrl;

    }

    const { error } = await supabase
      .from("categories")
      .insert([
        {
          name,
          slug,
          image: imageUrl,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin/categories");

  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">

      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-sm border">

        <h1 className="text-xl md:text-2xl font-bold mb-6">
          Adaugă categorie
        </h1>

        <input
          type="text"
          placeholder="Nume categorie"
          className="w-full border rounded-lg p-3 mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          className="w-full border rounded-lg p-3 mb-6"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />

        <button
          onClick={handleSubmit}
          className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Salvează
        </button>

      </div>

    </div>
  );
}
"use client";

import { useState, useEffect, use } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";

export default function EditCategory({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = use(params);

  const router = useRouter();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const [category, setCategory] = useState<any>(null);
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {

    const loadCategory = async () => {

      const { data } = await supabase
        .from("categories")
        .select("*")
        .eq("id", id)
        .single();

      setCategory(data);

    };

    loadCategory();

  }, [id]);

  const handleSubmit = async () => {

    let imageUrl = category.image;

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
      .update({
        name: category.name,
        image: imageUrl,
      })
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin/categories");

  };

  const deleteImage = async () => {

    if (!category.image) return;

    const path = category.image.split("/categories/")[1];

    await supabase.storage
      .from("categories")
      .remove([path]);

    await supabase
      .from("categories")
      .update({
        image: null,
      })
      .eq("id", id);

    setCategory({
      ...category,
      image: null,
    });

  };

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Se încarcă...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">

      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-sm border">

        <h1 className="text-xl md:text-2xl font-bold mb-6">
          Editează categorie
        </h1>

        {/* NAME */}

        <input
          className="w-full border rounded-lg p-3 mb-4"
          value={category.name}
          onChange={(e) =>
            setCategory({ ...category, name: e.target.value })
          }
        />

        {/* IMAGE PREVIEW */}

        {category.image && (

          <div className="mb-4">

            <img
              src={category.image}
              className="w-full h-40 object-cover rounded mb-3"
            />

            <button
              onClick={deleteImage}
              className="text-red-600 text-sm hover:underline"
            >
              Șterge imagine
            </button>

          </div>

        )}

        {/* NEW IMAGE */}

        <input
          type="file"
          accept="image/*"
          className="w-full border rounded-lg p-3 mb-6"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />

        {/* SAVE */}

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Salvează
        </button>

      </div>

    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import { slugify } from "@/lib/slugify";

export const dynamic = "force-dynamic";

export default function NewProduct() {

  const router = useRouter();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const [categories, setCategories] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [imageFiles, setImageFiles] = useState<FileList | null>(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    const { data } = await supabase
      .from("categories")
      .select("*");

    setCategories(data || []);
  }

  async function handleSubmit() {

    if (!name || !categoryId) {
      alert("Completează toate câmpurile");
      return;
    }

    if (!imageFiles || imageFiles.length === 0) {
      alert("Selectează cel puțin o imagine");
      return;
    }

    const uploadedUrls: string[] = [];

    for (let i = 0; i < imageFiles.length; i++) {

      const file = imageFiles[i];
      const fileName = `${Date.now()}-${slugify(file.name)}`;

      const { error: uploadError } = await supabase.storage
        .from("products")
        .upload(fileName, file);

      if (uploadError) {
        alert(uploadError.message);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("products")
        .getPublicUrl(fileName);

      uploadedUrls.push(publicUrlData.publicUrl);

    }

    const slug = slugify(name);

    const { error } = await supabase.from("products").insert([
      {
        name,
        slug,
        description,
        category_id: categoryId,
        images: JSON.stringify(uploadedUrls),
      },
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin/products");

  }

  return (

    <div className="min-h-screen bg-gray-100 px-4 py-8">

      <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-sm border">

        <h1 className="text-xl md:text-2xl font-bold mb-6">
          Adaugă produs
        </h1>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Nume produs"
            className="w-full border rounded-lg p-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Descriere produs"
            className="w-full border rounded-lg p-3 resize-none"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <select
            className="w-full border rounded-lg p-3"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >

            <option value="">
              Selectează categorie
            </option>

            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}

          </select>


          <div className="space-y-2">

            <label className="text-sm text-gray-600">
              Imagini produs
            </label>

            <input
              type="file"
              multiple
              accept="image/*"
              className="w-full border rounded-lg p-2"
              onChange={(e) =>
                setImageFiles(e.target.files)
              }
            />

          </div>


          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Salvează produs
          </button>

        </div>

      </div>

    </div>

  );

}
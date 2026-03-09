"use client";

import { useEffect, useState, use } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function EditProduct({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = use(params);
  const router = useRouter();

  const [product, setProduct] = useState<any>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProduct();
    loadCategories();
  }, []);

  async function loadProduct() {

    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(error);
      return;
    }

    setProduct(data);

    try {
      setImages(JSON.parse(data.images || "[]"));
    } catch {
      setImages([]);
    }
  }

  async function loadCategories() {

    const { data } = await supabase
      .from("categories")
      .select("*");

    setCategories(data || []);
  }

  function removeImage(index: number) {

    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
  }

  async function uploadImages() {

    const uploadedUrls: string[] = [];

    for (const file of newFiles) {

      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;
      const filePath = `products/${fileName}`;

      const { error } = await supabase.storage
        .from("products")
        .upload(filePath, file, {
          contentType: file.type,
          upsert: false,
        });

      if (error) {
        console.error("Upload error:", error);
        continue;
      }

      const { data } = supabase.storage
        .from("products")
        .getPublicUrl(filePath);

      uploadedUrls.push(data.publicUrl);
    }

    return uploadedUrls;
  }

  async function handleSubmit(e: any) {

    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const name = form.name.value;
    const description = form.description.value;
    const category_id = form.category_id.value;

    const uploadedImages = await uploadImages();

    const finalImages = [...images, ...uploadedImages];

    const { error } = await supabase
      .from("products")
      .update({
        name,
        description,
        category_id,
        images: JSON.stringify(finalImages),
      })
      .eq("id", id);

    if (error) {
      console.error(error);
      alert("Eroare la salvare");
      setLoading(false);
      return;
    }

    router.push("/admin/products");
    router.refresh();
  }

  if (!product) return null;

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">

      <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-sm border">

        <h1 className="text-xl md:text-2xl font-bold mb-6">
          Editează produs
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="name"
            defaultValue={product.name}
            className="w-full border rounded-lg p-3"
            placeholder="Nume produs"
          />

          <textarea
            name="description"
            defaultValue={product.description}
            className="w-full border rounded-lg p-3 resize-none"
            rows={4}
            placeholder="Descriere"
          />

          <select
            name="category_id"
            defaultValue={product.category_id}
            className="w-full border rounded-lg p-3"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>


          {/* IMAGINI EXISTENTE */}

          <div>

            <h3 className="font-semibold mb-3">
              Imagini existente
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

              {images.map((img, i) => (

                <div key={i} className="relative">

                  <img
                    src={img}
                    className="w-full h-24 md:h-28 object-cover rounded border"
                  />

                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded"
                  >
                    X
                  </button>

                </div>

              ))}

            </div>

          </div>


          {/* UPLOAD */}

          <div>

            <h3 className="font-semibold mb-2">
              Adaugă imagini
            </h3>

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e: any) =>
                setNewFiles(Array.from(e.target.files))
              }
              className="w-full border rounded-lg p-2"
            />

          </div>


          <button
            disabled={loading}
            type="submit"
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Se salvează..." : "Salvează modificările"}
          </button>

        </form>

      </div>

    </div>
  );
}
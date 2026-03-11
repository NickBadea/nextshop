"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, useParams } from "next/navigation";

type Category = {
  id: string;
  name: string;
};

type Product = {
  id: string;
  name: string;
  description: string;
  category_id: string;
  images: string | null;
};

export default function EditProduct() {

  const params = useParams();
  const id = params.id as string;

  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [categoryId, setCategoryId] = useState("");
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

    const prod = data as Product;

    setProduct(prod);
    setCategoryId(prod.category_id);

    try {
      setImages(JSON.parse(prod.images || "[]"));
    } catch {
      setImages([]);
    }
  }

  async function loadCategories() {

    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("name");

    if (error) {
      console.error(error);
      return;
    }

    setCategories(data || []);
  }

  function removeImage(index: number) {
    setImages(images.filter((_, i) => i !== index));
  }

  function moveImageLeft(index: number) {

    if (index === 0) return;

    const updated = [...images];
    [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
    setImages(updated);
  }

  function moveImageRight(index: number) {

    if (index === images.length - 1) return;

    const updated = [...images];
    [updated[index + 1], updated[index]] = [updated[index], updated[index + 1]];
    setImages(updated);
  }

  async function uploadImages() {

    const uploadedUrls: string[] = [];

    for (const file of newFiles) {

      const fileExt = file.name.split(".").pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = `products/${fileName}`;

      const { error } = await supabase.storage
        .from("products")
        .upload(filePath, file, {
          contentType: file.type,
        });

      if (error) {
        console.error(error);
        continue;
      }

      const { data } = supabase.storage
        .from("products")
        .getPublicUrl(filePath);

      uploadedUrls.push(data.publicUrl);
    }

    return uploadedUrls;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const description = (form.elements.namedItem("description") as HTMLTextAreaElement).value.trim();

    const uploadedImages = await uploadImages();
    const finalImages = [...images, ...uploadedImages];

    const { error } = await supabase
      .from("products")
      .update({
        name,
        description,
        category_id: categoryId,
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
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="w-full border rounded-lg p-3"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>

          <div>

            <h3 className="font-semibold mb-3">
              Imagini existente (prima = copertă)
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

              {images.map((img, i) => (

                <div key={i} className="relative border rounded p-2 bg-white">

                  {i === 0 && (
                    <span className="absolute top-1 left-1 text-xs bg-black text-white px-2 py-1 rounded">
                      Cover
                    </span>
                  )}

                  <img
                    src={img}
                    className="w-full h-24 md:h-28 object-contain"
                  />

                  <div className="flex justify-between mt-2">

                    <button
                      type="button"
                      onClick={() => moveImageLeft(i)}
                      className="text-xs bg-gray-200 px-2 py-1 rounded"
                    >
                      ←
                    </button>

                    <button
                      type="button"
                      onClick={() => moveImageRight(i)}
                      className="text-xs bg-gray-200 px-2 py-1 rounded"
                    >
                      →
                    </button>

                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="text-xs bg-red-600 text-white px-2 py-1 rounded"
                    >
                      X
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div>

            <h3 className="font-semibold mb-2">
              Adaugă imagini
            </h3>

            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => {
                if (e.target.files) {
                  setNewFiles(Array.from(e.target.files));
                }
              }}
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
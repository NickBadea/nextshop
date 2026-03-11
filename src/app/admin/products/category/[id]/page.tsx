"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

function SortableItem({ product }: any) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: product.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  let images: string[] = [];

  try {
    images = product.images ? JSON.parse(product.images) : [];
  } catch {}

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white border rounded-xl p-4 flex items-center justify-between gap-4 shadow-sm"
    >
      <div className="flex items-center gap-4">

        {/* DRAG HANDLE */}

        <div
          {...attributes}
          {...listeners}
          className="cursor-grab text-gray-400 text-lg"
        >
          ≡
        </div>

        {/* IMAGE */}

        {images[0] && (
          <img
            src={images[0]}
            className="w-16 h-16 object-cover rounded"
          />
        )}

        {/* NAME */}

        <div>

          <p className="font-semibold">
            {product.name}
          </p>

        </div>

      </div>

      <Link
        href={`/admin/products/edit/${product.id}`}
        className="text-blue-600 text-sm hover:underline"
      >
        Edit
      </Link>

    </div>
  );
}

export default function CategoryProductsPage() {

  const { id } = useParams();

  const [products, setProducts] = useState<any[]>([]);
  const [category, setCategory] = useState<any>(null);

  const sensors = useSensors(useSensor(PointerSensor));

  useEffect(() => {

    loadProducts();

  }, []);

  async function loadProducts() {

    const { data: categoryData } = await supabase
      .from("categories")
      .select("*")
      .eq("id", id)
      .single();

    setCategory(categoryData);

    const { data } = await supabase
      .from("products")
      .select("*")
      .eq("category_id", id)
      .order("position", { ascending: true });

    setProducts(data || []);
  }

  async function handleDragEnd(event: any) {

    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = products.findIndex((p) => p.id === active.id);
    const newIndex = products.findIndex((p) => p.id === over.id);

    const newItems = arrayMove(products, oldIndex, newIndex);

    setProducts(newItems);

    for (let i = 0; i < newItems.length; i++) {

      await supabase
        .from("products")
        .update({ position: i })
        .eq("id", newItems[i].id);

    }
  }

  return (

    <div className="min-h-screen bg-gray-100 px-4 py-6">

      <div className="max-w-4xl mx-auto">

        <div className="mb-6">

          <Link
            href="/admin/products"
            className="text-sm text-gray-500 hover:underline"
          >
            ← Înapoi la categorii
          </Link>

          <h1 className="text-2xl font-bold mt-2">
            {category?.name}
          </h1>

          <p className="text-sm text-gray-500">
            Trage produsele pentru a schimba ordinea
          </p>

        </div>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >

          <SortableContext
            items={products.map((p) => p.id)}
            strategy={verticalListSortingStrategy}
          >

            <div className="space-y-4">

              {products.map((product) => (
                <SortableItem
                  key={product.id}
                  product={product}
                />
              ))}

            </div>

          </SortableContext>

        </DndContext>

      </div>

    </div>

  );
}
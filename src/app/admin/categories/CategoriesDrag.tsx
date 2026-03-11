"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

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

function SortableItem({ cat }: any) {

  const {
  attributes,
  listeners,
  setNodeRef,
  transform,
  transition,
} = useSortable({ id: String(cat.id) });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const hasProducts = cat.products && cat.products.length > 0;

  return (

    <div
      ref={setNodeRef}
      style={style}
      className="bg-white border rounded-xl p-4 shadow-sm flex items-center justify-between gap-4"
    >

      <div className="flex items-center gap-4">

        <div
          {...attributes}
          {...listeners}
          className="cursor-grab text-gray-400 text-lg"
        >
          ≡
        </div>

        {cat.image ? (
          <img
            src={cat.image}
            className="w-14 h-14 object-cover rounded-lg border"
          />
        ) : (
          <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-lg text-xs text-gray-500">
            Fără imagine
          </div>
        )}

        <div className="flex flex-col">
          <span className="font-medium text-base">
            {cat.name}
          </span>

          {hasProducts && (
            <span className="text-xs text-gray-500">
              Conține produse
            </span>
          )}
        </div>

      </div>

      <div className="flex gap-4 text-sm">

        <Link
          href={`/admin/categories/edit/${cat.id}`}
          className="text-blue-600 hover:underline"
        >
          Edit
        </Link>

      </div>

    </div>

  );
}

export default function CategoriesDrag({ categories }: any) {

  const [items, setItems] = useState(categories);

  const sensors = useSensors(useSensor(PointerSensor));

 async function handleDragEnd(event:any) {

  const { active, over } = event;

  if (!over || active.id === over.id) return;

  const oldIndex = items.findIndex(
    (i:any) => String(i.id) === String(active.id)
  );

  const newIndex = items.findIndex(
    (i:any) => String(i.id) === String(over.id)
  );

  if (oldIndex === -1 || newIndex === -1) return;

  const newItems = arrayMove(items, oldIndex, newIndex);

  setItems(newItems);

  for (let i = 0; i < newItems.length; i++) {

  const { data, error } = await supabase
    .from("categories")
    .update({ position: i })
    .eq("id", newItems[i].id)
    .select();

  console.log("update result", data, error);

}

}

  return (

    <div className="min-h-screen bg-gray-100 px-4 py-6">

      <div className="max-w-4xl mx-auto">

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-2xl md:text-3xl font-bold">
            Categorii
          </h1>

          <Link
            href="/admin/categories/new"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            + Adaugă categorie
          </Link>

        </div>

        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >

          <SortableContext
  items={items.map((i: any) => String(i.id))}
  strategy={verticalListSortingStrategy}
>

            <div className="space-y-3">

              {items.map((cat: any) => (
                <SortableItem key={cat.id} cat={cat} />
              ))}

            </div>

          </SortableContext>

        </DndContext>

      </div>

    </div>

  );
}
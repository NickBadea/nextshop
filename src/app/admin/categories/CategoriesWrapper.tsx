"use client";

import dynamic from "next/dynamic";

const CategoriesDrag = dynamic(() => import("./CategoriesDrag"), {
  ssr: false,
});

export default function CategoriesWrapper({ categories }: any) {
  return <CategoriesDrag categories={categories} />;
}
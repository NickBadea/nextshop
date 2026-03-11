import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import CategoriesWrapper from "./CategoriesWrapper";

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: categories } = await supabase
    .from("categories")
    .select(`
      *,
      products(id)
    `)
    .order("position", { ascending: true });

  return <CategoriesWrapper categories={categories || []} />;
}
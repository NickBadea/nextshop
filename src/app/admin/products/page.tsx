import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  return (

    <div className="min-h-screen bg-gray-100 px-4 py-6">

      <div className="max-w-4xl mx-auto">

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-2xl md:text-3xl font-bold">
            Produse
          </h1>

          <Link
            href="/admin/products/new"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            + Adaugă produs
          </Link>

        </div>

        <div className="space-y-4">

          {categories?.map((category) => (

            <Link
              key={category.id}
              href={`/admin/products/category/${category.id}`}
              className="block bg-white border rounded-xl p-5 hover:shadow transition"
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="font-semibold text-lg">
                    {category.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    Vezi produsele din categorie
                  </p>

                </div>

                <span className="text-gray-400 text-sm">
                  →
                </span>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </div>

  );

}
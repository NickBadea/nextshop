import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import Link from "next/link";
import DeleteCategoryButton from "@/components/DeleteCategoryButton";

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
    .order("created_at", { ascending: false });


  async function deleteCategory(formData: FormData) {
    "use server";

    const supabase = await createClient();
    const id = formData.get("id");

    const { data: products } = await supabase
      .from("products")
      .select("id")
      .eq("category_id", id)
      .limit(1);

    if (products && products.length > 0) {
      return;
    }

    await supabase
      .from("categories")
      .delete()
      .eq("id", id);

    redirect("/admin/categories");
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

          <h1 className="text-2xl md:text-3xl font-bold">
            Categorii
          </h1>

          <Link
            href="/admin/categories/new"
            className="w-full sm:w-auto bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-center"
          >
            + Adaugă categorie
          </Link>

        </div>

        {/* LISTĂ */}

        <div className="space-y-3">

          {categories?.map((cat) => {

            const hasProducts = cat.products && cat.products.length > 0;

            return (

              <div
                key={cat.id}
                className="bg-white border rounded-xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >

                {/* INFO */}

                <div className="flex items-center gap-4">

                  {/* IMAGE */}

                  {cat.image ? (
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-14 h-14 object-cover rounded-lg border"
                    />
                  ) : (
                    <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-lg text-xs text-gray-500">
                      Fără imagine
                    </div>
                  )}

                  {/* TEXT */}

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

                {/* ACTIONS */}

                <div className="flex gap-4 text-sm">

                  <Link
                    href={`/admin/categories/edit/${cat.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>

                  <form action={deleteCategory}>
                    <input type="hidden" name="id" value={cat.id} />
                    <DeleteCategoryButton hasProducts={hasProducts} />
                  </form>

                </div>

              </div>

            );

          })}

          {categories?.length === 0 && (

            <div className="bg-white p-6 rounded-xl border text-gray-500 text-center">
              Nu există categorii încă.
            </div>

          )}

        </div>

      </div>

    </div>
  );
}
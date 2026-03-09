import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function deleteProduct(formData: FormData) {
  "use server";

  const supabase = await createClient();
  const id = formData.get("id");

  await supabase.from("products").delete().eq("id", id);

  redirect("/admin/products");
}

export default async function ProductsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: products } = await supabase
    .from("products")
    .select("*, categories(name)")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

          <h1 className="text-2xl md:text-3xl font-bold">
            Produse
          </h1>

          <Link
            href="/admin/products/new"
            className="w-full sm:w-auto bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-center"
          >
            + Adaugă produs
          </Link>

        </div>

        {/* LISTĂ */}

        <div className="space-y-4">

          {products?.map((product) => {

            let images: string[] = [];

            try {
              images = product.images ? JSON.parse(product.images) : [];
            } catch {
              images = [];
            }

            return (
              <div
                key={product.id}
                className="bg-white border rounded-xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >

                {/* INFO PRODUS */}

                <div className="flex items-center gap-4">

                  {images[0] && (
                    <img
                      src={images[0]}
                      alt={product.name}
                      className="w-16 h-16 md:w-20 md:h-20 object-cover rounded"
                    />
                  )}

                  <div>
                    <p className="font-semibold text-base">
                      {product.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      {product.categories?.name}
                    </p>
                  </div>

                </div>

                {/* BUTOANE */}

                <div className="flex gap-4 text-sm">

                  <Link
                    href={`/admin/products/edit/${product.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>

                  <form action={deleteProduct}>
                    <input
                      type="hidden"
                      name="id"
                      value={product.id}
                    />

                    <button
                      type="submit"
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>

                  </form>

                </div>

              </div>
            );
          })}

          {products?.length === 0 && (
            <div className="bg-white p-6 rounded-xl border text-gray-500 text-center">
              Nu există produse încă.
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
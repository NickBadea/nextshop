import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

async function updateCategory(formData: FormData) {
  "use server";

  const supabase = await createClient();

  const id = formData.get("id");
  const name = formData.get("name");

  await supabase
    .from("categories")
    .update({
      name,
    })
    .eq("id", id);

  redirect("/admin/categories");
}

export default async function EditCategory({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: category } = await supabase
    .from("categories")
    .select("*")
    .eq("id", id)
    .single();

  if (!category) redirect("/admin/categories");

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">

      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-sm border">

        <h1 className="text-xl md:text-2xl font-bold mb-6">
          Editează categorie
        </h1>

        <form action={updateCategory} className="space-y-6">

          <input type="hidden" name="id" value={id} />

          <div>
            <label className="block mb-2 font-medium">
              Nume categorie
            </label>

            <input
              name="name"
              defaultValue={category.name}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Salvează modificările
          </button>

        </form>

      </div>

    </div>
  );
}
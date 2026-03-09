import { createClient } from "@/lib/supabase-server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          Admin Dashboard
        </h1>

        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">

          <p className="text-gray-600 text-sm md:text-base">
            Logat ca:
          </p>

          <p className="font-medium text-gray-900 mt-1 break-all">
            {user?.email}
          </p>

        </div>

      </div>

    </div>
  );
}
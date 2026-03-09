import AdminSidebar from "@/components/AdminSidebar";
import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 md:flex">

      <AdminSidebar />

      <main className="flex-1 p-4 md:p-10">
        {children}
      </main>

    </div>
  );
}
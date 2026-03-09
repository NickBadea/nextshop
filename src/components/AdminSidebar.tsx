"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (path: string) =>
    `block px-4 py-2 rounded-lg ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <>
      {/* MOBILE HEADER */}

      <div className="md:hidden w-full bg-white border-b">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="font-semibold text-gray-800">
            Admin
          </span>

          <button
            onClick={() => setOpen(true)}
            className="text-2xl"
          >
            ☰
          </button>
        </div>
      </div>


      {/* MOBILE OVERLAY MENU */}

      {open && (
        <div className="fixed inset-0 z-50 bg-black/30">

          <div className="w-64 h-full bg-white p-6">

            <button
              onClick={() => setOpen(false)}
              className="mb-6 text-xl"
            >
              ✕
            </button>

            <nav className="space-y-2">

              <Link onClick={()=>setOpen(false)} href="/admin/dashboard" className={linkClass("/admin/dashboard")}>
                Dashboard
              </Link>

              <Link onClick={()=>setOpen(false)} href="/admin/categories" className={linkClass("/admin/categories")}>
                Categorii
              </Link>

              <Link onClick={()=>setOpen(false)} href="/admin/products" className={linkClass("/admin/products")}>
                Produse
              </Link>

              <Link onClick={()=>setOpen(false)} href="/admin/quotes" className={linkClass("/admin/quotes")}>
                Cereri ofertă
              </Link>

              <Link onClick={()=>setOpen(false)} href="/admin/contact" className={linkClass("/admin/contact")}>
                Cereri contact
              </Link>

            </nav>

          </div>

        </div>
      )}


      {/* DESKTOP SIDEBAR */}

      <aside className="hidden md:block w-64 border-r bg-white p-6">

        <h2 className="text-xl font-bold mb-8">
          Admin
        </h2>

        <nav className="space-y-2">

          <Link href="/admin/dashboard" className={linkClass("/admin/dashboard")}>
            Dashboard
          </Link>

          <Link href="/admin/categories" className={linkClass("/admin/categories")}>
            Categorii
          </Link>

          <Link href="/admin/products" className={linkClass("/admin/products")}>
            Produse
          </Link>

          <Link href="/admin/quotes" className={linkClass("/admin/quotes")}>
            Cereri ofertă
          </Link>

          <Link href="/admin/contact" className={linkClass("/admin/contact")}>
            Cereri contact
          </Link>

        </nav>

      </aside>
    </>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useQuote } from "@/context/QuoteContext";
import { ChevronDown } from "lucide-react";

const categories = [
  { name: "Rafturi", slug: "rafturi" },
  { name: "Gondole", slug: "gondole" },
  { name: "Fructe & Legume", slug: "fructe-&-legume" },
  { name: "Panificație", slug: "panificație" },
  { name: "Vitrine", slug: "vitrine" },
  { name: "Coffee Corner", slug: "coffee-corner" },
  { name: "Tejghele", slug: "tejghele" },
  { name: "Accesorii", slug: "accesorii" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const { items } = useQuote();
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          {/* LOGO + SOCIAL */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center" aria-label="NextShop homepage">
              <Image
                src="/logo.png"
                alt="NextShop logo"
                width={200}
                height={90}
                priority
                className="object-contain"
              />
            </Link>

            {/* SOCIAL */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://facebook.com/nextshopretail"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pagina de Facebook NextShop"
                className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                >
                  <path d="M18 2h-3c-3 0-5 2-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7c0-1 .5-1 1-1h3z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/nextshopretail"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pagina de Instagram NextShop"
                className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100 transition"
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="1" />
                </svg>
              </a>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-10 text-[15px] font-semibold text-gray-800">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>

            <Link href="/cine-suntem" className="hover:text-blue-600 transition">
              Cine suntem
            </Link>

            {/* PRODUSE DROPDOWN */}
            <div className="relative group">
              <Link
                href="/produse"
                className="flex items-center gap-1 hover:text-blue-600 transition"
              >
                Produse
                <ChevronDown
                  aria-hidden="true"
                  size={16}
                  className="transition group-hover:rotate-180"
                />
              </Link>

              <div className="absolute left-0 top-full mt-4 w-64 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/produse/${encodeURIComponent(cat.slug)}`}
                      className="block px-5 py-3 text-sm hover:bg-gray-50"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>

            {/* CART ICON */}
            <Link
              href="/cere-oferta"
              aria-label="Produse adăugate pentru cerere de ofertă"
              className="relative flex items-center hover:text-blue-600 transition"
            >
              <svg
                aria-hidden="true"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 6h15l-1.5 9h-12z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="9" cy="20" r="1.5" fill="currentColor" />
                <circle cx="18" cy="20" r="1.5" fill="currentColor" />
              </svg>

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

            <Link
              href="/cere-oferta"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Cere ofertă
            </Link>
          </nav>

          {/* BURGER */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Deschide meniul"
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b">
          <Link href="/" onClick={() => setOpen(false)} aria-label="NextShop homepage">
            <Image
              src="/logo.png"
              alt="NextShop logo"
              width={150}
              height={70}
              className="object-contain"
            />
          </Link>

          <button
            onClick={() => setOpen(false)}
            aria-label="Închide meniul"
            className="text-3xl"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col px-8 pt-10 gap-6 text-lg font-semibold text-gray-900">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/cine-suntem" onClick={() => setOpen(false)}>
            Cine suntem
          </Link>

          {/* MOBILE PRODUSE */}
          <button
            onClick={() => setProductsOpen(!productsOpen)}
            aria-label="Deschide categoriile de produse"
            aria-expanded={productsOpen}
            className="flex justify-between items-center"
          >
            Produse
            <ChevronDown
              aria-hidden="true"
              size={18}
              className={`transition ${productsOpen ? "rotate-180" : ""}`}
            />
          </button>

          {productsOpen && (
            <div className="flex flex-col pl-4 gap-3 text-base">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/produse/${encodeURIComponent(cat.slug)}`}
                  onClick={() => setOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}

          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <Link
            href="/cere-oferta"
            onClick={() => setOpen(false)}
            className="mt-6 bg-blue-600 text-white text-center py-3 rounded-lg"
          >
            Cere ofertă ({totalItems})
          </Link>
        </nav>
      </div>

      <div className="h-20"></div>
    </>
  );
}
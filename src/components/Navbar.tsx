"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useQuote } from "@/context/QuoteContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { items } = useQuote();

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">

        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

          {/* LOGO */}

          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={90}
              priority
              className="object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}

          <nav className="hidden md:flex items-center gap-10 text-base font-semibold text-gray-800">

            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>

            <Link href="/cine-suntem" className="hover:text-blue-600 transition">
              Cine suntem
            </Link>

            <Link href="/produse" className="hover:text-blue-600 transition">
              Produse
            </Link>

            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>

            {/* CART */}

            <Link href="/cere-oferta" className="relative flex items-center">

              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M6 6h15l-1.5 9h-12z" stroke="currentColor" strokeWidth="2"/>
                <circle cx="9" cy="20" r="1.5" fill="currentColor"/>
                <circle cx="18" cy="20" r="1.5" fill="currentColor"/>
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

        {/* HEADER */}

        <div className="flex items-center justify-between px-6 h-20 border-b">

          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={70}
          />

          <button onClick={() => setOpen(false)} className="text-3xl">
            ✕
          </button>

        </div>

        {/* MENU */}

        <nav className="flex flex-col px-8 pt-10 gap-6 text-lg font-semibold text-gray-900">

          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/cine-suntem" onClick={() => setOpen(false)}>
            Cine suntem
          </Link>

          <Link href="/produse" onClick={() => setOpen(false)}>
            Produse
          </Link>

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

      {/* SPACER */}

      <div className="h-20"></div>
    </>
  );
}
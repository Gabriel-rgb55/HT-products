"use client";

import Link from "next/link";
import { useQuoteCart } from "@/context/QuoteCartContext";

export default function Navbar() {
  const { totalItems } = useQuoteCart();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white"
        >
          HT
          <span className="text-blue-500">
            {" "}
            Products
          </span>
        </Link>

        <div className="flex items-center gap-8">
          {/* Navigation */}
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <Link
              href="/"
              className="transition hover:text-white"
            >
              Hem
            </Link>

            <Link
              href="/products"
              className="transition hover:text-white"
            >
              Produkter
            </Link>

            <Link
              href="/about"
              className="transition hover:text-white"
            >
              Om oss
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-white"
            >
              Kontakt
            </Link>
          </div>

          {/* Quote cart */}
          <Link
            href="/quote"
            aria-label="Visa offert"
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-blue-500 hover:bg-white/10"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="20" r="1" />
              <circle cx="19" cy="20" r="1" />

              <path d="M3 4h2l2.4 10.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H6" />
            </svg>

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-blue-600 px-1.5 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
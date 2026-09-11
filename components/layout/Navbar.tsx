"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useQuoteCart } from "@/context/QuoteCartContext";

const links = [
  { href: "/", label: "Hem" },
  { href: "/products", label: "Produkter" },
  { href: "/about", label: "Om oss" },
  { href: "/contact", label: "Kontakt" },
];

function isCurrentPath(pathname: string, href: string) {
  return href === "/"
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useQuoteCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <nav aria-label="Huvudnavigation" className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold tracking-tight text-white"
          >
            HT <span className="text-blue-500">Products</span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {links.map((link) => {
              const active = isCurrentPath(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-blue-500/10 text-blue-600"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/quote"
              aria-label={`Visa offert${totalItems ? `, ${totalItems} produkter` : ""}`}
              className={`relative flex h-11 w-11 items-center justify-center rounded-xl border transition ${
                pathname === "/quote"
                  ? "border-blue-500 bg-blue-500/10 text-blue-600"
                  : "border-white/10 bg-white/5 text-white hover:border-blue-500"
              }`}
            >
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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

            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
              onClick={() => setIsOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-blue-500 md:hidden"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {isOpen ? (
                  <><path d="M6 6l12 12" /><path d="M18 6L6 18" /></>
                ) : (
                  <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`${isOpen ? "grid" : "hidden"} gap-2 border-t border-white/10 py-4 md:hidden`}
        >
          {links.map((link) => {
            const active = isCurrentPath(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`rounded-xl px-4 py-3 font-medium transition ${
                  active
                    ? "bg-blue-500/10 text-blue-600"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/quote"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
          >
            Begär offert{totalItems > 0 ? ` (${totalItems})` : ""}
          </Link>
        </div>
      </nav>
    </header>
  );
}

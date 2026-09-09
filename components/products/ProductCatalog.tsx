"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export type CatalogProduct = {
  id: number;
  name: string;
  slug: string;
  category: string;
  type: string;
  description: string;
  image: string;
  specifications: string[];
  sizes: string[];
  viscosity?: string;
  temperature?: string;
  standard?: string;
};

type ProductCatalogProps = {
  products: CatalogProduct[];
  title: string;
  basePath: string;
  filters: string[];
};

function normalize(value: string) {
  return value.toLocaleLowerCase("sv-SE").trim();
}

export default function ProductCatalog({
  products,
  title,
  basePath,
  filters,
}: ProductCatalogProps) {
  const [activeFilter, setActiveFilter] = useState("Alla");
  const [query, setQuery] = useState("");

  const visibleProducts = useMemo(() => {
    const normalizedQuery = normalize(query);

    return products.filter((product) => {
      const matchesFilter =
        activeFilter === "Alla" ||
        normalize(product.category).includes(normalize(activeFilter)) ||
        normalize(product.type).includes(normalize(activeFilter));
      const searchableText = normalize(
        [
          product.name,
          product.category,
          product.type,
          product.description,
          product.viscosity,
          product.temperature,
          product.standard,
          ...product.specifications,
        ]
          .filter(Boolean)
          .join(" "),
      );

      return matchesFilter && searchableText.includes(normalizedQuery);
    });
  }, [activeFilter, products, query]);

  const resetFilters = () => {
    setActiveFilter("Alla");
    setQuery("");
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="border-b border-white/10 pb-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-medium text-blue-400">Produktsortiment</p>
            <h2 className="mt-2 text-3xl font-bold text-white">{title}</h2>
            <p className="mt-2 text-slate-500" aria-live="polite">
              {visibleProducts.length} av {products.length} produkter visas
            </p>
          </div>

          <label className="relative block w-full lg:max-w-sm">
            <span className="sr-only">Sök produkter</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Sök namn, typ eller specifikation…"
              className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap gap-3" aria-label="Filtrera på underkategori">
          {["Alla", ...filters].map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-xl px-5 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:border-blue-500 hover:text-white"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {visibleProducts.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product) => {
            const badge = product.viscosity ?? product.temperature ?? product.standard;

            return (
              <article
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e1a] transition duration-300 hover:-translate-y-1 hover:border-blue-500/60"
              >
                <div className="relative h-72 overflow-hidden bg-[#0d1220]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {badge && (
                    <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                      {badge}
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-blue-400">
                    {product.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold leading-snug text-white">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">{product.type}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {product.description}
                  </p>
                  <div className="mt-auto pt-6">
                    <Link
                      href={`${basePath}/${product.slug}`}
                      className="flex items-center justify-between border-t border-white/10 pt-5 text-sm font-medium text-blue-400 transition hover:text-blue-300"
                    >
                      Visa produkt
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-white/15 bg-white/[0.03] px-6 py-14 text-center">
          <h3 className="text-xl font-semibold text-white">Inga produkter hittades</h3>
          <p className="mt-2 text-slate-400">Prova ett annat sökord eller visa alla underkategorier.</p>
          <button
            type="button"
            onClick={resetFilters}
            className="mt-6 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Rensa filter
          </button>
        </div>
      )}
    </section>
  );
}

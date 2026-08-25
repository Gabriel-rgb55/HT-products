"use client";

import Image from "next/image";
import { useQuoteCart } from "@/context/QuoteCartContext";

export default function QuoteForm() {
  const {
    items,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } = useQuoteCart();

  return (
    <div>
      {/* Quote list */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white">
          Din offertlista
        </h2>

        {items.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="text-slate-400">
              Du har inte lagt till några produkter ännu.
            </p>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.slug}-${item.size}`}
                className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center"
              >
                {/* Product image */}
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[#0d1220]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Product info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-white">
                    {item.name}
                  </h3>

                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                    <p className="text-slate-500">
                      Storlek:{" "}
                      <span className="text-slate-300">
                        {item.size}
                      </span>
                    </p>

                    <p className="text-slate-500">
                      Antal:{" "}
                      <span className="text-slate-300">
                        {item.quantity}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Quantity controls */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      decreaseQuantity(item.slug, item.size)
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-blue-500 hover:bg-white/5"
                  >
                    −
                  </button>

                  <span className="min-w-6 text-center font-medium text-white">
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      increaseQuantity(item.slug, item.size)
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-blue-500 hover:bg-white/5"
                  >
                    +
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      removeItem(item.slug, item.size)
                    }
                    className="ml-2 text-sm text-red-400 transition hover:text-red-300"
                  >
                    Ta bort
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Customer form */}
      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Namn
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="För- och efternamn"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Företag
          </label>

          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Företagsnamn"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              E-post
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="namn@foretag.se"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Telefon
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+46..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Meddelande
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Övriga önskemål, leveransinformation eller frågor..."
            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={items.length === 0}
          className="rounded-xl bg-blue-600 px-8 py-4 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Skicka offertförfrågan
        </button>
      </form>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";
import { oils } from "@/data/oils";

export default function OilsPage() {
  return (
    <main className="min-h-screen bg-[#050816]">
      {/* Breadcrumb */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition hover:text-white">
              Hem
            </Link>

            <span>/</span>

            <Link href="/products" className="transition hover:text-white">
              Produkter
            </Link>

            <span>/</span>

            <span className="text-slate-300">Oljor</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              MOTOREX Smörjmedel
            </p>

            <h1 className="mt-4 text-5xl font-bold text-white md:text-6xl">
              Motoroljor
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Utforska vårt sortiment av högkvalitativa motoroljor för
              personbilar, transportfordon, motorcyklar och andra
              användningsområden.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                Motorolja
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                Syntetisk
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                Personbil
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                Yrkesfordon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium text-blue-400">
              Produktsortiment
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Våra oljor
            </h2>

            <p className="mt-2 text-slate-500">
              {oils.length} produkter visas
            </p>
          </div>

          {/* Filter UI - fungerar visuellt nu, logik kan läggas till senare */}
          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white">
              Alla
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-300 transition hover:border-blue-500 hover:text-white">
              Personbil
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-300 transition hover:border-blue-500 hover:text-white">
              Motorcykel
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-slate-300 transition hover:border-blue-500 hover:text-white">
              Yrkesfordon
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {oils.map((oil) => (
            <article
              key={oil.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0e1a] transition duration-300 hover:-translate-y-1 hover:border-blue-500/60"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-[#0d1220]">
                <Image
                  src={oil.image}
                  alt={oil.name}
                  fill
                  className="object-contain p-6 transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                  {oil.viscosity}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-blue-400">
                    {oil.category}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold leading-snug text-white">
                    {oil.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {oil.type}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {oil.description}
                  </p>
                </div>

                <div className="mt-auto pt-6">
                  <Link
                    href={`/products/oljor/${oil.slug}`}
                    className="flex items-center justify-between border-t border-white/10 pt-5 text-sm font-medium text-blue-400 transition hover:text-blue-300"
                  >
                    Visa produkt

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Help CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 md:flex md:items-center md:justify-between md:gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Vet du inte vilken olja som passar?
            </h2>

            <p className="mt-2 max-w-2xl leading-7 text-slate-400">
              Rätt olja beror bland annat på fordon, motor,
              tillverkarspecifikation och viskositet. Kontakta oss så hjälper
              vi dig att hitta rätt alternativ.
            </p>
          </div>

          <Link
            href="/quote"
            className="mt-6 inline-flex shrink-0 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 md:mt-0"
          >
            Begär offert
          </Link>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";
import ProductCatalog from "@/components/products/ProductCatalog";
import { oils } from "@/data/oils";

export default function OilsPage() {
  return (
    <main className="min-h-screen bg-[#050816]">
      <section className="border-b border-white/10"><div className="mx-auto max-w-7xl px-6 py-5"><div className="flex items-center gap-2 text-sm text-slate-500"><Link href="/" className="transition hover:text-white">Hem</Link><span>/</span><Link href="/products" className="transition hover:text-white">Produkter</Link><span>/</span><span className="text-slate-300">Oljor</span></div></div></section>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20"><div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">MOTOREX Smörjmedel</p>
          <h1 className="mt-4 text-5xl font-bold text-white md:text-6xl">Motoroljor</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">Utforska vårt sortiment av högkvalitativa motoroljor för personbilar, transportfordon, motorcyklar och andra användningsområden.</p>
          <div className="mt-8 flex flex-wrap gap-3">{["Motorolja", "Syntetisk", "Personbil", "Yrkesfordon"].map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">{tag}</span>)}</div>
        </div></div>
      </section>
      <ProductCatalog products={oils} title="Våra oljor" basePath="/products/oljor" filters={["Personbil", "Syntetisk", "Bensin", "Diesel"]} />
      <section className="mx-auto max-w-7xl px-6 pb-20"><div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 md:flex md:items-center md:justify-between md:gap-10"><div><h2 className="text-2xl font-semibold text-white">Vet du inte vilken olja som passar?</h2><p className="mt-2 max-w-2xl leading-7 text-slate-400">Rätt olja beror bland annat på fordon, motor, tillverkarspecifikation och viskositet. Kontakta oss så hjälper vi dig att hitta rätt alternativ.</p></div><Link href="/quote" className="mt-6 inline-flex shrink-0 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 md:mt-0">Begär offert</Link></div></section>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToQuoteButton from "@/components/products/AddToQuoteButton";
import { coolants } from "@/data/coolants";

type ProductPageProps = { params: Promise<{ slug: string }> };

export default async function CoolantProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = coolants.find((coolant) => coolant.slug === slug);

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-[#050816]">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition hover:text-white">Hem</Link><span>/</span>
            <Link href="/products" className="transition hover:text-white">Produkter</Link><span>/</span>
            <Link href="/products/kylarvatska" className="transition hover:text-white">Kylarvätska</Link><span>/</span>
            <span className="text-slate-300">{product.name}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="relative min-h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-[#0a0e1a]">
            <Image src={product.image} alt={product.name} fill priority className="object-contain p-10" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">{product.standard}</div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">MOTOREX</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">{product.name}</h1>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">{product.category}</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">{product.type}</span>
            </div>
            <p className="mt-7 text-lg leading-8 text-slate-300">{product.description}</p>
            <p className="mt-5 leading-7 text-slate-400">{product.longDescription}</p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-sm text-slate-500">Standard</p><p className="mt-1 font-semibold text-white">{product.standard}</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-sm text-slate-500">Produkttyp</p><p className="mt-1 font-semibold text-white">{product.type}</p></div>
            </div>
            <div className="mt-10 flex flex-col gap-4">
              <AddToQuoteButton slug={`kylarvatska-${product.slug}`} name={product.name} image={product.image} sizes={product.sizes} />
              <Link href="/quote" className="rounded-xl border border-white/10 px-7 py-4 text-center font-medium text-white transition hover:border-blue-500">Visa offert</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-blue-400">Produktinformation</p>
              <h2 className="mt-2 text-3xl font-bold text-white">Egenskaper</h2>
              <div className="mt-8 space-y-3">
                {product.specifications.map((specification) => (
                  <div key={specification} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-sm text-blue-400">✓</div>
                    <span className="text-slate-300">{specification}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-blue-400">Förpackningar</p>
              <h2 className="mt-2 text-3xl font-bold text-white">Tillgängliga storlekar</h2>
              <p className="mt-4 max-w-lg leading-7 text-slate-400">Välj önskad förpackningsstorlek när du lägger produkten i offertlistan. Kontakta oss för tillgänglighet och större volymer.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {product.sizes.map((size) => <div key={size} className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-medium text-white">{size}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 md:flex md:items-center md:justify-between md:gap-10 lg:p-10">
          <div><h2 className="text-2xl font-semibold text-white">Intresserad av {product.name}?</h2><p className="mt-2 max-w-2xl leading-7 text-slate-400">Lägg till produkten i din offertlista och fortsätt utforska sortimentet eller skicka din offertförfrågan.</p></div>
          <div className="mt-6 md:mt-0"><AddToQuoteButton slug={`kylarvatska-${product.slug}`} name={product.name} image={product.image} sizes={product.sizes} /></div>
        </div>
      </section>
    </main>
  );
}


import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816]">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-5">
          <Link href="/" className="text-2xl font-bold text-white">
            HT
            <span className="text-blue-500"> Products</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-5xl font-bold text-white">
          Om <span className="text-blue-500">oss</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          HT Products hjälper företag att hitta rätt produkter genom
          professionell produktanskaffning och skräddarsydda offerter. Vi
          samarbetar med noggrant utvalda tillverkare och leverantörer för att
          erbjuda tillförlitliga produkter med hög kvalitet, anpassade efter
          varje kunds behov.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">
              Vårt uppdrag
            </h2>

            <p className="mt-4 leading-relaxed text-slate-400">
              Vi vill förenkla inköpsprocessen genom att hjälpa företag att
              hitta pålitliga leverantörer och konkurrenskraftiga lösningar.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">
              Vad vi erbjuder
            </h2>

            <p className="mt-4 leading-relaxed text-slate-400">
              Vi hjälper till med produktval, leverantörskontakter,
              offertunderlag och vägledning genom hela inköpsprocessen.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">
              Varför välja oss?
            </h2>

            <p className="mt-4 leading-relaxed text-slate-400">
              Vi fokuserar på kvalitet, tydlig kommunikation och pålitlig
              service för att hjälpa företag att spara både tid och resurser.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


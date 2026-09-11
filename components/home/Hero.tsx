
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-[#050816]">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,23,42,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 text-center lg:py-28">
        <p className="eyebrow">Produkter för professionella behov</p>

        <h1 className="mx-auto mt-5 max-w-5xl text-5xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Rätt produkt. <span className="text-blue-500">Rätt lösning.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          HT Products hjälper företag att hitta smörjmedel och fordonsvätskor
          för en tryggare, effektivare och mer pålitlig drift.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/quote"
            className="rounded-xl bg-blue-600 px-8 py-4 font-medium text-white transition hover:bg-blue-700"
          >
            Bygg din offert
          </Link>

          <Link
            href="/products"
            className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-medium text-slate-900 shadow-sm transition hover:border-blue-500 hover:text-blue-700"
          >
            Utforska sortimentet
          </Link>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-3 text-left sm:grid-cols-3">
          {["Tydligt produktsortiment", "Hjälp med produktval", "Offert för företagsbehov"].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 backdrop-blur-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-xs font-bold text-blue-400">✓</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


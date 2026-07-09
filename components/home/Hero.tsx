export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] pt-20">

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        <p className="mb-3 uppercase tracking-[0.3em] text-blue-400">
          Welcome to
        </p>

        <h1 className="text-6xl font-extrabold text-white md:text-8xl">
          HT
          <span className="text-blue-500"> Products</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          Professional product sourcing and quotation services for businesses.
          Browse our showroom and request a tailored offer for your needs.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-8 py-4 font-medium text-white transition hover:bg-blue-700">
            Request Quote
          </button>

          <button className="rounded-xl border border-slate-700 px-8 py-4 font-medium text-white transition hover:border-blue-500">
            Browse Products
          </button>
        </div>
      </div>
    </section>
  );
}
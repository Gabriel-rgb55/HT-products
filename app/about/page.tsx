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
          About <span className="text-blue-500">Us</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          HT Products specializes in professional product sourcing and
          quotation services for businesses. We work with trusted manufacturers
          and suppliers to help our clients find reliable, high-quality
          products that meet their specific requirements.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">
              Our Mission
            </h2>

            <p className="mt-4 text-slate-400">
              To simplify product sourcing by connecting businesses with
              dependable suppliers and delivering competitive quotations.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">
              What We Do
            </h2>

            <p className="mt-4 text-slate-400">
              We source products, compare suppliers, prepare quotations,
              and support businesses throughout the procurement process.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">
              Why Choose Us
            </h2>

            <p className="mt-4 text-slate-400">
              Our focus is on quality, transparent communication, and
              reliable service to help businesses save time and reduce costs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
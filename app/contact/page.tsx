import Link from "next/link";

export default function ContactPage() {
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

      {/* Contact Section */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-5xl font-bold text-white">
          Request a <span className="text-blue-500">Quote</span>
        </h1>

        <p className="mt-4 text-slate-400">
          Tell us what you're looking for and we'll get back to you with a
          tailored quotation.
        </p>

        <form className="mt-12 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Name
            </label>
            <input
              type="text"
              placeholder="John Smith"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Company
            </label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Phone
            </label>
            <input
              type="tel"
              placeholder="+46..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Product Needed
            </label>
            <input
              type="text"
              placeholder="e.g. Industrial Fasteners"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              rows={6}
              placeholder="Tell us about your requirements..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-8 py-4 font-medium text-white transition hover:bg-blue-700"
          >
            Send Request
          </button>
        </form>
      </section>
    </main>
  );
}
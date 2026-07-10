
import Link from "next/link";

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[#050816]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-5">
          <Link href="/" className="text-2xl font-bold text-white">
            HT
            <span className="text-blue-500"> Products</span>
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-5xl font-bold text-white">
          Begär en <span className="text-blue-500">offert</span>
        </h1>

        <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
          Beskriv vilken produkt du är intresserad av, önskad mängd och
          eventuella leveranskrav. Vi återkommer med en offert anpassad efter
          ditt företags behov.
        </p>

        <form className="mt-12 space-y-6">
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
              htmlFor="product"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Produktkategori
            </label>

            <select
              id="product"
              name="product"
              required
              defaultValue=""
              className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 text-white outline-none transition focus:border-blue-500"
            >
              <option value="" disabled>
                Välj en produktkategori
              </option>
              <option value="oljor">Oljor</option>
              <option value="smorjfett">Smörjfett</option>
              <option value="spolarvatska">Spolarvätska</option>
              <option value="kylarvatska">Kylarvätska</option>
              <option value="annat">Annat</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Önskad mängd
            </label>

            <input
              id="quantity"
              name="quantity"
              type="text"
              placeholder="Exempelvis 20 liter, 5 dunkar eller 1 pall"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
            />
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
              rows={6}
              required
              placeholder="Beskriv vilken produkt du söker, användningsområde, leveransort och andra önskemål."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-8 py-4 font-medium text-white transition hover:bg-blue-700"
          >
            Skicka offertförfrågan
          </button>
        </form>
      </section>
    </main>
  );
}

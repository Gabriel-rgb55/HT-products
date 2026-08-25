
import Link from "next/link";

export default function ContactPage() {
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

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white">
            Kontakta <span className="text-blue-500">oss</span>
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Har du frågor om våra produkter, leveranser eller sortiment?
            Kontakta oss så hjälper vi dig att hitta rätt lösning för ditt
            företag.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Kontaktuppgifter
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  Företag
                </p>
                <p className="mt-1 text-lg text-white">HT Products AB</p>
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  E-post
                </p>
                <a
                  href="mailto:info@htproducts.se"
                  className="mt-1 inline-block text-lg text-blue-400 transition hover:text-blue-300"
                >
                  info@htproducts.se
                </a>
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  Telefon
                </p>
                <a
                  href="tel:+46311234567"
                  className="mt-1 inline-block text-lg text-blue-400 transition hover:text-blue-300"
                >
                  +46 31 123 45 67
                </a>
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  Adress
                </p>
                <address className="mt-1 text-lg not-italic leading-relaxed text-white">
                  Exempelgatan 12
                  <br />
                  411 00 Göteborg
                  <br />
                  Sverige
                </address>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">
              Öppettider
            </h2>

            <div className="mt-6 space-y-4 text-slate-300">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span>Måndag–fredag</span>
                <span className="text-white">08:00–17:00</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-4">
                <span>Lördag</span>
                <span className="text-white">Stängt</span>
              </div>

              <div className="flex justify-between">
                <span>Söndag</span>
                <span className="text-white">Stängt</span>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-blue-500/20 bg-blue-500/10 p-5">
              <h3 className="font-semibold text-white">
                Behöver du en offert?
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Skicka en offertförfrågan med information om produkt, mängd
                och önskad leverans.
              </p>

              <Link
                href="/quote"
                className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Begär offert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

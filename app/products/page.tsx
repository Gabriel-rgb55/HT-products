import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Oljor",
    slug: "oljor",
    subtitle: "Motor-, transmissions- och smörjoljor",
    description:
      "Upptäck högkvalitativa oljor för personbilar, transportfordon, maskiner och krävande industriella applikationer.",
    image: "/images/products/oljor.png",
    tag: "Smörjmedel",
  },
  {
    id: 2,
    name: "Smörjfett",
    slug: "smorjfett",
    subtitle: "För långvarigt skydd och låg friktion",
    description:
      "Smörjfetter för lager, chassin, maskindelar och komponenter som arbetar under hög belastning och tuffa förhållanden.",
    image: "/images/products/smorjfett.png",
    tag: "Smörjning",
  },
  {
    id: 3,
    name: "Spolarvätska",
    slug: "spolarvatska",
    subtitle: "För säker och klar sikt året runt",
    description:
      "Effektiva lösningar för rengöring av vindruta och glas, anpassade för olika temperaturer och användningsområden.",
    image: "/images/products/spolarvatska.png",
    tag: "Bilvård",
  },
  {
    id: 4,
    name: "Kylarvätska",
    slug: "kylarvatska",
    subtitle: "Skydd för moderna kylsystem",
    description:
      "Kylarvätskor utvecklade för effektiv värmeöverföring och skydd mot frost, korrosion, kavitation och termisk belastning.",
    image: "/images/products/kylarvatska.png",
    tag: "Kylsystem",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#050816]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Produktsortiment
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
              Produkter för
              <span className="text-blue-500"> professionella behov</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Utforska vårt sortiment av smörjmedel, fordonsvätskor och
              underhållsprodukter. Välj en kategori för att se tillgängliga
              produkter och hitta rätt lösning för ditt användningsområde.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-blue-400">
              Produktkategorier
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Hitta rätt produkt
            </h2>
          </div>

          <p className="hidden max-w-md text-right text-sm leading-6 text-slate-500 md:block">
            Klicka på en kategori för att se hela sortimentet inom respektive
            produktområde.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0e1a] transition duration-300 hover:-translate-y-1 hover:border-blue-500/60"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080b14] via-[#080b14]/20 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-md">
                  {category.tag}
                </div>
              </div>

              {/* Content */}
              <div className="relative p-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-3xl font-semibold text-white transition group-hover:text-blue-400">
                      {category.name}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-slate-300">
                      {category.subtitle}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition duration-300 group-hover:border-blue-500 group-hover:bg-blue-600">
                    →
                  </div>
                </div>

                <p className="mt-5 max-w-xl leading-7 text-slate-400">
                  {category.description}
                </p>

                <div className="mt-7 flex items-center gap-2 text-sm font-medium text-blue-400">
                  Visa produkter
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 md:flex-row md:items-center lg:p-10">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Osäker på vilken produkt du behöver?
            </h2>

            <p className="mt-2 max-w-2xl leading-7 text-slate-400">
              Kontakta oss så hjälper vi dig att hitta rätt produkt utifrån
              fordon, maskin, specifikation eller användningsområde.
            </p>
          </div>

          <Link
            href="/quote"
            className="shrink-0 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Begär offert
          </Link>
        </div>
      </section>
    </main>
  );
}
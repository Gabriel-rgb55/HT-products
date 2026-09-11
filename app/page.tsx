import Link from "next/link";
import Hero from "@/components/home/Hero";

const categories = [
  { name: "Oljor", href: "/products/oljor", text: "Motoroljor för moderna fordon och krävande drift.", icon: "01" },
  { name: "Smörjfett", href: "/products/smorjfett", text: "Långvarigt skydd för lager, chassin och maskiner.", icon: "02" },
  { name: "Spolarvätska", href: "/products/spolarvatska", text: "Klar sikt under sommarens och vinterns förhållanden.", icon: "03" },
  { name: "Kylarvätska", href: "/products/kylarvatska", text: "Pålitligt skydd för moderna kylsystem.", icon: "04" },
];

const steps = [
  { number: "01", title: "Hitta produkten", text: "Utforska sortimentet eller kontakta oss om du behöver vägledning." },
  { number: "02", title: "Bygg din offertlista", text: "Välj produkt, förpackningsstorlek och önskat antal." },
  { number: "03", title: "Skicka förfrågan", text: "Vi återkommer med pris, tillgänglighet och leveransalternativ." },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Vårt sortiment</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Produkter för professionell drift
            </h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-blue-400 transition hover:text-blue-700">
            Se hela sortimentet <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.href} href={category.href} className="group rounded-3xl border border-white/10 bg-[#0a0e1a] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/60">
              <span className="text-sm font-bold text-blue-400">{category.icon}</span>
              <h3 className="mt-10 text-2xl font-semibold text-white transition group-hover:text-blue-400">{category.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{category.text}</p>
              <span className="mt-7 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-blue-400 transition group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow">Enklare inköp</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">Från behov till offert i tre steg</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">Ett tydligt flöde som hjälper företag att hitta rätt produkt utan onödiga omvägar.</p>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <span className="text-sm font-bold text-blue-400">STEG {step.number}</span>
                <h3 className="mt-5 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16 lg:py-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/30 blur-[100px]" />
          <div className="relative max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">Personlig hjälp</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Osäker på vilken produkt som passar?</h2>
            <p className="mt-4 leading-7 text-slate-300">Berätta om fordonet, maskinen eller specifikationen så hjälper vi dig vidare.</p>
          </div>
          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Link href="/contact" className="rounded-xl border border-white/20 px-6 py-3.5 text-center font-semibold text-white transition hover:bg-white/10">Kontakta oss</Link>
            <Link href="/quote" className="rounded-xl bg-blue-600 px-6 py-3.5 text-center font-semibold text-white transition hover:bg-blue-500">Begär offert</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

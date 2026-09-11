import Link from "next/link";

const productLinks = [
  ["Oljor", "/products/oljor"],
  ["Smörjfett", "/products/smorjfett"],
  ["Spolarvätska", "/products/spolarvatska"],
  ["Kylarvätska", "/products/kylarvatska"],
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex text-2xl font-bold tracking-tight text-white">
            HT <span className="ml-1 text-blue-500">Products</span>
          </Link>
          <p className="mt-4 max-w-md leading-7 text-slate-400">
            Produkter, produktvägledning och skräddarsydda offerter för professionella behov.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Produkter</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            {productLinks.map(([label, href]) => <li key={href}><Link href={href} className="transition hover:text-blue-600">{label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">HT Products</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li><Link href="/about" className="transition hover:text-blue-600">Om oss</Link></li>
            <li><Link href="/contact" className="transition hover:text-blue-600">Kontakt</Link></li>
            <li><Link href="/quote" className="transition hover:text-blue-600">Begär offert</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HT Products AB</p>
          <p>Professionella produkter för företag</p>
        </div>
      </div>
    </footer>
  );
}

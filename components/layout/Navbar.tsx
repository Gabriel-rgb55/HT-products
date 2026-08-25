
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          HT
          <span className="text-blue-500"> Products</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link href="/" className="transition hover:text-white">
            Hem
          </Link>

          <Link href="/products" className="transition hover:text-white">
            Produkter
          </Link>

          <Link href="/about" className="transition hover:text-white">
            Om oss
          </Link>

          <Link href="/contact" className="transition hover:text-white">
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}


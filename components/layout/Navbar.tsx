export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          HT
          <span className="text-blue-500"> Products</span>
        </div>


        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a 
            href="#"
            className="transition hover:text-white"
          >
            Home
          </a>

          <a 
            href="#products"
            className="transition hover:text-white"
          >
            Products
          </a>

          <a 
            href="#about"
            className="transition hover:text-white"
          >
            About
          </a>

          <a 
            href="#contact"
            className="transition hover:text-white"
          >
            Contact
          </a>
        </div>


        {/* CTA */}
        <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
          Request Quote
        </button>

      </div>
    </nav>
  );
}
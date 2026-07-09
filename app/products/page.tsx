import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Oils",
      description: "High-quality oils.",
    },
    {
      id: 2,
      name: "Fat",
      description: "different types of fat",
    },
    {
      id: 3,
      name: "Brake fluids",
      description: "best in the market for your vehicles",
    },
    {
      id: 4,
      name: "Spolarvätska",
      description: "Manufactured products sourced directly from trusted suppliers.",
    },
  ];

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

      {/* Page Content */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-5xl font-bold text-white">
          Our <span className="text-blue-500">Products</span>
        </h1>

        <p className="mt-4 max-w-2xl text-slate-400">
          Browse our product categories. Contact us for pricing,
          specifications, and custom sourcing.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500 hover:bg-white/10"
            >
              <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-slate-800">
                <span className="text-slate-500">Image</span>
              </div>

              <h2 className="text-2xl font-semibold text-white">
                {product.name}
              </h2>

              <p className="mt-3 text-slate-400">
                {product.description}
              </p>

              <button className="mt-6 rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700">
                Request Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
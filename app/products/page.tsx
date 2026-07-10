
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Oljor",
      description:
        "Högkvalitativa motor- och smörjoljor för personbilar, transportfordon, maskiner och industriella användningsområden.",
      image: "/images/products/oljor.png",
    },
    {
      id: 2,
      name: "Smörjfett",
      description:
        "Slitstarka smörjfetter för lager, chassin, maskindelar och andra komponenter som kräver långvarigt skydd och låg friktion.",
      image: "/images/products/smorjfett.png",
    },
    {
      id: 3,
      name: "Spolarvätska",
      description:
        "Effektiv spolarvätska för god sikt året runt. Finns i olika varianter anpassade för både sommar- och vinterförhållanden.",
      image: "/images/products/spolarvatska.png",
    },
    {
      id: 4,
      name: "Kylarvätska",
      description:
        "Högkvalitativ kylarvätska som hjälper till att skydda mot överhettning, frost och korrosion i fordonets kylsystem.",
      image: "/images/products/kylarvatska.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-5">
          <Link href="/" className="text-2xl font-bold text-white">
            HT
            <span className="text-blue-500"> Produkter</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-5xl font-bold text-white">
          Våra <span className="text-blue-500">produkter</span>
        </h1>

        <p className="mt-4 max-w-2xl text-slate-400">
          Utforska våra produktkategorier och hitta rätt produkt för ditt
          användningsområde.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-white/10"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white">
                  {product.name}
                </h2>

                <p className="mt-3 leading-relaxed text-slate-400">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}


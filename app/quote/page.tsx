import QuoteForm from "@/components/quote/QuoteForm";

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[#050816]">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Offert
        </p>

        <h1 className="mt-3 text-5xl font-bold text-white">
          Begär en <span className="text-blue-500">offert</span>
        </h1>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Lägg till de produkter du är intresserad av och skicka sedan din
          offertförfrågan till oss.
        </p>

        <div className="mt-12">
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
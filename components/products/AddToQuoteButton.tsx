"use client";

import { useState } from "react";
import { useQuoteCart } from "@/context/QuoteCartContext";

type AddToQuoteButtonProps = {
  slug: string;
  name: string;
  image: string;
  sizes: string[];
};

export default function AddToQuoteButton({
  slug,
  name,
  image,
  sizes,
}: AddToQuoteButtonProps) {
  const { addItem } = useQuoteCart();

  const [selectedSize, setSelectedSize] = useState(
    sizes[0] ?? ""
  );

  const [added, setAdded] = useState(false);

  function handleAdd() {
    if (!selectedSize) return;

    addItem({
      slug,
      name,
      image,
      size: selectedSize,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  }

  return (
    <div className="flex flex-col gap-3">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-400">
          Välj förpackningsstorlek
        </label>

        <select
          value={selectedSize}
          onChange={(event) =>
            setSelectedSize(event.target.value)
          }
          className="w-full rounded-xl border border-white/10 bg-[#0b1020] px-4 py-3 text-white outline-none transition focus:border-blue-500"
        >
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className="rounded-xl bg-blue-600 px-7 py-4 font-medium text-white transition hover:bg-blue-700"
      >
        {added
          ? "Tillagd i offert ✓"
          : "Lägg till i offert"}
      </button>
    </div>
  );
}
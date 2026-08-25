"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type QuoteItem = {
  slug: string;
  name: string;
  image: string;
  size: string;
  quantity: number;
};

type QuoteCartContextType = {
  items: QuoteItem[];
  addItem: (item: Omit<QuoteItem, "quantity">) => void;
  removeItem: (slug: string, size: string) => void;
  increaseQuantity: (slug: string, size: string) => void;
  decreaseQuantity: (slug: string, size: string) => void;
  clearCart: () => void;
  totalItems: number;
};

const QuoteCartContext = createContext<QuoteCartContextType | undefined>(
  undefined
);

export function QuoteCartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("quoteCart");

    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("quoteCart", JSON.stringify(items));
    }
  }, [items, loaded]);

  function addItem(item: Omit<QuoteItem, "quantity">) {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (currentItem) =>
          currentItem.slug === item.slug &&
          currentItem.size === item.size
      );

      if (existingItem) {
        return currentItems.map((currentItem) =>
          currentItem.slug === item.slug &&
          currentItem.size === item.size
            ? {
                ...currentItem,
                quantity: currentItem.quantity + 1,
              }
            : currentItem
        );
      }

      return [
        ...currentItems,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  }

  function removeItem(slug: string, size: string) {
    setItems((currentItems) =>
      currentItems.filter(
        (item) =>
          !(item.slug === slug && item.size === size)
      )
    );
  }

  function increaseQuantity(slug: string, size: string) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.slug === slug && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(slug: string, size: string) {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.slug === slug && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setItems([]);
  }

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <QuoteCartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </QuoteCartContext.Provider>
  );
}

export function useQuoteCart() {
  const context = useContext(QuoteCartContext);

  if (!context) {
    throw new Error(
      "useQuoteCart must be used inside QuoteCartProvider"
    );
  }

  return context;
}
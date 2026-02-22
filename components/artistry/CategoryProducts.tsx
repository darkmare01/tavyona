"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import type { Category, Product } from "@/components/artistry/artistryData";

function formatINR(value: number) {
  return `₹${value}`;
}

export default function CategoryProducts({ category }: { category: Category }) {
  const [filter, setFilter] = useState(category.filters[0] ?? "All");
  const { addItem, count } = useCart();

  const products = useMemo(() => {
    if (filter === "All") return category.products;
    return category.products.filter((p) => p.tag === filter);
  }, [category.products, filter]);

  return (
    <main className="min-h-screen px-6 pt-10 pb-28 bg-black">
      <div className="mx-auto max-w-[1400px]">
        {/* Page heading like the design: Tavyona Artistry + category */}
        <header className="mb-10">
          <h1 className="text-2xl md:text-3xl font-semibold text-white">
            Tavyona Artistry
          </h1>
        </header>

        <div className="flex flex-col gap-2">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            {category.title}
          </h2>
          <p className="text-white/65 max-w-2xl text-sm md:text-base">
            {category.subtitle}
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-3">
          {category.filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-lg border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                filter === f
                  ? "border-[#e6c200] bg-[#e6c200]/10 text-[#e6c200]"
                  : "border-white/20 bg-transparent text-white hover:border-white/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAdd={() =>
                addItem({
                  id: p.id,
                  name: p.title,
                  price: p.price,
                  image: p.image,
                })
              }
            />
          ))}
        </div>
      </div>

      {/* Floating cart button */}
      <Link
        href="/cart"
        aria-label="Open cart"
        className="fixed bottom-6 left-6 z-40 inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/70 px-4 py-3 text-white backdrop-blur transition hover:border-white/25"
      >
        <span className="text-lg">🛒</span>
        <span className="text-sm font-medium">Cart</span>
        <span className="ml-1 inline-flex min-w-6 items-center justify-center rounded-full bg-white/10 px-2 py-0.5 text-xs">
          {count}
        </span>
      </Link>
    </main>
  );
}

function ProductCard({ product, onAdd }: { product: Product; onAdd: () => void }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-white/10 bg-black/40 transition hover:-translate-y-1 hover:border-white/20 hover:shadow-xl">
      <div className="relative h-[180px] w-full overflow-hidden bg-white/5">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white/90 backdrop-blur">
          {product.tag}
        </div>
      </div>

      <div className="p-4">
        <div className="text-sm text-white/60">{product.title}</div>
        <div className="mt-2 text-lg font-semibold text-white">
          {formatINR(product.price)}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            onClick={onAdd}
            className="rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white transition hover:border-white/25"
          >
            Add to Cart
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:brightness-105"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}


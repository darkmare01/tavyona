"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "Wooden",
  "Metal",
  "Wall Decor",
  "Home Decor",
  "Gifts & Crafts",
  "Art Sculptures",
];

const categoryCards = [
  {
    id: 1,
    title: "Wooden Handicraft",
    category: "Wooden",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    href: "/artistry/wooden",
  },
  {
    id: 2,
    title: "Metal Handicraft",
    category: "Metal",
    image:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1600&q=80",
    href: "/artistry/metal",
  },
  {
    id: 3,
    title: "Wall Decor",
    category: "Wall Decor",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
    href: "/artistry/wall-decor",
  },
  {
    id: 4,
    title: "Home Decor",
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=1600&q=80",
    href: "/artistry/home-decor",
  },
  {
    id: 5,
    title: "Gifts & Crafts",
    category: "Gifts & Crafts",
    image:
      "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1600&q=80",
    href: "/artistry/gifts-crafts",
  },
  {
    id: 6,
    title: "Art Sculptures",
    category: "Art Sculptures",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1600&q=80",
    href: "/artistry/art-sculptures",
  },
];

export default function ArtistryCategories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCards = selectedCategory
    ? categoryCards.filter((card) => card.category === selectedCategory)
    : categoryCards;

  return (
    <section className="relative mx-auto max-w-[1400px] px-6 pb-24">
      {/* Category Filters */}
      <div className="mb-12 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() =>
              setSelectedCategory(
                selectedCategory === category ? null : category
              )
            }
            className={`rounded-lg border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "border-[#e6c200] bg-[#e6c200]/10 text-[#e6c200]"
                : "border-white/20 bg-transparent text-white hover:border-white/30 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCards.map((card) => (
          <Link
            key={card.id}
            href={card.href}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-[300px] w-full overflow-hidden bg-gradient-to-br from-white/5 to-black/20">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </div>

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#e6c200]">
                {card.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

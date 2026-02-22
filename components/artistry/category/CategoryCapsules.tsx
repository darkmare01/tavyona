"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CATEGORIES = [
  { label: "Wooden", slug: "wooden" },
  { label: "Metal", slug: "metal" },
  { label: "Wall Decor", slug: "wall-decor" },
  { label: "Home Decor", slug: "home-decor" },
  { label: "Gifts & Crafts", slug: "gifts-crafts" },
  { label: "Art Sculptures", slug: "art-sculptures" },
];

export default function CategoryCapsules() {
  const pathname = usePathname();
  const active = pathname?.split("/")[2];

  return (
    <div
      style={{
        background: "black",

        /* 🔥 force content below fixed header */
        paddingTop: 120,      // same or slightly bigger than header height
        position: "relative",
        zIndex: 1,            // header likely has zIndex: 50 or 100
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "24px 20px",
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        {CATEGORIES.map((c) => {
          const isActive = active === c.slug;

          return (
            <Link
              key={c.slug}
              href={`/artistry/${c.slug}`}
              style={{
                padding: "10px 16px",
                borderRadius: 999,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                color: isActive ? "black" : "white",
                background: isActive ? "#d4af37" : "rgba(255,255,255,0.08)",
                border: isActive
                  ? "1px solid #d4af37"
                  : "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {c.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
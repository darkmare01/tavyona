"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  { title: "Wooden", slug: "wooden", img: "/artistry/wooden.png" },
  { title: "Metal", slug: "metal", img: "/artistry/metal.png" },
  { title: "Wall Decor", slug: "wall-decor", img: "/artistry/wall_decor.png" },
  { title: "Home Decor", slug: "home-decor", img: "/artistry/home-decor.png" },
  { title: "Gifts & Crafts", slug: "gifts-crafts", img: "/artistry/gifts&crafts.png" },
  { title: "Art Sculptures", slug: "art-sculptures", img: "/artistry/sculptures.png" },
]

export default function ArtistryCategories() {
  return (
    <section style={{ background: "black", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 32, color: "white", marginBottom: 48 }}>
          Shop by Category
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/artistry/${cat.slug}`}
              style={{
                position: "relative",
                height: 220,
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
                color: "white",
              }}
            >
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                style={{ objectFit: "cover", filter: "brightness(1)" }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  zIndex: 2,
                }}
              >
                <div style={{ fontSize: 20, fontWeight: 600 }}>{cat.title}</div>
                <div style={{ fontSize: 13, opacity: 0.7 }}>Browse →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
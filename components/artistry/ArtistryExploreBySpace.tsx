"use client";

import Image from "next/image";
import Link from "next/link";

const spaces = [
  { title: "Living Room", slug: "living-room", img: "/artistry/spaces/living.jpg" },
  { title: "Bedroom", slug: "bedroom", img: "/artistry/spaces/bedroom.jpg" },
  { title: "Office", slug: "office", img: "/artistry/spaces/office.jpg" },
  { title: "Dining", slug: "dining", img: "/artistry/spaces/dining.jpg" },
];

export default function ArtistryExploreBySpace() {
  return (
    <section style={{ background: "black", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 32, color: "white", marginBottom: 12 }}>
          Explore by Space
        </h2>
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.6)", marginBottom: 40 }}>
          Shop artisanal decor curated for every space.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
        >
          {spaces.map((s) => (
            <Link
              key={s.slug}
              href={`/artistry/space/${s.slug}`} // we’ll wire this later
              style={{
                position: "relative",
                height: 220,
                borderRadius: 18,
                overflow: "hidden",
                textDecoration: "none",
                color: "white",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Image
                src={s.img}
                alt={s.title}
                fill
                style={{ objectFit: "cover", filter: "brightness(0.7)" }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2))",
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
                <div style={{ fontSize: 20, fontWeight: 600 }}>{s.title}</div>
                <div style={{ fontSize: 13, opacity: 0.7 }}>Browse →</div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <Link
            href="/artistry"
            style={{
              display: "inline-block",
              padding: "12px 26px",
              borderRadius: 999,
              background: "#d4af37",
              color: "black",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            View All Artistry Products
          </Link>
        </div>
      </div>
    </section>
  );
}
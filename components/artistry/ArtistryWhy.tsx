"use client";

import Link from "next/link";

const points = [
  {
    title: "Handcrafted by Artisans",
    desc: "Each piece is meticulously crafted by skilled artisans.",
  },
  {
    title: "Premium Materials",
    desc: "We use only the finest and most durable materials.",
  },
  {
    title: "Secure Packaging & Delivery",
    desc: "Safe, secure, and fast delivery to your doorstep.",
  },
  {
    title: "Custom Orders Available",
    desc: "Personalized decor to match your unique vision.",
  },
];

export default function ArtistryWhy() {
  return (
    <section style={{ background: "black", padding: "90px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: 36, color: "white", marginBottom: 12 }}>
          Why Tavyona <span style={{ color: "#d4af37" }}>Artistry</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.65)", marginBottom: 48 }}>
          Crafted with passion and care. Discover the Tavyona difference.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            marginBottom: 48,
          }}
        >
          {points.map((p) => (
            <div
              key={p.title}
              style={{
                background: "#0f0f0f",
                borderRadius: 18,
                padding: 28,
                border: "1px solid rgba(255,255,255,0.08)",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: "50%",
                  background: "rgba(212,175,55,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                  color: "#d4af37",
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                ✓
              </div>

              <div style={{ fontSize: 18, fontWeight: 600, color: "white", marginBottom: 8 }}>
                {p.title}
              </div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                {p.desc}
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/artistry"
          style={{
            display: "inline-block",
            padding: "14px 32px",
            borderRadius: 999,
            background: "#d4af37",
            color: "black",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Explore Our Artistry Collection
        </Link>
      </div>
    </section>
  );
}
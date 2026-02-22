"use client";

import Image from "next/image";
import Link from "next/link";
import { artistryProducts } from "@/data/artistryProducts"; // your dummy products file

export default function ArtistryFeatured() {
  const featured = artistryProducts.slice(0, 8); // first 8 as featured

  return (
    <section style={{ background: "black", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 32, color: "white", marginBottom: 12 }}>
          Featured Artistry Pieces
        </h2>
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.6)", marginBottom: 40 }}>
          Our most exquisite handcrafted products.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", // 4 per row
            gap: 24,
          }}
        >
          {featured.map((p) => (
            <Link
              key={p.id}
              href={`/artistry/${p.category}/${p.slug}`}
              style={{
                textDecoration: "none",
                color: "white",
                background: "#0f0f0f",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: 200 }}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  style={{ objectFit: "cover", filter: "brightness(0.9)" }}
                />
              </div>

              <div style={{ padding: 14 }}>
                <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 6 }}>
                  {p.title}
                </div>
                <div style={{ fontSize: 14, opacity: 0.7 }}>₹{p.price}</div>
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
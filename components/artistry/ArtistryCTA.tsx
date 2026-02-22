"use client";

import Link from "next/link";

export default function ArtistryCTA() {
  return (
    <section
      style={{
        position: "relative",
        background: "black",
        padding: "120px 20px",
        overflow: "hidden",
      }}
    >
      {/* Subtle gold glow background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 70% 30%, rgba(212,175,55,0.15), transparent 45%), radial-gradient(circle at 30% 70%, rgba(212,175,55,0.1), transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 600,
            color: "white",
            marginBottom: 16,
          }}
        >
          Start Your Decor Journey with{" "}
          <span style={{ color: "#d4af37" }}>Tavyona</span>
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            maxWidth: 720,
            margin: "0 auto 40px",
            fontSize: 18,
          }}
        >
          Discover exceptional artistry and transform your living spaces with our handcrafted touch.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/artistry"
            style={{
              padding: "14px 28px",
              borderRadius: 999,
              background: "#d4af37",
              color: "black",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Shop the Collection
          </Link>

          <Link
            href="/contact"
            style={{
              padding: "14px 28px",
              borderRadius: 999,
              border: "1px solid rgba(212,175,55,0.5)",
              color: "#d4af37",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Request a Custom Order
          </Link>
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";

export default function ArtistryHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "85vh",
        width: "100%",
        background: "black",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background Image */}
      <Image
        src="/artistry/hero.jpg"  // put your hero image in public/artistry/hero.jpg
        alt="Tavyona Artistry Hero"
        fill
        priority
        style={{
          objectFit: "cover",
          opacity: 0.35,
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.4), rgba(0,0,0,0.85))",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          padding: "0 24px",
          margin: "0 auto",
          color: "white",
        }}
      >
        <div style={{ letterSpacing: 4, opacity: 0.7, marginBottom: 12 }}>
          TAVYONA ARTISTRY
        </div>

        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 600,
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Handcrafted <span style={{ color: "#d4af37" }}>Artistry</span> <br />
          for Timeless Spaces
        </h1>

        <p
          style={{
            fontSize: 18,
            maxWidth: 520,
            opacity: 0.8,
            marginBottom: 28,
          }}
        >
          Decor, sculptures & gifts made by skilled artisans.
        </p>

        <Link
          href="/artistry"
          style={{
            display: "inline-block",
            padding: "14px 28px",
            borderRadius: 999,
            background: "#d4af37",
            color: "black",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Explore Collection
        </Link>
      </div>
    </section>
  );
}
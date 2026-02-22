"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.35,
          pointerEvents: "none", // 🔥 IMPORTANT
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.95))",
          zIndex: 1,
          pointerEvents: "none", // 🔥 IMPORTANT
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: 900,
          padding: "0 24px",
        }}
      >
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Tavyona Logo"
          width={180}
          height={180}
          style={{
            margin: "0 auto 28px",
            filter: "drop-shadow(0 0 12px rgba(255,255,255,0.15))",
            maxWidth: "40vw",
            height: "auto",
          }}
        />

        {/* Tagline */}
        <p
          style={{
            fontSize: 16,
            letterSpacing: 2,
            textTransform: "uppercase",
            opacity: 0.85,
            marginBottom: 12,
          }}
        >
          One brand. Three worlds.
        </p>

        <p
          style={{
            fontSize: 15,
            opacity: 0.7,
            marginBottom: 24,
          }}
        >
          Artistry • Events • Robotics
        </p>

        {/* Quote */}
        <p
          style={{
            fontSize: 18,
            fontStyle: "italic",
            opacity: 0.85,
            maxWidth: 700,
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          “Crafted by hands. Powered by technology. Designed to inspire.”
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <Link href="/artistry">
            <button className="hero-btn">Explore Artistry</button>
          </Link>
          <Link href="/events">
            <button className="hero-btn">Explore Events</button>
          </Link>
          <Link href="/Robotics">
            <button className="hero-btn">Explore Robotics</button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            marginTop: 90,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            opacity: 0.7,
            fontSize: 12,
            letterSpacing: 2,
          }}
        >
          <span>DISCOVER MORE</span>

          <div
            style={{
              position: "relative",
              width: 2,
              height: 50,
              background: "rgba(255,255,255,0.15)",
              overflow: "hidden",
              borderRadius: 2,
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: 20,
                background:
                  "linear-gradient(180deg, rgba(255,215,150,0), rgba(255,215,150,0.9))",
                animation: "scrollLine 1.8s infinite",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-btn {
          padding: 14px 22px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: transparent;
          color: white;
          font-size: 14px;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .hero-btn:hover {
          border-color: white;
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-1px);
        }

        @keyframes scrollLine {
          0% {
            top: -20px;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 50px;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}

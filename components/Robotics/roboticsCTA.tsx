"use client";

export default function RoboticsCTA() {
  return (
    <section
      style={{
        background: "black",
        padding: "100px 20px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            letterSpacing: 2,
            fontSize: 12,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 16,
          }}
        >
          READY TO BUILD?
        </div>

        <h2
          style={{
            fontSize: 40,
            fontWeight: 700,
            color: "white",
            marginBottom: 12,
            lineHeight: 1.2,
          }}
        >
          Get the right parts for your project.
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: 36,
          }}
        >
          Bulk orders • Custom kits • Project guidance
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/contact?type=quote"
            style={{
              background: "#facc15",
              color: "black",
              padding: "12px 22px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Request a Quote
          </a>

          <a
            href="/robotics/bulk-orders"
            style={{
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              padding: "12px 22px",
              borderRadius: 999,
              textDecoration: "none",
            }}
          >
            Bulk Orders
          </a>

          <a
            href="/contact?type=expert"
            style={{
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              padding: "12px 22px",
              borderRadius: 999,
              textDecoration: "none",
            }}
          >
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
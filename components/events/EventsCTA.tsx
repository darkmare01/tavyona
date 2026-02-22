"use client";

export default function EventsCTA() {
  return (
    <section
      style={{
        background: "#000",
        color: "#fff",
        padding: "140px 24px 160px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: 42,
          fontWeight: 700,
          marginBottom: 16,
        }}
      >
        Ready to Plan Your Event?
      </h2>

      {/* glowing middle line */}
      <div
        style={{
          width: 260,
          height: 2,
          margin: "18px auto 22px",
          background:
            "linear-gradient(90deg, transparent, rgba(245,197,24,0.9), transparent)",
          boxShadow: "0 0 12px rgba(245,197,24,0.8)",
        }}
      />

      <p style={{ color: "#bdbdbd", maxWidth: 520, margin: "0 auto 36px" }}>
        Tell us your date & idea. We’ll take it from here.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
        <a
          href="/contact"
          style={{
            display: "inline-block",
            padding: "14px 26px",
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.6)",
            color: "#fff",
            textDecoration: "none",
            transition: "all .2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(245,197,24,0.9)";
            e.currentTarget.style.boxShadow =
              "0 0 18px rgba(245,197,24,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Get a Quote
        </a>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            padding: "14px 26px",
            borderRadius: 10,
            border: "1px solid rgba(245,197,24,0.9)",
            color: "#fff",
            textDecoration: "none",
            transition: "all .2s ease",
            boxShadow: "0 0 12px rgba(245,197,24,0.25)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 22px rgba(245,197,24,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 12px rgba(245,197,24,0.25)";
          }}
        >
          Talk to Us
        </a>
      </div>
    </section>
  );
}
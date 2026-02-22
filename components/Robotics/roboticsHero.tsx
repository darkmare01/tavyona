"use client";

export default function RoboticsHero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 900 }}>
        <div
          style={{
            letterSpacing: 2,
            fontSize: 52,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 16,
          }}
        >
          TAVYONA ROBOTICS
        </div>

        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          Build Robots. Fly Drones. Create Smarter.
        </h1>

        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.7)",
            marginBottom: 40,
          }}
        >
          Motors • Servos • ESCs • FPV • Controllers • DIY Kits
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/robotics/products"
            style={{
              padding: "12px 22px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor =
                "rgba(255,255,255,0.3)";
            }}
          >
            Explore Products
          </a>

          <a
            href="/robotics/categories"
            style={{
              padding: "12px 22px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.3)",
              color: "white",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor =
                "rgba(255,255,255,0.3)";
            }}
          >
            Browse Categories
          </a>
        </div>
      </div>
    </section>
  );
}
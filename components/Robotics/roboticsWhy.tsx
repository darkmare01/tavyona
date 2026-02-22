"use client";

export default function RoboticsWhy() {
  return (
    <section
      style={{
        background: "black",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* LEFT CONTENT */}
        <div>
          <div
            style={{
              letterSpacing: 2,
              fontSize: 12,
              color: "rgba(255,255,255,0.6)",
              marginBottom: 16,
            }}
          >
            WHY TAVYONA ROBOTICS
          </div>

          <h2
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: "white",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Built for builders. <br />
            Trusted by creators.
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              marginBottom: 28,
              maxWidth: 520,
            }}
          >
            Premium components • Expert support • Seamless experience
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 36px 0",
              display: "grid",
              gap: 12,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            <li>• Tested & curated parts</li>
            <li>• Warranty & easy replacements</li>
            <li>• Fast shipping with tracking</li>
            <li>• Expert advice from builders</li>
          </ul>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="/robotics/products"
              style={{
                background: "#facc15",
                color: "black",
                padding: "12px 22px",
                borderRadius: 999,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Start Building
            </a>

            <a
              href="/robotics/products"
              style={{
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
                padding: "12px 22px",
                borderRadius: 999,
                textDecoration: "none",
              }}
            >
              Explore Products
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL - VIDEO */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 360,
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          <video
            src="/robotics/Drone.mp4"   // <-- change to "/robotics/Drone.mp4" if you kept it there
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter: "brightness(0.95) contrast(1.05)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
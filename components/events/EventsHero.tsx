export default function EventsHero() {
  return (
    <section
      style={{
        marginTop: 96, // space for fixed header
        minHeight: "85vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 20px",
        color: "#fff",
        overflow: "hidden",
        background:
          "radial-gradient(1200px 600px at 50% 40%, rgba(255,255,255,0.04), rgba(0,0,0,0.95))",
      }}
    >
      {/* Blurred color dots (bokeh) */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <span
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(255, 200, 60, 0.35)",
            filter: "blur(120px)",
            left: "-80px",
            bottom: "-120px",
          }}
        />
        <span
          style={{
            position: "absolute",
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "rgba(80, 160, 255, 0.35)",
            filter: "blur(120px)",
            right: "-120px",
            bottom: "10%",
          }}
        />
        <span
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255, 80, 80, 0.35)",
            filter: "blur(120px)",
            right: "10%",
            top: "10%",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontSize: 52,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 10,
          }}
        >
          Tavyona Events
        </h1>

        <p style={{ fontSize: 22, color: "#eaeaea", marginBottom: 16 }}>
          Premium Events. Perfectly Executed.
        </p>

        <p style={{ color: "#cfcfcf", marginBottom: 28 }}>
          Weddings • Corporate Events • Brand Launches • Drone Shows
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
          <button
            style={{
              background: "#f5c518",
              color: "#000",
              padding: "14px 26px",
              borderRadius: 12,
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(245,197,24,0.35)",
            }}
          >
            Book Event
          </button>
          <button
            style={{
              background: "rgba(255,255,255,0.06)",
              color: "#fff",
              padding: "14px 26px",
              borderRadius: 12,
              fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(6px)",
              cursor: "pointer",
            }}
          >
            View Our Work
          </button>
        </div>

        <p style={{ marginTop: 18, fontSize: 13, color: "#9a9a9a" }}>
          Trusted by 50+ clients
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          color: "#bdbdbd",
          fontSize: 12,
          letterSpacing: "0.1em",
          zIndex: 2,
        }}
      >
        <span>SCROLL</span>
        <span
          style={{
            width: 22,
            height: 36,
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.4)",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: "50%",
              top: 6,
              transform: "translateX(-50%)",
              width: 4,
              height: 6,
              borderRadius: 4,
              background: "#fff",
              animation: "wheel 1.4s infinite ease-in-out",
            }}
          />
        </span>
      </div>

      {/* tiny keyframes */}
      <style>{`
        @keyframes wheel {
          0% { opacity: 0; transform: translate(-50%, 0); }
          30% { opacity: 1; }
          100% { opacity: 0; transform: translate(-50%, 10px); }
        }
      `}</style>
    </section>
  );
}
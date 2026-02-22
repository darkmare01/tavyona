"use client";

import { useState } from "react";

const STEPS = [
  { id: 1, title: "Tell Us Your Vision", desc: "Share your idea, date and goals. We listen first." },
  { id: 2, title: "We Design Your Event", desc: "We craft the concept, theme and experience." },
  { id: 3, title: "Planning & Coordination", desc: "Vendors, logistics, timelines — handled." },
  { id: 4, title: "Execution Day", desc: "On-ground execution with full coordination." },
  { id: 5, title: "Memories Delivered", desc: "Post-event wrap, media & memories delivered." },
];

export default function EventsProcess() {
  const [active, setActive] = useState(1);

  return (
    <section style={{ background: "#000", color: "#fff", padding: "120px 24px" }}>
      <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 700 }}>
        How It Works
      </h2>
      <p style={{ textAlign: "center", color: "#bdbdbd", marginTop: 8 }}>
        A simple, premium journey from idea to execution.
      </p>

      <div
        style={{
          maxWidth: 1100,
          margin: "60px auto 0",
          position: "relative",
          padding: "40px 20px",
        }}
      >
        {/* Gold path */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "50%",
            height: 2,
            background:
              "linear-gradient(90deg, rgba(245,197,24,0.15), rgba(245,197,24,0.9), rgba(245,197,24,0.15))",
            filter: "blur(0.2px)",
          }}
        />

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 16,
            position: "relative",
          }}
        >
          {STEPS.map((s) => {
            const isActive = active === s.id;
            return (
              <div
                key={s.id}
                onMouseEnter={() => setActive(s.id)}
                onClick={() => setActive(s.id)}
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "20px 10px",
                }}
              >
                <div
                  style={{
                    width: isActive ? 56 : 44,
                    height: isActive ? 56 : 44,
                    margin: "0 auto 12px",
                    borderRadius: "50%",
                    background: "#000",
                    border: isActive
                      ? "2px solid rgba(245,197,24,0.95)"
                      : "1px solid rgba(255,255,255,0.25)",
                    boxShadow: isActive
                      ? "0 0 20px rgba(245,197,24,0.6)"
                      : "0 0 0 rgba(0,0,0,0)",
                    transition: "all .25s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  {String(s.id).padStart(2, "0")}
                </div>

                <div
                  style={{
                    fontSize: 14,
                    letterSpacing: 0.3,
                    opacity: isActive ? 1 : 0.7,
                  }}
                >
                  {s.title}
                </div>

                {isActive && (
                  <div
                    style={{
                      marginTop: 10,
                      fontSize: 13,
                      color: "#bdbdbd",
                      maxWidth: 180,
                      marginInline: "auto",
                    }}
                  >
                    {s.desc}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
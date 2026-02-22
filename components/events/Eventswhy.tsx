"use client";

import { useState } from "react";

const REASONS = [
  {
    key: "stress",
    title: "Zero-Stress Execution",
    desc: "One dedicated team manages your entire event end-to-end. No juggling multiple vendors.",
    more: "We take single-point responsibility so you enjoy your event without chasing people.",
  },
  {
    key: "planning",
    title: "Clear Planning & Budget Control",
    desc: "Precise timelines and transparent pricing. No surprises.",
    more: "You get clear milestones, approvals and cost visibility before execution.",
  },
  {
    key: "track",
    title: "Proven Track Record",
    desc: "Successfully executed private, corporate & public events.",
    more: "From intimate gatherings to large-scale shows — we’ve delivered consistently.",
  },
  {
    key: "tech",
    title: "Modern Event Tech",
    desc: "Drone shows, advanced AV services and creative special effects.",
    more: "We bring modern production tools to elevate the experience beyond basics.",
  },
];

export default function EventsWhy() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      style={{
        background: "#000",
        color: "#fff",
        padding: "120px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 40,
        }}
      >
        {/* Left */}
        <div>
          <h2
            style={{
              fontSize: 40,
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 12,
            }}
          >
            Why Clients Choose Tavyona
          </h2>

          <p style={{ color: "#bdbdbd", maxWidth: 420 }}>
            Calm planning. Confident execution. We remove chaos from your event
            journey.
          </p>

          {/* subtle gold line */}
          <div
            style={{
              marginTop: 24,
              width: 80,
              height: 2,
              background: "linear-gradient(90deg, #f5c518, transparent)",
            }}
          />
        </div>

        {/* Right list */}
        <div style={{ display: "grid", gap: 18 }}>
          {REASONS.map((r) => {
            const isActive = active === r.key;
            return (
              <div
                key={r.key}
                onMouseEnter={() => setActive(r.key)}
                onMouseLeave={() => setActive(null)}
                style={{
                  padding: "18px 20px",
                  borderRadius: 12,
                  border: isActive
                    ? "1px solid rgba(245,197,24,0.9)"
                    : "1px solid rgba(255,255,255,0.18)",
                  background: isActive
                    ? "rgba(245,197,24,0.06)"
                    : "rgba(255,255,255,0.02)",
                  transition: "all .2s ease",
                }}
              >
                <h3 style={{ fontSize: 20, marginBottom: 6 }}>{r.title}</h3>
                <p style={{ color: "#d0d0d0", marginBottom: isActive ? 6 : 0 }}>
                  {r.desc}
                </p>
                {isActive && (
                  <p style={{ color: "#bdbdbd", fontSize: 14 }}>{r.more}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
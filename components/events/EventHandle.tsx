"use client";

import { useState } from "react";

const DEFAULT_SPOTLIGHT = {
  key: "tavyona",
  title: "Tavyona Events",
  desc: "Everything We Handle for Your Event",
  bullets: [
    "End-to-end event management",
    "One team, all services covered",
    "Premium execution, zero hassle",
  ],
  icon: "✨",
  image:
    "https://images.unsplash.com/photo-1515165562835-c4c1b0c7b1c8?q=80&w=1600&auto=format&fit=crop", // stage lights / crowd
};

const ITEMS = [
  {
    key: "food",
    title: "Food & Beverage",
    desc: "Catering, live counters, drinks, menu planning",
    bullets: ["Custom menus", "Live counters", "Bar & beverages"],
    icon: "🍽️",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20250610/pngtree-delicious-buffet-food-catering-event-party-restaurant-image_17413450.jpg",
  },
  {
    key: "decor",
    title: "Theme, Decor & Setup",
    desc: "Stage, lighting design, floral decor, props",
    bullets: ["Stage & lighting", "Floral decor", "Props & theming"],
    icon: "🎨",
    image:
      "https://img.staticmb.com/mbcontent/images/crop/uploads/2023/8/Heaven_4_0_1200.jpg.webp",
  },
  {
    key: "av",
    title: "Sound, Light & Visuals",
    desc: "DJ, speakers, mic setup, LED screens",
    bullets: ["DJ & speakers", "Mic setup", "LED screens & visuals"],
    icon: "🎤",
    image:
      "https://lh3.googleusercontent.com/proxy/bQP5i_CftRSz_BZb0Iwe4ZvU6vlcbYP7CSWLFdyzu_kw_gbdROt4fTYwRXgkKcfL0Adl9BQcliLt_ABWe71ZtkYs857lEF-1yBzrTJbDwPbshxtPP7wv5j3w9g",
  },
  {
    key: "people",
    title: "People & Logistics",
    desc: "Staffing, anchors, artists, vendor coordination",
    bullets: ["Staffing", "Anchors & artists", "Vendor coordination"],
    icon: "👥",
    image:
      "https://blog.inevent.com/wp-content/uploads/2023/12/Logistics-in-Events-Leveraging-Tech-for-Seamless-Planning-and-Execution.webp",
  },
  {
    key: "venue",
    title: "Venue & Permissions",
    desc: "Venue sourcing, layout planning, permissions",
    bullets: ["Venue sourcing", "Layout planning", "Permissions"],
    icon: "📍",
    image:
      "https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    key: "fx",
    title: "Special Effects & Tech",
    desc: "Drone shots, flower drops, controlled fire effects",
    bullets: ["Drone shots", "Flower drops", "Safe pyrotechnics"],
    icon: "🚁",
    image:
      "https://static.wixstatic.com/media/76e081_90dd7e48c342411ea39ff68b5f60b4e7~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_85/76e081_90dd7e48c342411ea39ff68b5f60b4e7~mv2.jpg",
  },
];

export default function EventsHandle() {
  const [active, setActive] = useState(DEFAULT_SPOTLIGHT);

  return (
    <section style={{ background: "#000", color: "#fff", padding: "100px 24px" }}>
      <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 700 }}>
        Everything We Handle For Your Event
      </h2>
      <p style={{ textAlign: "center", color: "#bdbdbd", margin: "10px 0 48px" }}>
        Comprehensive event management, covering every detail.
      </p>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: 24,
        }}
      >
        {/* Left strip */}
        <div style={{ display: "grid", gap: 10 }}>
          {ITEMS.map((it) => {
            const isActive = active.key === it.key;
            return (
              <div
                key={it.key}
                onMouseEnter={() => setActive(it)}
                onClick={() => setActive(it)}
                style={{
                  padding: "16px 18px",
                  borderRadius: 12,
                  border: isActive
                    ? "1px solid rgba(245,197,24,0.9)"
                    : "1px solid rgba(255,255,255,0.2)",
                  background: isActive
                    ? "rgba(245,197,24,0.06)"
                    : "rgba(255,255,255,0.02)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  transition: "all .2s ease",
                }}
              >
                <span style={{ fontSize: 22 }}>{it.icon}</span>
                <div>
                  <div style={{ fontWeight: 600 }}>{it.title}</div>
                  <div style={{ color: "#bdbdbd", fontSize: 13 }}>{it.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right spotlight */}
        <div
          key={active.key}
          style={{
            position: "relative",
            minHeight: 380,
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.2)",
            backgroundImage: `url(${active.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: "fadeIn .35s ease",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.85))",
            }}
          />
          <div style={{ position: "absolute", bottom: 0, padding: 24 }}>
            <h3 style={{ fontSize: 28, marginBottom: 8 }}>
              {active.icon} {active.title}
            </h3>
            <p style={{ color: "#d0d0d0", marginBottom: 10 }}>{active.desc}</p>
            <ul style={{ color: "#cfcfcf", paddingLeft: 18 }}>
              {active.bullets.map((b) => (
                <li key={b} style={{ marginBottom: 6 }}>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <style>{`
            @keyframes fadeIn {
              from { opacity: 0.4; transform: scale(0.995); }
              to { opacity: 1; transform: scale(1); }
            }
          `}</style>
        
        </div>
      </div>
    </section>
  );
}
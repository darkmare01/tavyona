"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  { title: "FPV & Drones", slug: "fpv-drones", img: "/robotics/categories/fpv.jpg" },
  { title: "RC Planes", slug: "rc-planes", img: "/robotics/categories/rc-plane.jpg" },
  { title: "Motors & Servos", slug: "motors-servos", img: "/robotics/categories/motors-servos.jpg" },
  { title: "Controllers & ESC", slug: "controllers-esc", img: "/robotics/categories/controller-esc.jpg" },
  { title: "Cameras & FPV Gear", slug: "cameras-fpv-gear", img: "/robotics/categories/cameras-fpv.jpg" },

  // Only include categories that exist in roboticsProducts.ts
  { title: "Boards & Sensors", slug: "boards-sensors", img: "/robotics/categories/boards-sensors.jpg" },
  { title: "Frames & Mechanics", slug: "frames-mechanics", img: "/robotics/categories/frames.jpg" },
  { title: "Wires & Connectors", slug: "wires-connectors", img: "/robotics/categories/wires-tools.jpg" },
  { title: "DIY Kits & Combos", slug: "diy-kits-combos", img: "/robotics/categories/diy-kits.jpg" },
];

export default function RoboticsCategories() {
  return (
    <section style={{ background: "black", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 32, color: "white", marginBottom: 48 }}>
          Shop by Category
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 24,
          }}
        >
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/Robotics/${cat.slug}`}   // matches your folder casing
              style={{
                borderRadius: 16,
                overflow: "hidden",
                background: "#0f0f0f",
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
                color: "white",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 30px rgba(0,0,0,0.6)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              <div style={{ position: "relative", width: "100%", height: 140 }}>
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  style={{ objectFit: "contain", padding: 12 }}
                />
              </div>

              <div style={{ padding: 16 }}>
                <div style={{ fontSize: 18, fontWeight: 500 }}>{cat.title}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
                  Browse →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
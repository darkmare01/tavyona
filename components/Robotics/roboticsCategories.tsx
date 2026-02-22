"use client";

import Image from "next/image";

const categories = [
  { title: "FPV & Drones", href: "/robotics/category/fpv-drones", img: "/robotics/categories/fpv.jpg" },
  { title: "RC Planes", href: "/robotics/category/rc-planes", img: "/robotics/categories/rc-plane.jpg" },
  { title: "Motors & Servos", href: "/robotics/category/motors-servos", img: "/robotics/categories/motors-servos.jpg" },
  { title: "Controllers & ESC", href: "/robotics/category/controllers-esc", img: "/robotics/categories/controller-esc.jpg" },
  { title: "Cameras & FPV Gear", href: "/robotics/category/cameras-fpv", img: "/robotics/categories/cameras-fpv.jpg" },

  { title: "Batteries & Power", href: "/robotics/category/batteries-power", img: "/robotics/categories/batteries.jpg" },
  { title: "Boards & Sensors", href: "/robotics/category/boards-sensors", img: "/robotics/categories/boards-sensors.jpg" },
  { title: "Frames & Mechanics", href: "/robotics/category/frames-mechanics", img: "/robotics/categories/frames.jpg" },
  { title: "Wires, Connectors & Tools", href: "/robotics/category/wires-tools", img: "/robotics/categories/wires-tools.jpg" },
  { title: "DIY Kits & Combos", href: "/robotics/category/diy-kits", img: "/robotics/categories/diy-kits.jpg" },
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
            <a
              key={cat.title}
              href={cat.href}
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
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
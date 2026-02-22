"use client";

import Image from "next/image";

const featuredProducts = [
  {
    id: "fpv-drone",
    title: "FPV Racing Drone",
    price: "₹12,999",
    img: "/robotics/featured/fpv-drone.jpg",
  },
  {
    id: "motor-servo",
    title: "Brushless Motor + Servo",
    price: "₹1,299",
    img: "/robotics/featured/motor-servo.jpg",
  },
  {
    id: "digital-servo",
    title: "Digital Metal Gear Servo",
    price: "₹699",
    img: "/robotics/featured/digital-servo.jpg",
  },
  {
    id: "fc-esc",
    title: "F4 Flight Controller + 4-in-1 ESC",
    price: "₹4,999",
    img: "/robotics/featured/fc-esc.jpg",
  },
  {
    id: "frame-kit",
    title: "Drone Frame Kit",
    price: "₹1,599",
    img: "/robotics/featured/frame-kit.jpg",
  },
  {
    id: "tools-kit",
    title: "Wires, Connectors & Tools Kit",
    price: "₹1,599",
    img: "/robotics/featured/tools-kit.jpg",
  },
  {
    id: "power-kit",
    title: "Power Distribution Board + BEC",
    price: "₹2,499",
    img: "/robotics/featured/power-kit.jpg",
  },
  {
    id: "fpv-camera-vtx",
    title: "FPV Camera + 5.8GHz VTX",
    price: "₹2,499",
    img: "/robotics/featured/fpv-camera-vtx.jpg",
  },
];

export default function RoboticsFeatured() {
  return (
    <section style={{ background: "black", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 32,
            color: "white",
            marginBottom: 48,
          }}
        >
          Featured Products
        </h2>

        <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
          {featuredProducts.map((p) => (
            <div
              key={p.id}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                background: "#0f0f0f",
                border: "1px solid rgba(255,255,255,0.08)",
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
              <div style={{ position: "relative", width: "100%", height: 160 }}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  style={{ objectFit: "contain", padding: 12 }}
                />
              </div>

              <div style={{ padding: 16 }}>
                <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 6 }}>
                  {p.title}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: 12,
                  }}
                >
                  {p.price}
                </div>

                <a
                  href={`/robotics/product/${p.id}`}
                  style={{
                    display: "inline-block",
                    padding: "8px 14px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.25)",
                    color: "white",
                    textDecoration: "none",
                    fontSize: 13,
                  }}
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a
            href="/robotics/products"
            style={{
              display: "inline-block",
              background: "#facc15",
              color: "black",
              padding: "12px 24px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
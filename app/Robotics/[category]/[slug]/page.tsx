import { roboticsProducts } from "@/data/roboticsProducts";
import Image from "next/image";
import Link from "next/link";

export default function RoboticsProductPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = params;

  const product = roboticsProducts.find(
    (p) => p.category === category && p.slug === slug
  );

  if (!product) {
    return (
      <main style={{ padding: 40, color: "white" }}>
        <p>Product not found.</p>
        <Link href={`/robotics/${category}`} style={{ color: "#d4af37" }}>
          ← Back to category
        </Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "40px 20px", maxWidth: 1200, margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 360,
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "#0f0f0f",
          }}
        >
          <Image src={product.image} alt={product.title} fill />
        </div>

        <div style={{ color: "white" }}>
          <h1 style={{ fontSize: 28, marginBottom: 12 }}>{product.title}</h1>
          <p style={{ color: "#d4af37", fontSize: 20, marginBottom: 16 }}>
            ₹{product.price}
          </p>

          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: 24 }}>
            High-quality robotics component suitable for drones, RC planes and
            DIY robotics projects.
          </p>

          <button
            style={{
              padding: "12px 22px",
              borderRadius: 999,
              background: "#d4af37",
              color: "black",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
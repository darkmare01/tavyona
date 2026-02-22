import { artistryProducts } from "@/data/artistryProducts";
import Image from "next/image";
import Link from "next/link";
import CategoryCapsules from "@/components/artistry/category/CategoryCapsules";

export default async function ArtistryProductPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  const product = artistryProducts.find(
    (p) => p.category === category && p.slug === slug
  );

  if (!product) {
    return (
      <main style={{ padding: 40, color: "white" }}>
        <CategoryCapsules />
        <p>Product not found.</p>
        <Link href={`/artistry/${category}`} style={{ color: "#d4af37" }}>
          ← Back to category
        </Link>
      </main>
    );
  }

  return (
    <main>
      <CategoryCapsules />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
        }}
      >
        {/* Left: Image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 420,
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#0f0f0f",
          }}
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right: Info */}
        <div style={{ color: "white" }}>
          <h1 style={{ fontSize: 32, fontWeight: 600, marginBottom: 12 }}>
            {product.title}
          </h1>

          <p style={{ fontSize: 22, color: "#d4af37", marginBottom: 20 }}>
            ₹{product.price}
          </p>

          <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: 28 }}>
            Handcrafted premium artistry piece designed to elevate your space.
            Each product is carefully made by skilled artisans with attention to detail.
          </p>

          <div style={{ display: "flex", gap: 16 }}>
            <button
              style={{
                padding: "14px 26px",
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

            <Link
              href={`/artistry/${category}`}
              style={{
                padding: "14px 26px",
                borderRadius: 999,
                border: "1px solid rgba(212,175,55,0.6)",
                color: "#d4af37",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Back to Category
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
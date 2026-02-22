import CategoryCapsules from "@/components/artistry/category/CategoryCapsules";
import { artistryProducts } from "@/data/artistryProducts";
import Link from "next/link";
import Image from "next/image";

export default async function ArtistryCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const products = artistryProducts.filter(
    (p) => p.category === category
  );

  return (
    <main>
      <CategoryCapsules />

      <div style={{ padding: "40px 20px", maxWidth: 1200, margin: "0 auto" }}>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "white",
            marginBottom: 24,
            textTransform: "capitalize",
          }}
        >
          {category.replaceAll("-", " ")}
        </h1>

        {products.length === 0 ? (
          <p style={{ color: "rgba(255,255,255,0.7)" }}>
            No products found in this category.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {products.map((p) => (
              <Link
                key={p.id}
                href={`/artistry/${p.category}/${p.slug}`}
                style={{
                  textDecoration: "none",
                  color: "white",
                  background: "#0f0f0f",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: 200 }}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div style={{ padding: 14 }}>
                  <div style={{ fontSize: 16, fontWeight: 500 }}>{p.title}</div>
                  <div style={{ fontSize: 14, opacity: 0.7 }}>₹{p.price}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart/CartProvider";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import CategoryCapsules from "@/components/artistry/category/CategoryCapsules";

export default function ArtistryCategoryPageClient({ products, category }: { products: any[]; category: string }) {
  const { addItem } = useCart();
  const router = useRouter();
  const handleAddToCart = useCallback((p: any) => {
    addItem({ id: p.id, name: p.title, price: p.price, image: p.image });
  }, [addItem]);
  const handleBuyNow = useCallback((p: any) => {
    addItem({ id: p.id, name: p.title, price: p.price, image: p.image });
    router.push("/cart");
  }, [addItem, router]);

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
          {(category || "").replaceAll("-", " ")}
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
              <div
                key={p.id}
                style={{
                  background: "#0f0f0f",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 340,
                }}
              >
                <Link
                  href={`/artistry/${p.category}/${p.slug}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div style={{ position: "relative", width: "100%", height: 200 }}>
                    <Image
                      src={p.image ? p.image : "/artistry/default.jpg"}
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
                <div style={{ padding: "14px 14px 18px 14px", marginTop: "auto" }}>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button
                      style={{
                        flex: 1,
                        background: "white",
                        color: "black",
                        border: "none",
                        borderRadius: 999,
                        padding: "8px 0",
                        fontWeight: 600,
                        fontSize: 14,
                        cursor: "pointer",
                      }}
                      onClick={() => handleAddToCart(p)}
                    >
                      Add To Cart
                    </button>
                    <button
                      style={{
                        flex: 1,
                        background: "white",
                        color: "black",
                        border: "none",
                        borderRadius: 999,
                        padding: "8px 0",
                        fontWeight: 600,
                        fontSize: 14,
                        cursor: "pointer",
                      }}
                      onClick={() => handleBuyNow(p)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

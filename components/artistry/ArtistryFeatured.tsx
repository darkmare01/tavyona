"use client";

import Image from "next/image";
import Link from "next/link";

import { useCart } from "@/components/cart/CartProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


// Accepts an optional category prop for filtering
interface ArtistryFeaturedProps {
  category?: string;
}

export default function ArtistryFeatured({ category }: ArtistryFeaturedProps) {
  const [products, setProducts] = useState<any[]>([]);
  const { addItem } = useCart();
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      try {
        let query = supabase
          .from("products")
          .select("id, name, price, description, image_url, created_at, category")
          .order("created_at", { ascending: false })
          .limit(8);
        if (category) {
          query = query.eq("category", category);
        }
        const { data, error } = await query;
        if (error) {
          console.error("Supabase fetch error:", error);
        }
        if (data) {
          setProducts(data);
        }
      } catch (err) {
        console.error("Unexpected error fetching products:", err);
      }
    }
    fetchProducts();
  }, [category]);

  return (
    <section style={{ background: "black", padding: "80px 20px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 32, color: "white", marginBottom: 12 }}>
          Featured Artistry Pieces
        </h2>
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.6)", marginBottom: 40 }}>
          Our most exquisite handcrafted products.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            minHeight: 100,
          }}
        >
          {products.length === 0 ? (
            <div style={{ gridColumn: "1 / -1", textAlign: "center", color: "white", fontSize: 18, padding: 40 }}>
              No products found. Please add products to your database.
            </div>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
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
                  href={"/artistry/featured/" + product.id}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <div style={{ position: "relative", width: "100%", height: 200 }}>
                    <Image
                      src={
                        product.image_url?.startsWith("http")
                          ? product.image_url
                          : product.image_url || "/artistry/default.jpg"
                      }
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover", filter: "brightness(0.9)" }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/artistry/default.jpg";
                      }}
                    />
                  </div>
                  <div style={{ padding: 14 }}>
                    <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 6 }}>
                      {product.name}
                    </div>
                    <div style={{ fontSize: 14, opacity: 0.7 }}>₹{product.price}</div>
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
                      onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image_url })}
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
                      onClick={() => {
                        addItem({ id: product.id, name: product.name, price: product.price, image: product.image_url });
                        router.push("/cart");
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <Link
            href="/artistry"
            style={{
              display: "inline-block",
              padding: "12px 26px",
              borderRadius: 999,
              background: "#d4af37",
              color: "black",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            View All Artistry Products
          </Link>
        </div>
      </div>
    </section>
  );
}
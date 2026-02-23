import CategoryCapsules from "@/components/artistry/category/CategoryCapsules";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import ArtistryCategoryPageClient from "@/components/artistry/ArtistryCategoryPageClient";


export default async function ArtistryCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  // Fetch products from Supabase where category matches the slug
  const { data: products, error } = await supabase
    .from("products")
    .select("id, name, price, description, image_url, created_at, category")
    .eq("category", category)
    .order("created_at", { ascending: false });

  // Optionally handle error (show message or fallback)
  return (
    <ArtistryCategoryPageClient
      products={products || []}
      category={category}
    />
  );
}
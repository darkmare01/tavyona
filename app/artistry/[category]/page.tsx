import { notFound } from "next/navigation";
import CategoryProducts from "@/components/artistry/CategoryProducts";
import {
  ARTISTRY_CATEGORIES,
  getArtistryCategory,
} from "@/components/artistry/artistryData";

export default function ArtistryCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = getArtistryCategory(params.category);

  // Handle invalid categories
  if (!category) {
    return notFound(); // Show a 404 page if the category is invalid
  }

  return <CategoryProducts category={category} />;
}


import CategoryProducts from "@/components/artistry/CategoryProducts";
import { getArtistryCategory } from "@/components/artistry/artistryData";

export default function GiftsCraftsArtistryPage() {
  const category = getArtistryCategory("gifts-crafts");
  if (!category) return null;
  return <CategoryProducts category={category} />;
}


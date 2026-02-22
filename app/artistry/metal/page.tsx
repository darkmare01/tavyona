import CategoryProducts from "@/components/artistry/CategoryProducts";
import { getArtistryCategory } from "@/components/artistry/artistryData";

export default function MetalArtistryPage() {
  const category = getArtistryCategory("metal");
  if (!category) return null;
  return <CategoryProducts category={category} />;
}


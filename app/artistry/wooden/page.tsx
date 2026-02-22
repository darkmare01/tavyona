import CategoryProducts from "@/components/artistry/CategoryProducts";
import { getArtistryCategory } from "@/components/artistry/artistryData";

export default function WoodenArtistryPage() {
  const category = getArtistryCategory("wooden");
  if (!category) return null;
  return <CategoryProducts category={category} />;
}


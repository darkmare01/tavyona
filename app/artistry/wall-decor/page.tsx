import CategoryProducts from "@/components/artistry/CategoryProducts";
import { getArtistryCategory } from "@/components/artistry/artistryData";

export default function WallDecorArtistryPage() {
  const category = getArtistryCategory("wall-decor");
  if (!category) return null;
  return <CategoryProducts category={category} />;
}


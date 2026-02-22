import CategoryProducts from "@/components/artistry/CategoryProducts";
import { getArtistryCategory } from "@/components/artistry/artistryData";

export default function HomeDecorArtistryPage() {
  const category = getArtistryCategory("home-decor");
  if (!category) return null;
  return <CategoryProducts category={category} />;
}


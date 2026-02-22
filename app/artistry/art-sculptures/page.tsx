import CategoryProducts from "@/components/artistry/CategoryProducts";
import { getArtistryCategory } from "@/components/artistry/artistryData";

export default function ArtSculpturesArtistryPage() {
  const category = getArtistryCategory("art-sculptures");
  if (!category) return null;
  return <CategoryProducts category={category} />;
}


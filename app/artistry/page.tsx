import ArtistryHero from "@/components/artistry/ArtistryHero";
import ArtistryCategories from "@/components/artistry/ArtistryCategories";
import ArtistryFeatured from "@/components/artistry/ArtistryFeatured";
import ArtistryExploreBySpace from "@/components/artistry/ArtistryExploreBySpace";
import ArtistryWhy from "@/components/artistry/ArtistryWhy";
import ArtistryCTA from "@/components/artistry/ArtistryCTA";

export default function ArtistryPage() {
  return (
    <main>
      <ArtistryHero />
      <ArtistryCategories />
      <ArtistryFeatured />
      <ArtistryExploreBySpace />
      <ArtistryWhy />
      <ArtistryCTA />
      </main>
  );
}

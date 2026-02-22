export type ArtistryCategorySlug =
  | "wooden"
  | "metal"
  | "wall-decor"
  | "home-decor"
  | "gifts-crafts"
  | "art-sculptures";

export type Product = {
  id: string;
  title: string;
  price: number;
  tag: string;
  image: string;
};

export type Category = {
  slug: ArtistryCategorySlug;
  title: string;
  subtitle: string;
  filters: string[];
  products: Product[];
};

export const ARTISTRY_CATEGORIES: Category[] = [
  {
    slug: "wooden",
    title: "Wooden Handicraft",
    subtitle: "Handcrafted wooden pieces for warm, timeless spaces.",
    filters: ["All", "Wall", "Tabletop", "Gifting", "Minimal"],
    products: [
      {
        id: "wood-1",
        title: "Wooden Wall Shelf",
        price: 1299,
        tag: "Wall",
        image:
          "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "wood-2",
        title: "Carved Wooden Bowl",
        price: 899,
        tag: "Tabletop",
        image:
          "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "wood-3",
        title: "Rustic Photo Frame",
        price: 599,
        tag: "Gifting",
        image:
          "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "wood-4",
        title: "Minimal Desk Organizer",
        price: 749,
        tag: "Minimal",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "wood-5",
        title: "Wooden Tea Coaster Set",
        price: 499,
        tag: "Tabletop",
        image:
          "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "wood-6",
        title: "Handmade Wall Hanger",
        price: 1099,
        tag: "Wall",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  },
  {
    slug: "metal",
    title: "Metal Handicraft",
    subtitle: "Bold metallic accents and decor with a premium finish.",
    filters: ["All", "Wall", "Idols", "Decor", "Candles"],
    products: [
      {
        id: "metal-1",
        title: "Metal Wall Sun",
        price: 1799,
        tag: "Wall",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "metal-2",
        title: "Metal Buddha Idol",
        price: 2499,
        tag: "Idols",
        image:
          "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "metal-3",
        title: "Metal Peacock Decor",
        price: 1999,
        tag: "Decor",
        image:
          "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "metal-4",
        title: "Metal Candle Stand",
        price: 899,
        tag: "Candles",
        image:
          "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "metal-5",
        title: "Vintage Lantern",
        price: 1599,
        tag: "Candles",
        image:
          "https://images.unsplash.com/photo-1505691723518-36a5ac3b2b6a?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "metal-6",
        title: "Brass Table Accent",
        price: 1299,
        tag: "Decor",
        image:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  },
  {
    slug: "wall-decor",
    title: "Wall Decor",
    subtitle: "Wall art and statement pieces for every room.",
    filters: ["All", "Abstract", "Minimal", "Frames", "Sculpted"],
    products: [
      {
        id: "wall-1",
        title: "Abstract Wall Art",
        price: 1399,
        tag: "Abstract",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "wall-2",
        title: "Minimal Line Print",
        price: 799,
        tag: "Minimal",
        image:
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "wall-3",
        title: "Gallery Frame Set",
        price: 1699,
        tag: "Frames",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "wall-4",
        title: "Sculpted Wall Accent",
        price: 1899,
        tag: "Sculpted",
        image:
          "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "wall-5",
        title: "Textured Canvas",
        price: 1499,
        tag: "Abstract",
        image:
          "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  },
  {
    slug: "home-decor",
    title: "Home Decor",
    subtitle: "Curated decor essentials for modern homes.",
    filters: ["All", "Plants", "Tabletop", "Lighting", "Textile"],
    products: [
      {
        id: "home-1",
        title: "Ceramic Planter",
        price: 699,
        tag: "Plants",
        image:
          "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "home-2",
        title: "Neutral Vase Set",
        price: 1199,
        tag: "Tabletop",
        image:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "home-3",
        title: "Warm Table Lamp",
        price: 1899,
        tag: "Lighting",
        image:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "home-4",
        title: "Soft Throw Blanket",
        price: 999,
        tag: "Textile",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "home-5",
        title: "Modern Centerpiece",
        price: 1599,
        tag: "Tabletop",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  },
  {
    slug: "gifts-crafts",
    title: "Gifts & Crafts",
    subtitle: "Thoughtful gifts and handcrafted small-batch items.",
    filters: ["All", "Gifting", "Handmade", "Sets", "Festive"],
    products: [
      {
        id: "gift-1",
        title: "Gift Box Set",
        price: 1299,
        tag: "Sets",
        image:
          "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "gift-2",
        title: "Handmade Card Pack",
        price: 399,
        tag: "Handmade",
        image:
          "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "gift-3",
        title: "Festive Decor Bundle",
        price: 1499,
        tag: "Festive",
        image:
          "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "gift-4",
        title: "Handcrafted Keychain",
        price: 199,
        tag: "Gifting",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  },
  {
    slug: "art-sculptures",
    title: "Art Sculptures",
    subtitle: "Sculptures that elevate spaces with character and craft.",
    filters: ["All", "Modern", "Classic", "Mini", "Statement"],
    products: [
      {
        id: "sculpt-1",
        title: "Modern Abstract Sculpture",
        price: 2299,
        tag: "Modern",
        image:
          "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "sculpt-2",
        title: "Classic Bust Replica",
        price: 2499,
        tag: "Classic",
        image:
          "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "sculpt-3",
        title: "Mini Table Sculpture",
        price: 1299,
        tag: "Mini",
        image:
          "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=1600&q=80",
      },
      {
        id: "sculpt-4",
        title: "Statement Floor Piece",
        price: 4999,
        tag: "Statement",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
      },
    ],
  },
];

export function getArtistryCategory(slug: string) {
  return ARTISTRY_CATEGORIES.find((c) => c.slug === slug);
}


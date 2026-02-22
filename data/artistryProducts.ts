export type ArtistryProduct = {
  id: string;
  title: string;
  slug: string;
  category: string; // wooden | metal | wall-decor | home-decor | gifts-crafts | art-sculptures
  price: number;
  image: string;
};

export const artistryProducts: ArtistryProduct[] = [
  // Wooden (4)
  { id: "1", title: "Handcarved Wooden Elephant", slug: "handcarved-wooden-elephant", category: "wooden", price: 2499, image: "/artistry/products/wooden-1.jpg" },
  { id: "2", title: "Rustic Wooden Bowl Set", slug: "rustic-wooden-bowl-set", category: "wooden", price: 1799, image: "/artistry/products/wooden-2.jpg" },
  { id: "3", title: "Wooden Wall Panel Art", slug: "wooden-wall-panel-art", category: "wooden", price: 3299, image: "/artistry/products/wooden-3.jpg" },
  { id: "4", title: "Handmade Wooden Lamp", slug: "handmade-wooden-lamp", category: "wooden", price: 2899, image: "/artistry/products/wooden-4.jpg" },

  // Metal (4)
  { id: "5", title: "Metal Horse Sculpture", slug: "metal-horse-sculpture", category: "metal", price: 3999, image: "/artistry/products/metal-1.jpg" },
  { id: "6", title: "Brass Decor Plate", slug: "brass-decor-plate", category: "metal", price: 1999, image: "/artistry/products/metal-2.jpg" },
  { id: "7", title: "Iron Table Figurine", slug: "iron-table-figurine", category: "metal", price: 1499, image: "/artistry/products/metal-3.jpg" },
  { id: "8", title: "Metal Wall Hanging", slug: "metal-wall-hanging", category: "metal", price: 2799, image: "/artistry/products/metal-4.jpg" },

  // Wall Decor (4)
  { id: "9", title: "Abstract Canvas Wall Art", slug: "abstract-canvas-wall-art", category: "wall-decor", price: 2199, image: "/artistry/products/wall-1.jpg" },
  { id: "10", title: "Minimal Wall Frame Set", slug: "minimal-wall-frame-set", category: "wall-decor", price: 1599, image: "/artistry/products/wall-2.jpg" },
  { id: "11", title: "Boho Wall Hanging", slug: "boho-wall-hanging", category: "wall-decor", price: 1899, image: "/artistry/products/wall-3.jpg" },
  { id: "12", title: "Vintage Wall Clock Art", slug: "vintage-wall-clock-art", category: "wall-decor", price: 2499, image: "/artistry/products/wall-4.jpg" },

  // Home Decor (4)
  { id: "13", title: "Ceramic Vase Set", slug: "ceramic-vase-set", category: "home-decor", price: 2299, image: "/artistry/products/home-1.jpg" },
  { id: "14", title: "Decorative Table Lamp", slug: "decorative-table-lamp", category: "home-decor", price: 3199, image: "/artistry/products/home-2.jpg" },
  { id: "15", title: "Premium Cushion Covers", slug: "premium-cushion-covers", category: "home-decor", price: 1199, image: "/artistry/products/home-3.jpg" },
  { id: "16", title: "Handcrafted Centerpiece Bowl", slug: "handcrafted-centerpiece-bowl", category: "home-decor", price: 1999, image: "/artistry/products/home-4.jpg" },

  // Gifts & Crafts (2)
  { id: "17", title: "Handmade Gift Box Set", slug: "handmade-gift-box-set", category: "gifts-crafts", price: 1499, image: "/artistry/products/gift-1.jpg" },
  { id: "18", title: "Crafted Photo Frame", slug: "crafted-photo-frame", category: "gifts-crafts", price: 999, image: "/artistry/products/gift-2.jpg" },

  // Art Sculptures (2)
  { id: "19", title: "Abstract Human Sculpture", slug: "abstract-human-sculpture", category: "art-sculptures", price: 5499, image: "/artistry/products/sculpture-1.jpg" },
  { id: "20", title: "Modern Art Face Sculpture", slug: "modern-art-face-sculpture", category: "art-sculptures", price: 4999, image: "/artistry/products/sculpture-2.jpg" },
];
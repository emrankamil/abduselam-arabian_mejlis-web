interface Category {
  name: string;
  description: string;
  images: string[];
}

export const categories: Category[] = [
  {
    name: "Mejlis",
    description:
      "Experience the essence of Arabian luxury with our Majlis collections, crafted to create the perfect gathering space that exudes warmth and elegance.",
    images: [],
  },
  {
    name: "Curtains",
    description:
      "Discover our elegant curtain designs to enhance any space with style and sophistication.",
    images: [],
  },
  {
    name: "Sofas",
    description:
      "Comfort and luxury meet in our beautifully crafted sofas, perfect for any living room.",
    images: [],
  },
  {
    name: "Beds",
    description:
      "Sleep in ultimate comfort with our premium bed collections designed for relaxation and style.",
    images: [],
  },
  {
    name: "Tv Stand",
    description:
      "Experience the essence of Arabian luxury with our Majlis collections, crafted to create the perfect gathering space that exudes warmth and elegance.",
    images: [],
  },
];

export const tags: string[] = [
  "New Arrivals",
  "Best Sellers",
  "Popular",
  "Trending",
  "Featured",
];

export type { Category };

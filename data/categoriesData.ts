interface Category {
  name: string;
  description: string;
  description_am: string;
  images: string[];
}

export const categories: Category[] = [
  {
    name: "Arabian Mejlis",
    description:
      "Our Arabian majlis furniture offers cozy seating with beautiful patterns, perfect for gatherings.",
    images: [
      "/products/arabian-mejlis-01.jpg",
      "/products/arabian-mejlis-02.jpg",
      "/products/arabian-mejlis-03.jpg",
    ],
    description_am:
      "የአረቢያን መጅሊሳችን ለስብሰባዎች ተስማሚ የሆኑ ውበትን ከምቾት ጋር ያጣመሩ ምቹ መቀመጫዎችን ያቀርባሉ።",
  },
  {
    name: "Curtains",
    description:
      "Discover our elegant curtain designs to enhance any space with style and sophistication.",
    images: [
      "/products/curtain-01.jpg",
      "/products/curtain-02.jpg",
      "/products/curtain-03.jpg",
    ],
    description_am:
      "በስታይል እና በግርማ ማንኛውንም ቦታ የተሻለ የሚያረጉትን የእኛን አይነግቡ መጋረጃዎችን የራሶ ያድርጉ።",
  },
  {
    name: "Sofas",
    description:
      "Comfort and luxury meet in our beautifully crafted sofas, perfect for any living room.",
    images: [
      "/products/sofa1.jpg",
      "/products/couche-02.jpg",
      "/products/couche-03.jpg",
    ],
    description_am:
      "ምቾት እና ቅንጦት ለማንኛውም ሳሎን ተስማሚ በሆነው በሚያምር ሁኔታ በተሠሩት ሶፋዎቻችን ውስጥ ይገናኛሉ።",
  },
  {
    name: "Beds",
    description:
      "Sleep in ultimate comfort with our premium bed collections designed for relaxation and style.",
    images: [
      "/products/bed-01.jpg",
      "/products/bed-02.jpg",
      "/products/bed-03.jpg",
    ],
    description_am:
      "ለእረፍት እና ለስታይል ታስበዉ በተዘጋጁ የፕሪሚየም የአልጋ ስብስቦቻችን ወደር በሌለው ምቾት ይተኙ።",
  },
  {
    name: "Tv Stand",
    description:
      "Our TV stands are strong and stylish, holding your TV securely while adding a modern look.",
    images: [
      "/products/tv-stand-01.jpg",
      "/products/tv-stand-02.jpg",
      "/products/tv-stand-03.jpg",
    ],
    description_am:
      "የኛ የቲቪ ስታንዶች ጠንካራ እና ቄንጠኛ ናቸው፣ ቲቪዎን ደህንነቱ በተጠበቀ መልኩ ከመያዛቸውም ባለፈ፣ ለቤቶ ዘመናዊ እይታን ያላብሳሉ",
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

export interface Product {
  id: string;
  title: string;
  title_am: string;
  images: string[];
  description: string;
  description_am: string;
  long_description: string;
  long_description_am: string;
  category: string;
  features: string[]; // Array of product features
  tags: string[]; // Array of tags
  is_available: boolean;
  views: number;
  likes: number;
  color_options: {
    [color: string]: string; // Color name as key, image URL as value
  };
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

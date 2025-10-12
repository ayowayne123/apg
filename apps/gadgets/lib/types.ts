// lib/types.ts

export interface Product {
  id: number;
  title: string;
  slug: string;
  gadget_type: string;
  short_description: string;
  cover_photo: {
    id: number;
    url: string;
    alt: string | null;
    hotspot: string | null;
  };
  price: string;
  currency: string;
  discount_percentage: string;
  created_at: string;
  updated_at: string;
}

export interface ProductsResponse {
  data: Product[];
}

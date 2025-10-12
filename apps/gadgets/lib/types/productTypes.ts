// Base product entity shared by all endpoints
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

// For /api/products (paginated)
export interface PaginatedProductsResponse {
  data: Product[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}

// For /api/products/trendy and /api/products/featured (non-paginated)
export interface SimpleProductsResponse {
  data: Product[];
}

// For /api/products/:slug (single)
export interface ProductDetail {
  id: number;
  title: string;
  slug: string;
  gadget_type: string;
  short_description: string;
  detailed_description: {
    features: string;
    warranty: string;
  };
  cover_photo: {
    id: number;
    url: string;
    alt: string | null;
    hotspot: string | null;
  };
  gallery: { id: number; url: string; alt: string | null }[];
  price: string;
  currency: string;
  discount_percentage: string;
  discount_valid_until: string;
  stock_quantity: string;
  stock_availability: "in_stock" | "out_of_stock";
  general_specifications: Record<string, string>;
  phone_specifications?: Record<string, string>;
  laptop_specifications?: Record<string, string>;
  accessory_specifications?: Record<string, string>;
  rating_average: string;
  rating_count: string;
  rating_breakdown: number[];
  tags: string[];
  created_at: string;
  updated_at: string;
}

export interface ProductResponse {
  data: ProductDetail;
}

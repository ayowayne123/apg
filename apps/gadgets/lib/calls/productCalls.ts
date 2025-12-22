import { apiFetch } from "@/lib/api/api";
import {
  ProductResponse,
  SimpleProductsResponse,
  PaginatedProductsResponse,
} from "@/lib/types/productTypes";

/* -------------------------------------------------------
   Generic param builder (supports future expansion)
------------------------------------------------------- */

function buildSearchParams(
  {
    page = 1,
    search = "",
    sort = "",
    brand = [],
    color = [],
    storage = [],
    ram = [],
    size = [],
    priceFrom = "",
    priceTo = "",
    item_subtype = "",
  }: {
    page?: number;
    search?: string;
    sort?: string;
    brand?: string[];
    color?: string[];
    storage?: string[];
    ram?: string[];
    size?: string[];
    priceFrom?: string | number;
    priceTo?: string | number;
    item_subtype?: string;
  },

  extraParams: Record<string, string> = {}
) {
  const params = new URLSearchParams();

  // Pagination
  params.append("page", String(page));

  // Basic search
  if (search) params.append("search", search);
  if (sort) params.append("sort", sort);

  if (item_subtype) params.append("item_subtype", item_subtype);

  // Multi-select arrays
  if (brand.length > 0) params.append("brand", brand.join(","));
  if (color.length > 0) params.append("color", color.join(","));
  if (storage.length > 0) params.append("storage", storage.join(","));
  if (ram.length > 0) params.append("ram", ram.join(","));
  if (size.length > 0) params.append("size", size.join(","));

  // Price range
  if (priceFrom) params.append("price_from", String(priceFrom));
  if (priceTo) params.append("price_to", String(priceTo));

  // Extra category/page-specific params
  Object.entries(extraParams).forEach(([key, value]) => {
    params.append(key, value);
  });

  return params.toString();
}

/* -------------------------------------------------------
   Base - Get All Products
------------------------------------------------------- */

export async function getAllProducts(
  page = 1,
  limit = 20
): Promise<PaginatedProductsResponse> {
  return apiFetch(`/api/products?page=${page}&limit=${limit}`, {
    method: "GET",
  });
}

/* -------------------------------------------------------
   Generic Search Products
------------------------------------------------------- */

export async function getSearchedProducts(filters: {
  page?: number;
  search?: string;
  brand?: string[];
  color?: string[];
  storage?: string[];
  ram?: string[];
  size?: string[];
  priceFrom?: string | number;
  priceTo?: string | number;
  sort?: string;
}): Promise<PaginatedProductsResponse> {
  const query = buildSearchParams(filters);

  return apiFetch(`/api/products?${query}`, {
    method: "GET",
  });
}

/* -------------------------------------------------------
   Category: Smartphones
------------------------------------------------------- */

export async function getSearchedSmartPhones(filters: {
  page?: number;
  search?: string;
  brand?: string[];
  color?: string[];
  storage?: string[];
  ram?: string[];
  size?: string[];
  priceFrom?: string | number;
  priceTo?: string | number;
  item_subtype?: string;
  sort?: string;
}): Promise<PaginatedProductsResponse> {
  const query = buildSearchParams(filters, {
    gadget_type: "smartphone",
  });

  return apiFetch(`/api/products?${query}`, {
    method: "GET",
  });
}

/* -------------------------------------------------------
   Category: Accessories
------------------------------------------------------- */

export async function getSearchedAccessories(filters: {
  page?: number;
  search?: string;
  sort?: string;
  brand?: string[];
  color?: string[];
  storage?: string[];
  ram?: string[];
  size?: string[];
  priceFrom?: string | number;
  priceTo?: string | number;
  item_subtype?: string;
}): Promise<PaginatedProductsResponse> {
  const query = buildSearchParams(filters, {
    gadget_type: "accessory",
  });

  return apiFetch(`/api/products?${query}`, {
    method: "GET",
  });
}

/* -------------------------------------------------------
   Category: Laptops
------------------------------------------------------- */

export async function getSearchedComputers(filters: {
  page?: number;
  search?: string;
  brand?: string[];
  color?: string[];
  sort?: string;
  storage?: string[];
  ram?: string[];
  size?: string[];
  priceFrom?: string | number;
  priceTo?: string | number;
  item_subtype?: string;
}): Promise<PaginatedProductsResponse> {
  const query = buildSearchParams(filters, {
    gadget_type: "computer",
  });

  return apiFetch(`/api/products?${query}`, {
    method: "GET",
  });
}

/* -------------------------------------------------------
   Trendy Products
------------------------------------------------------- */

export async function getTrendyProducts(): Promise<SimpleProductsResponse> {
  return apiFetch(`/api/products/trendy?limit=8`, {
    method: "GET",
  });
}

/* -------------------------------------------------------
   Single Product
------------------------------------------------------- */

export async function getProductBySlug(slug: string): Promise<ProductResponse> {
  return apiFetch(`/api/products/${slug}`, {
    method: "GET",
  });
}

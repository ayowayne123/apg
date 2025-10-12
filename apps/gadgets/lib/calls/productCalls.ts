import { apiFetch } from "@/lib/api/api";
import {
  ProductResponse,
  SimpleProductsResponse,
  PaginatedProductsResponse,
} from "@/lib/types/productTypes";

// Get All products
export async function getAllProducts(
  page = 1,
  limit = 20
): Promise<PaginatedProductsResponse> {
  return apiFetch(`/api/products?page=${page}&limit=${limit}`, {
    method: "GET",
  });
}

// Get trendy products
export async function getTrendyProducts(): Promise<SimpleProductsResponse> {
  return apiFetch(`/api/products/trendy?limit=8`, {
    method: "GET",
  });
}

//  Get single product details
export async function getProductBySlug(slug: string): Promise<ProductResponse> {
  return apiFetch(`/api/products/${slug}`, {
    method: "GET",
  });
}

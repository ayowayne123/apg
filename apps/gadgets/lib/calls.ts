// calls.ts
import { apiFetch } from "./api/api";
import { ProductsResponse } from "./types";

export async function loginUser(email: string, password: string) {
  return apiFetch("/auth/login", {
    method: "POST",
    body: { email, password },
  });
}

export async function getProducts(): Promise<ProductsResponse> {
  return apiFetch("/api/products", {
    method: "GET",
  });
}

export async function getTrendyProducts(): Promise<ProductsResponse> {
  return apiFetch(`/api/products/trendy?limit=8`, {
    method: "GET",
  });
}

export async function addToCart(productId: string, quantity: number) {
  return apiFetch("/api/cart", {
    method: "POST",
    body: { productId, quantity },
  });
}

// Example: delete item from cart
export async function removeFromCart(cartItemId: string) {
  return apiFetch(`/cart/${cartItemId}`, {
    method: "DELETE",
  });
}

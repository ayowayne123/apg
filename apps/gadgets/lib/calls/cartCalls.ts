import { apiFetch } from "@/lib/api/api";

export async function addToServerCart(productId: string, quantity = 1) {
  return apiFetch("/api/cart/add", {
    method: "POST",
    body: JSON.stringify({ product_id: productId, quantity }),
    withCredentials: true,
  });
}

export async function getServerCart() {
  return apiFetch("/api/cart", {
    method: "GET",
    withCredentials: true,
  });
}

export async function removeServerCartItem(slug: string) {
  return apiFetch(`/api/cart/item/${slug}`, {
    method: "DELETE",
    withCredentials: true,
  });
}

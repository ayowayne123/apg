/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiFetch } from "@/lib/api/api";
import Cookies from "js-cookie";
import { getGuestSessionId } from "@/lib/cart/session";

async function getSessionId() {
  const token = Cookies.get("apg_token");
  if (token) return undefined; // logged-in user
  return getGuestSessionId(); // guest user
}

// ADD item to cart
export async function addToCart({
  productId,
  quantity = 1,
}: {
  productId: string | number;
  quantity?: number;
}) {
  const sessionId = await getSessionId();

  if (sessionId) {
    const formData = new FormData();
    formData.append("product_id", String(productId));
    formData.append("quantity", String(quantity));

    return apiFetch("/api/cart/guest/add", {
      method: "POST",
      headers: { Accept: "application/json", "X-SESSION-ID": sessionId },
      body: formData,
      withCredentials: true,
    });
  }

  // logged-in cart
  return apiFetch("/api/cart/add", {
    method: "POST",
    body: JSON.stringify({ product_id: productId, quantity }),
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
}

// GET cart
export async function getCart() {
  const sessionId = await getSessionId();
  const url = sessionId ? "/api/cart/guest" : "/api/cart";
  const headers: any = { Accept: "application/json" };
  if (sessionId) headers["X-SESSION-ID"] = sessionId;

  return apiFetch(url, { method: "GET", headers, withCredentials: true });
}

// UPDATE item quantity
export async function updateCartItem(id: string | number, quantity: number) {
  const sessionId = await getSessionId();
  const url = sessionId ? `/api/cart/guest/item/${id}` : `/api/cart/item/${id}`;
  const headers: any = { Accept: "application/json" };
  if (sessionId) headers["X-SESSION-ID"] = sessionId;
  else headers["Content-Type"] = "application/json";

  return apiFetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ quantity }),
    withCredentials: true,
  });
}

// REMOVE item from cart
export async function removeCartItem(id: string | number) {
  const sessionId = await getSessionId();
  const url = sessionId ? `/api/cart/guest/item/${id}` : `/api/cart/item/${id}`;
  const headers: any = { Accept: "application/json" };
  if (sessionId) headers["X-SESSION-ID"] = sessionId;
  else headers["Content-Type"] = "application/json";

  return apiFetch(url, { method: "DELETE", headers, withCredentials: true });
}

// CLEAR cart
export async function clearCart(title?: string) {
  const sessionId = await getSessionId();
  const url = "/api/cart/clear";
  const headers: any = { Accept: "application/json" };
  const body: any = title ? { title } : undefined;
  if (sessionId) headers["X-SESSION-ID"] = sessionId;
  else headers["Content-Type"] = "application/json";

  return apiFetch(url, {
    method: "DELETE",
    headers,
    body: body ? JSON.stringify(body) : undefined,
    withCredentials: true,
  });
}

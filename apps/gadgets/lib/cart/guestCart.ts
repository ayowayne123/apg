/* eslint-disable @typescript-eslint/no-explicit-any */
export function getGuestCart() {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("guest_cart") || "[]");
}

export function saveGuestCart(cart: any[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem("guest_cart", JSON.stringify(cart));
}

export function addGuestItem(product: any, qty = 1) {
  const cart = getGuestCart();
  const existing = cart.find((item: any) => item.id === product.id);

  if (existing) existing.quantity += qty;
  else cart.push({ ...product, quantity: qty });

  saveGuestCart(cart);
  return cart;
}

export function removeGuestItem(id: number | string) {
  const cart = getGuestCart().filter((item: any) => item.id !== id);
  saveGuestCart(cart);
  return cart;
}

export function updateGuestQuantity(id: number | string, qty: number) {
  const cart = getGuestCart();
  const item = cart.find((i: any) => i.id === id);
  if (item) item.quantity = qty;
  saveGuestCart(cart);
  return cart;
}

export function clearGuestCart() {
  saveGuestCart([]);
}

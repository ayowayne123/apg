const CART_KEY = "apg_guest_cart";

// Get guest cart
export function getGuestCart() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

// Save guest cart
export function saveGuestCart(cart: any[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Add item
export function addGuestItem(product: any, qty: number = 1) {
  const cart = getGuestCart();
  const existing = cart.find((item: any) => item.id === product.id);

  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      ...product,
      quantity: qty,
    });
  }

  saveGuestCart(cart);
  return cart;
}

// Remove item
export function removeGuestItem(productId: string) {
  const cart = getGuestCart().filter((i: any) => i.id !== productId);
  saveGuestCart(cart);
  return cart;
}

// Clear cart (after merging during login)
export function clearGuestCart() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(CART_KEY);
  }
}

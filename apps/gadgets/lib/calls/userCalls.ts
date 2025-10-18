import { apiFetch } from "@/lib/api/api";

// Get user profile
export async function getUserProfile() {
  return apiFetch("/api/user/profile", {
    method: "GET",
    withCredentials: true,
  });
}

// Update user profile
export async function updateUserProfile(data: {
  dob?: string;
  gender?: string;
  name?: string;
}) {
  return apiFetch("/api/user/profile", {
    method: "PUT",
    body: JSON.stringify(data),
    withCredentials: true,
  });
}

// Get user wishlist
export async function getWishlist() {
  return apiFetch("/api/user/wishlist", {
    method: "GET",
    withCredentials: true,
  });
}

// Add product to wishlist
export async function addToWishlist(productId: string) {
  return apiFetch("/api/user/wishlist", {
    method: "POST",
    body: JSON.stringify({ product_id: productId }),
    withCredentials: true,
  });
}

// Remove product from wishlist
export async function removeFromWishlist(productId: string) {
  return apiFetch(`/api/user/wishlist/${productId}`, {
    method: "DELETE",
    withCredentials: true,
  });
}

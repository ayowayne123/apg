import { apiFetch } from "@/lib/api/api";

// Update user profile
export async function initiateCheckout(data: {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  billing_house_number?: string;
  billing_street?: string;
  billing_city?: string;
  billing_state?: string;
  billing_landmark?: string;
  cart_id: number | string | null;
  shipping?: number | string;
  tax?: number | string;
}) {
  return apiFetch("/api/checkout/initiate", {
    method: "POST",
    body: JSON.stringify(data),
    withCredentials: true,
  });
}

export async function verifyCheckout(data: {
  reference?: string;
  order_id: number | string | null;
}) {
  return apiFetch("/api/checkout/verify", {
    method: "POST",
    body: JSON.stringify(data),
    withCredentials: true,
  });
}

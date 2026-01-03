import Cookies from "js-cookie";

export type CookieUser = {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  billing_house_number?: string;
  billing_street?: string;
  billing_city?: string;
  billing_state?: string;
  billing_landmark?: string;
};

export function getUserFromCookie(): CookieUser | null {
  try {
    const raw = Cookies.get("user");
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

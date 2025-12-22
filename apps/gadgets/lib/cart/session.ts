// lib/cart/session.ts
import { v4 as uuidv4 } from "uuid";

export function getGuestSessionId() {
  if (typeof window === "undefined") return undefined;

  let sessionId = localStorage.getItem("guest_cart_session");

  if (!sessionId) {
    sessionId = uuidv4();
    localStorage.setItem("guest_cart_session", sessionId);
  }

  return sessionId;
}

// utils/calls.js
import { apiFetch } from "./api";

// Get all homes (supports filters and queries)
export function getAllHomes(filters = {}) {
  const params = new URLSearchParams(filters);
  const endpoint = `api/homes?${params.toString()}`;
  return apiFetch(endpoint, { method: "GET" });
}

// Get a single home by slug
export function getSingleHome(slug) {
  return apiFetch(`api/homes/${slug}`, { method: "GET" });
}

// Get featured homes
export function getFeaturedHome() {
  return apiFetch(`api/homes/featured`, { method: "GET" });
}

// Search homes (can be merged with getAllHomes)
export function searchHomes(filters = {}) {
  const params = new URLSearchParams(filters);
  const endpoint = `api/homes?${params.toString()}`;
  return apiFetch(endpoint, { method: "GET" });
}

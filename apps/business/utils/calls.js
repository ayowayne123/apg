// calls.js
import { apiFetch } from "./api";

// Get all blog posts
export function getBlogPosts(params = {}) {
  const query = new URLSearchParams(params).toString();
  return apiFetch(`api/posts${query ? `?${query}` : ""}`, { method: "GET" });
}

// Get a single post by id
export function getBlogPost(id) {
  return apiFetch(`api/posts/${id}`, { method: "GET" });
}

// calls.js
import { apiFetch } from "./api";

// Get all blog posts
export function getBlogPosts() {
  return apiFetch("api/posts", { method: "GET" });
}

// Get a single post by id
export function getBlogPost(id) {
  return apiFetch(`api/posts/${id}`, { method: "GET" });
}

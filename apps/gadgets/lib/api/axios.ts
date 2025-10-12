// axios.ts
import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "";

const api = axios.create({
  baseURL: API_BASE,
  //   withCredentials: true, // send cookies (if server uses them for auth)
  headers: {
    "Content-Type": "application/json",
  },
});

// Example response interceptor (basic error handling)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message || error.message || "Something went wrong";
    return Promise.reject(new Error(message));
  }
);

export default api;

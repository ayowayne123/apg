// api.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./axios";
import Cookies from "js-cookie";

export async function apiFetch<T = any>(
  path: string,
  {
    method = "GET",
    body,
    headers = {},
    params,
    withCredentials = false,
  }: {
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    body?: any;
    headers?: Record<string, string>;
    params?: Record<string, any>;
    withCredentials?: boolean;
  } = {}
): Promise<T> {
  try {
    // ✅ Read token from cookies
    const token = Cookies.get("apg_token");

    // ✅ Merge Authorization header if token exists
    if (token) {
      headers = {
        ...headers,
        Authorization: `Bearer ${token}`,
      };
    }

    const response = await api({
      url: path,
      method,
      data: body,
      headers,
      params,
      withCredentials,
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

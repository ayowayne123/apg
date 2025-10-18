// api.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./axios";

export async function apiFetch<T = any>(
  path: string,
  {
    method = "GET",
    body,
    headers = {},
    params,
    withCredentials = false,
  }: {
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: any;
    headers?: Record<string, string>;
    params?: Record<string, any>;
    withCredentials?: boolean;
  } = {}
): Promise<T> {
  try {
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

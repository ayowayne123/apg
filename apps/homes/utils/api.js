// api.js
const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.apgbusinesshub.com/";

export async function apiFetch(
  path,
  { method = "GET", body, headers = {}, params } = {}
) {
  try {
    // Handle query params
    let url = API_BASE + path;
    if (params) {
      const query = new URLSearchParams(params).toString();
      url += `?${query}`;
    }

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "API Error");
    }

    return response.json();
  } catch (err) {
    throw new Error(err.message || "Network Error");
  }
}

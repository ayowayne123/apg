export async function apiFetchDemo(url) {
  // Replace this later with actual fetch from backend
  const res = await import("./demoListings.json");
  return res.default;
}

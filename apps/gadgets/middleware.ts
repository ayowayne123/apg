// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("apg_token")?.value;
  const url = req.nextUrl.clone();

  // Protected routes
  const protectedPaths = ["/account", "/wishlist", "/orders", "/checkout"];
  const isProtected = protectedPaths.some((path) =>
    url.pathname.startsWith(path)
  );

  if (isProtected && !token) {
    // Redirect to login with ?redirect=previous_path
    url.pathname = "/login";
    url.searchParams.set("redirect", req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/account/:path*",
    "/wishlist/:path*",
    "/orders/:path*",
    "/checkout/:path*",
  ],
};

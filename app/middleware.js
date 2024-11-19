import { NextResponse } from "next/server";
import { getSession } from "next-auth/react";

export async function middleware(req) {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;

  // Check if the route includes 'admin'
  if (pathname.includes("/admin")) {
    // Get the session
    const session = await getSession({ req });

    // If session does not exist or user.role is not 'admin', redirect to login
    if (!session || session.user.role !== "admin") {
      url.pathname = "/login"; // Redirect to login page
      return NextResponse.redirect(url);
    }
  }

  // Allow the request to proceed for other cases
  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: ["/api/:path*", "/admin/:path*"], // Apply to all API routes and any route with '/admin'
};

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";



export async function middleware(req) {
    const token = getToken()
  const { pathname,origin } = req.nextUrl;


  if (pathname.includes("/admin")) {

   
  
    if (!token ) {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/admin/:path*"],
};

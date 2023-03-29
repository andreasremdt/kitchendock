import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const PUBLIC_FILE = /\.(.*)$/;

export default async function middleware(req: NextRequest, res: NextResponse) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/signin") ||
    pathname.startsWith("/signup") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const token = req.cookies.get(process.env.COOKIE_NAME);

  if (!token) {
    req.nextUrl.pathname = "/signin";
    return NextResponse.redirect(req.nextUrl);
  }

  try {
    await jwtVerify(token.value, new TextEncoder().encode(process.env.JWT_SECRET));
    return NextResponse.next();
  } catch (ex) {
    req.nextUrl.pathname = "/signin";
    return NextResponse.redirect(req.nextUrl);
  }
}

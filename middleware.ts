import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const publicAdminPaths = ["/admin/login"];

const JWT_SECRET = process.env.JWT_SECRET
  ? new TextEncoder().encode(process.env.JWT_SECRET)
  : null;

async function verifyToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  if (publicAdminPaths.includes(pathname)) {
    return NextResponse.next();
  }

  if (!JWT_SECRET) {
    return NextResponse.json(
      { error: "Server misconfigured: JWT_SECRET not set" },
      { status: 500 }
    );
  }

  const authHeader = request.headers.get("authorization");
  const cookieToken = request.cookies.get("admin_token")?.value;
  const token =
    authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : cookieToken;

  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  const valid = await verifyToken(token);
  if (!valid) {
    const dest = new URL("/admin/login", request.url);
    dest.searchParams.set("expired", "1");
    return NextResponse.redirect(dest);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

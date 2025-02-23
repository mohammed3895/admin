import authConfig from "auth.config";
import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { type NextAuthRequest } from "node_modules/next-auth/lib";
import { apiPrefix, authRoutes, protectedRoutes } from "routes";

const { auth } = NextAuth(authConfig);

// MIDDLEWARE
export default auth((req: NextAuthRequest) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth; // Ensure this logic correctly determines auth status

  const apiRoute = nextUrl.pathname.startsWith(apiPrefix);
  const authRoute = authRoutes.includes(nextUrl.pathname);
  const protectedRoute = protectedRoutes.includes(nextUrl.pathname);

  if (apiRoute) {
    return NextResponse.next();
  }

  if (authRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  if (protectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/sign-in", nextUrl));
  }

  return NextResponse.next();
});

// MIDDLEWARE INVOKE
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

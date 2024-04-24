import authConfig from "auth.config";
import NextAuth from "next-auth";
import { apiPrefix, authRoutes, protectedRoutes } from "routes";

const { auth } = NextAuth(authConfig);

// MIDDLEWARE
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  console.log("URL: ", nextUrl.pathname);
  console.log("LOGGEDIN: ", isLoggedIn);

  const apiRoute = nextUrl.pathname.startsWith(apiPrefix);
  const authRoute = authRoutes.includes(nextUrl.pathname);
  const protectedRoute = protectedRoutes.includes(nextUrl.pathname);

  if (apiRoute) {
    return;
  }

  if (authRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/", nextUrl));
    }

    return;
  }

  if (protectedRoute && !isLoggedIn) {
    return Response.redirect(new URL("/sign-in", nextUrl));
  }

  return;
});

// MIDDLEWARE INVOKE
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

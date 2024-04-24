import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "auth.config";
import NextAuth from "next-auth";
import { db } from "~/server/db";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
});

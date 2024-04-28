import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { singinformSchema } from "~/lib/validations";
import { db } from "~/server/db";
import { signIn } from "auth";

export default {
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const vaildCredentials = singinformSchema.safeParse(credentials);

        if (vaildCredentials.success) {
          const { email, password } = vaildCredentials.data;

          const user = await db.user.findFirst({ where: { email } });

          if (user?.password) {
            if (user.password === password) {
              return user;
            }
          }
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      console.log(user);
      return true;
    },
    async jwt({ token, session }) {
      if (token && !token.sub) {
        return { ...token, iat: Date.now() / 1000 };
      }

      return token;
    },
  },
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;

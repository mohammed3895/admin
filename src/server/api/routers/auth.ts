import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { db } from "~/server/db";
import { TRPCError } from "@trpc/server";
import { signIn } from "auth";

export const authRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(z.object({ email: z.string().email(), password: z.string().min(8) }))
    .query(async ({ input }) => {
      const { email, password } = input;

      const user = await db.user.findFirst({ where: { email } });
      if (!user) {
        const user = db.user.create({ data: { email, password } });

        return user;
      }

      return { user };
    }),

  signIn: publicProcedure
    .input(z.object({ email: z.string().email(), password: z.string().min(8) }))
    .mutation(async ({ input }) => {
      const { email, password } = input;

      const user = await db.user.findUnique({ where: { email } });
      if (!user)
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: `No user found with email ${email}`,
        });

      await signIn("credentials", {
        email,
        password,
        redirectTo: "/",
      });

      return user;
    }),
});

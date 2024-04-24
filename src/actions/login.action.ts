"use server";
import { signIn } from "auth";
import { AuthError } from "next-auth";
import { z } from "zod";
import { singinformSchema } from "~/lib/validations";

export const login = async (values: z.infer<typeof singinformSchema>) => {
  const vaildCredentials = singinformSchema.safeParse(values);

  if (vaildCredentials.success) {
    try {
      const { email, password } = vaildCredentials.data;
      await signIn("credentials", { email, password, redirectTo: "/" });
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            // return { error: "Wrong email or password" };
            console.log("Wrong email or password");
          default:
            return { error: "An unexpected error occurred" };
        }
      }
      throw error;
    }
  }
  return { success: true };
};

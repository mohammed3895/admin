import { z } from "zod";

export const formSchema = z.object({
  firstname: z.string().min(6).max(32).optional(),
  lastname: z.string().min(6).max(32).optional(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(32),
  confirmpassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(32),
});

export const singinformSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(32),
});

// ADD PRODUCT SCHEMA
export const addProductSchema = z.object({
  name: z.string().min(6),
  description: z.string(),
  category: z.string(),
  imageUrl: z.string().url(),
  price: z.coerce.number(),
});

export type formSchemaType = z.infer<typeof formSchema>;
export type signformSchemaType = z.infer<typeof singinformSchema>;
export type addProductSchemaType = z.infer<typeof addProductSchema>;

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { singinformSchema } from "~/lib/validations";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { login } from "~/actions/login.action";
import { Button } from "../ui/button";
import Image from "next/image";
import { Loader2, Lock, Mail, User } from "lucide-react";
import AuthTitle from "./AuthTitle";
import GoogleBtn from "./GoogleBtn";
import Link from "next/link";
import BackToHome from "./BackToHome";

const SignUpForm = () => {
  const form = useForm<z.infer<typeof singinformSchema>>({
    resolver: zodResolver(singinformSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof singinformSchema>) => {
    startTransition(async () => {
      await login({ ...values });
    });
  };

  return (
    <div className="mt-auto flex h-fit w-full items-center justify-center rounded-t-2xl bg-background pb-4 pt-10 lg:mt-0 lg:h-full lg:w-1/2 lg:rounded-r-xl lg:rounded-t-none lg:rounded-tr-xl">
      <div className="flex min-w-80 max-w-md flex-col items-center justify-center px-3">
        <AuthTitle title="Create New Account" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-2.5 w-full md:mb-4">
                  {/* <FormLabel className="text-sm text-black-1">Email</FormLabel> */}
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        type="text"
                        placeholder="Ex: John Doe"
                        {...field}
                        className="relative"
                      />
                      <User className="absolute bottom-3 right-2  h-4 w-4 text-gray-400" />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-2.5 w-full md:mb-4">
                  {/* <FormLabel className="text-sm text-black-1">Email</FormLabel> */}
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        type="email"
                        placeholder="Ex: john@example.com"
                        {...field}
                        className="relative text-sm"
                      />
                      <Mail className="absolute bottom-3 right-2  h-4 w-4 text-gray-400" />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-2.5 w-full md:mb-4">
                  {/* <FormLabel className="text-sm text-black-1">
                    Password
                  </FormLabel> */}
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                        className="relative"
                      />
                      <Lock className="absolute bottom-3 right-2  h-4 w-4 text-gray-400" />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className=" f w-full">
              {isPending ? (
                <div className="flex items-center justify-center gap-3.5">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Signing Up...
                </div>
              ) : (
                "Sign Up"
              )}
            </Button>

            <p className="mt-4 text-center text-xs font-normal text-muted-foreground md:text-sm">
              Allready have an account?{" "}
              <Link href="/sign-in" className="  text-primary">
                Login Now
              </Link>
            </p>
            <BackToHome />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;

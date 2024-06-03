"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { singinformSchema } from "~/lib/validations";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { login } from "~/actions/login.action";
import { Button } from "../ui/button";
import { Loader2, Lock, User } from "lucide-react";
import GoogleBtn from "./GoogleBtn";
import Link from "next/link";
import AuthTitle from "./AuthTitle";
import { Checkbox } from "../ui/checkbox";
import BackToHome from "./BackToHome";

const SignInForm = () => {
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
    <div className="mt-auto flex h-fit w-full items-center justify-center rounded-t-2xl bg-background pb-4 pt-10 lg:mt-0 lg:h-full lg:w-1/2 lg:rounded-l-xl lg:rounded-t-none lg:rounded-tl-xl">
      <div className="flex min-w-80 max-w-md flex-col items-center justify-center px-3">
        <AuthTitle title="Login to your account" />
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
                        type="email"
                        placeholder="Ex: john@example.com"
                        {...field}
                        className="relative"
                      />
                      <User className="absolute bottom-3 right-2  h-4 w-4 text-gray-700" />
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
                      <Lock className="absolute bottom-3 right-2  h-4 w-4 text-gray-700" />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="my-3 flex w-full items-center justify-between gap-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-start gap-2">
                <Checkbox /> <span>Remember me</span>
              </div>
              <Link href="/forgot-password" className="text-primary">
                Forgot Password?
              </Link>
            </div>
            <Button type="submit" className=" w-full font-normal">
              {isPending ? (
                <div className="flex items-center justify-center gap-3.5">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Logging in…
                </div>
              ) : (
                "Log in"
              )}
            </Button>
            <div className="my-3 flex w-full items-center justify-center gap-2.5 text-nowrap text-xs text-muted-foreground">
              <div className="h-px w-full bg-input text-xs" />
              OR SIGN IN WITH
              <div className="h-px w-full bg-input" />
            </div>
            <div className="flex w-full items-center justify-center gap-2">
              <GoogleBtn />
            </div>

            <p className="mt-2.5 text-center text-xs font-normal text-muted-foreground md:text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="font-medium text-primary">
                Create One
              </Link>
            </p>
            <BackToHome />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignInForm;

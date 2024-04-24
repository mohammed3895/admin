"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import AuthTitle from "./AuthTitle";
import GoogleBtn from "./GoogleBtn";

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
    <div className="mt-auto flex h-fit w-full items-center justify-center rounded-t-lg bg-white py-6 lg:mt-0 lg:h-full lg:w-1/2 lg:rounded-l-lg lg:rounded-t-none lg:rounded-tl-lg">
      <div className="flex min-w-80 max-w-md flex-col items-center justify-center px-3">
        <AuthTitle title="Login to your account" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mb-6 w-full">
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
                <FormItem className="mb-4 w-full">
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
            <Button type="submit" className="my-2.5 w-full font-semibold">
              {isPending ? (
                <div className="flex items-center justify-center gap-3.5">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Logging in…
                </div>
              ) : (
                "Log in"
              )}
            </Button>
          </form>
        </Form>
        <div className="my-3.5 flex w-full items-center justify-center gap-2.5 text-input">
          <div className="h-px w-full bg-input" />
          OR
          <div className="h-px w-full bg-input" />
        </div>
        <GoogleBtn />
      </div>
    </div>
  );
};

export default SignInForm;

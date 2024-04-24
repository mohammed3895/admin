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
    <div className="mt-auto flex h-fit w-full items-center justify-center rounded-t-lg bg-white py-6 lg:mt-0 lg:h-full lg:w-1/2 lg:rounded-r-lg lg:rounded-t-none lg:rounded-tr-lg">
      <div className="flex max-w-md flex-col items-center justify-center px-4">
        <AuthTitle title="Create New Account" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
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
                        placeholder="John Doe"
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
                      <Lock className="absolute bottom-3 right-2  h-4 w-4 text-gray-400" />
                    </div>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="my-3 w-full font-semibold">
              {isPending ? (
                <div className="flex items-center justify-center gap-3.5">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Creating
                </div>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>
        </Form>
        <div className="my-2.5 flex w-full items-center justify-center gap-2.5 text-input md:my-3.5">
          <div className="h-px w-full bg-input" />
          OR
          <div className="h-px w-full bg-input" />
        </div>
        <GoogleBtn />
      </div>
    </div>
  );
};

export default SignUpForm;

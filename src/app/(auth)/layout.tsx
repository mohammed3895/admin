"use client";
import { usePathname } from "next/navigation";
import React, { type ReactNode } from "react";
import AuthBanner from "~/components/auth/AuthBanner";
import { cn } from "~/lib/utils";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex h-screen max-h-screen w-full flex-col items-end justify-between gap-0 overflow-hidden bg-primary p-0 transition-all duration-1000 ease-in-out lg:flex-row lg:items-center",
        { "lg:flex-row-reverse": pathname === "/sign-up" },
      )}
    >
      <AuthBanner />
      {children}
    </div>
  );
};

export default AuthLayout;

"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";

const GoogleBtn = () => {
  return (
    <Button
      variant="secondary"
      className="flex w-full items-center justify-center gap-4 py-3.5 text-sm font-semibold capitalize text-primary md:text-base"
      onClick={() => signIn("google")}
    >
      <Image
        src="/assets/icons/google.svg"
        width={24}
        height={24}
        alt="google"
      />
      Continue with google
    </Button>
  );
};

export default GoogleBtn;

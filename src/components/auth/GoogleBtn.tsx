"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const GoogleBtn = () => {
  return (
    <Button
      variant="secondary"
      className="flex w-fit items-center justify-center gap-4 p-3.5 text-sm font-medium capitalize text-zinc-700 md:text-base"
      onClick={() => signIn("google")}
    >
      <FaGoogle className="h-4 w-4 text-muted-foreground" />
    </Button>
  );
};

export default GoogleBtn;

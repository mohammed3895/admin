"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const AuthBanner = () => {
  const pathname = usePathname();
  return (
    <div className=" flex h-full w-full flex-col items-center  justify-center lg:w-1/2 lg:flex-row">
      <Image
        src="/assets/illustrations/auth.svg"
        width={280}
        height={280}
        alt="bg"
        // className="h-full w-full object-cover"
      />
    </div>
  );
};

export default AuthBanner;

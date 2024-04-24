"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const AuthBanner = () => {
  const pathname = usePathname();
  return (
    <div className="auth hidden h-full w-1/2  items-center justify-center lg:flex">
      <Image
        src={
          pathname === "/sign-in"
            ? "/assets/images/auth-right.png"
            : "/assets/images/auth-bg.svg"
        }
        width={400}
        height={400}
        alt="bg"
      />
    </div>
  );
};

export default AuthBanner;

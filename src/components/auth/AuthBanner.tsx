"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const AuthBanner = () => {
  const pathname = usePathname();
  return (
    <div className="auth flex h-full w-full flex-col items-center  justify-center lg:w-1/2 lg:flex-row">
      <Image
        src={
          pathname === "/sign-in"
            ? "/assets/images/auth-right.png"
            : "/assets/images/auth-bg.svg"
        }
        width={240}
        height={240}
        alt="bg"
      />
    </div>
  );
};

export default AuthBanner;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "~/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex h-dvh w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <Image
          src="/assets/illustrations/not_found.svg"
          alt="not-found"
          width={300}
          height={300}
          className="h-52 w-52 object-cover"
        />
        <h1 className="text-2xl font-medium tracking-wide">
          Oops, We can&apos;t Find This Page
        </h1>
        <p className="text-sm font-normal text-muted-foreground">
          Please Try Again
        </p>
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

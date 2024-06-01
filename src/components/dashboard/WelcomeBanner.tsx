import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";
import { buttonVariants } from "../ui/button";

const WelcomeBanner = () => {
  return (
    <div className="flex h-full w-full min-w-80 justify-center rounded-2xl bg-purple-2 text-purple-1 shadow-xl shadow-gray-50 dark:bg-accent dark:text-white dark:shadow-zinc-900 md:h-80">
      <div className="flex w-full flex-col items-center justify-between gap-12 px-4 py-6 md:flex-row md:px-8 md:py-7 lg:px-12">
        <div className="flex flex-col items-center justify-start gap-4 md:items-start">
          <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
            Welcome
          </h1>
          <p className="text-xs font-light md:text-sm">
            If you are going to use a passage of Lorem Ipsum,
          </p>
          <Link
            href="/"
            className={cn(
              buttonVariants(),
              "bg-purple-1 font-light dark:text-white",
            )}
          >
            Get Started
          </Link>
        </div>

        <Image
          src="/assets/illustrations/team_up.svg"
          alt=""
          width={300}
          height={300}
          className="h-40 w-40 min-w-40 object-cover md:h-52 md:w-52"
        />
      </div>
    </div>
  );
};

export default WelcomeBanner;

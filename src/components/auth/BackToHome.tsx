import { cn } from "~/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { IoArrowUndo } from "react-icons/io5";

const BackToHome = () => {
  return (
    <div className="w-full text-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "my-2 flex items-center gap-2 text-xs text-primary underline",
        )}
      >
        <IoArrowUndo className="h-3 w-3 text-muted-foreground md:h-4 md:w-4" />
        Back To Home
      </Link>
    </div>
  );
};

export default BackToHome;

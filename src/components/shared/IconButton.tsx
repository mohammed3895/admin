import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { cn } from "~/lib/utils";
import { type LucideIcon } from "lucide-react";

interface IconButtonProps {
  iconSrc?: string;
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
}

const IconButton = ({ iconSrc, className, onClick, icon }: IconButtonProps) => {
  return (
    <Button
      asChild
      onClick={onClick}
      className={cn(
        "flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border-none bg-purple-2 p-2.5 shadow-none outline-0 ring-0 hover:bg-accent focus-visible:border-none focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0",
      )}
    >
      <Image
        src={iconSrc!}
        alt=""
        width={20}
        height={20}
        className={cn("h-10 w-10 text-[#8F8FAF]", className)}
        color="#8F8FAF"
      />
    </Button>
  );
};

export default IconButton;

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { cn } from "~/lib/utils";

interface IconButtonProps {
  iconSrc: string;
  className?: string;
  onClick?: () => void;
}

const IconButton = ({ iconSrc, className, onClick }: IconButtonProps) => {
  return (
    <Button
      asChild
      onClick={onClick}
      className={cn(
        "flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-[#F0F0F3] p-2.5  shadow-none hover:bg-gray-200",
        className,
      )}
    >
      <Image
        src={iconSrc}
        alt=""
        width={20}
        height={20}
        className="h-9 w-9 text-[#8F8FAF]"
        color="#8F8FAF"
      />
    </Button>
  );
};

export default IconButton;

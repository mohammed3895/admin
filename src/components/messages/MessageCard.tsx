"use client";
import { Link2, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import MoreBtn from "../buttons/MoreBtn";

const LIST_DATA = [
  {
    btnTitle: "replay",
    onClick: () => console.log("clicked"),
  },
  {
    btnTitle: "archive",
    onClick: () => console.log("clicked"),
  },
  {
    btnTitle: "delete",
    variant: "destructive",
    onClick: () => console.log("clicked"),
  },
];

const MessageCard = () => {
  return (
    <div className="flex w-full items-start justify-between gap-2.5 rounded-lg border-[0] bg-background p-4 dark:border-primary/5 md:flex-row md:items-center md:border">
      <div className="flex w-3/4 flex-col items-start justify-start gap-1 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-start gap-2.5">
          <Star size={16} strokeWidth={1} className="h-3 w-3" />
          <Image
            src="https://randomuser.me/api/portraits/men/12.jpg"
            alt=""
            width={30}
            height={30}
            className="h-9 w-9 rounded-md object-cover md:h-6 md:w-6"
          />
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-sm font-bold capitalize text-black-1 dark:text-white">
              username
            </h2>
            <p className="text-xs font-medium text-purple-1 dark:text-muted-foreground md:hidden">
              Subject Content
            </p>
          </div>
        </div>

        {/*  */}
        <div className="hidden items-center justify-start gap-3 truncate md:flex">
          <h3 className="text-sm font-semibold text-muted-foreground">
            Subject Title
          </h3>
          <h3 className="text-sm font-medium text-purple-1 dark:text-muted-foreground">
            Subject Content
          </h3>
        </div>
      </div>

      {/*  */}
      <div className="flex w-fit flex-col items-end justify-end gap-3.5 text-purple-1 md:flex-row md:items-center">
        <Link2 size={16} className="hidden h-4 w-4 md:block" />
        <span className="text-xs">May 05</span>
        <MoreBtn className="hidden md:flex" />
      </div>
    </div>
  );
};

export default MessageCard;

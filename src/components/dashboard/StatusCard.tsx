import React from "react";
import { type STATS } from "./StatusCardWrapper";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";
import { cn } from "~/lib/utils";

interface StatProps {
  stat: (typeof STATS)[number];
}

const StatusCard = ({ stat }: StatProps) => {
  return (
    <div className="flex h-32 w-full items-end justify-between rounded-2xl border bg-background p-6 shadow-lg shadow-gray-1 dark:shadow-zinc-900 md:p-8 lg:p-10">
      <div className="flex h-full w-full flex-col items-start justify-between gap-3">
        <div className="flex items-center justify-start gap-3.5">
          <stat.iconName className={`h-6 w-6 text-${stat.iconColor}`} />
          <p className="text-sm font-light capitalize text-muted-foreground">
            {stat.name}
          </p>
        </div>
        <div className="flex w-full flex-col items-start justify-start">
          <h1 className="text-lg font-semibold capitalize text-black-1 dark:text-white md:text-xl">
            {stat.value}
          </h1>
        </div>
      </div>
      <BsGraphUpArrow
        className={cn("h-6 w-6 text-green-1", {
          hidden: stat.name === "users" || stat.name === "projects",
        })}
      />
      <BsGraphDownArrow
        className={cn("h-6 w-6 text-red-1", {
          hidden:
            stat.name === "users" ||
            stat.name === "followers" ||
            stat.name === "total income",
        })}
      />
    </div>
  );
};

export default StatusCard;

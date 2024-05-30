import React from "react";
import { type STATS } from "./StatusCardWrapper";

interface StatProps {
  stat: (typeof STATS)[number];
}

const StatusCard = ({ stat }: StatProps) => {
  return (
    <div className="flex h-32 w-full items-center justify-between rounded-2xl bg-background px-6 py-4 shadow-lg shadow-gray-1 dark:shadow-zinc-900">
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-xl font-medium capitalize text-black-1 dark:text-white">
          {stat.value}
        </h1>
        <p className="text-base font-light capitalize text-muted-foreground">
          {stat.name}
        </p>
      </div>
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-xl bg-${stat.iconBg}`}
      >
        <stat.iconName className={`h-6 w-6 text-${stat.iconColor}`} />
      </div>
    </div>
  );
};

export default StatusCard;

import React from "react";
import { STATS } from "./StatusCardWrapper";

interface StatProps {
  stat: (typeof STATS)[number];
}

const StatusCard = ({ stat }: StatProps) => {
  return (
    <div className="flex h-36 w-full items-center justify-between rounded-lg border px-4 py-6">
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-xl font-medium capitalize text-black-1 dark:text-white">
          {stat.value}
        </h1>
        <p className="text-base font-light capitalize text-muted-foreground">
          {stat.name}
        </p>
      </div>
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-md bg-${stat.iconBg}`}
      >
        <stat.iconName className={`h-6 w-6 text-${stat.iconColor}`} />
      </div>
    </div>
  );
};

export default StatusCard;

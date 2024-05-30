import React from "react";
import MoreBtn from "../buttons/MoreBtn";

const UpcomingEventCard = () => {
  return (
    <div className="my-1 flex w-full flex-col items-start justify-start gap-1 rounded-lg bg-accent px-4 py-5">
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full items-center justify-start gap-2.5">
          <div className="h-2 w-2 rounded-full bg-green-1" />
          <p className="text-xs font-normal text-primary">05:00 AM</p>
        </div>
        <MoreBtn />
      </div>
      <h1 className="text-sm font-normal tracking-tight text-black-1 dark:text-white">
        Meeting with client
      </h1>
      <h1 className="text-xs font-light text-muted-foreground">
        You have Meeting with new client at 9:30 AM
      </h1>
    </div>
  );
};

export default UpcomingEventCard;

import React from "react";

const UpcomingEventCard = () => {
  return (
    <div className="mb-2 mt-1 flex h-20 w-full flex-col items-start justify-start gap-2.5 rounded-lg bg-purple-2 p-4">
      <div className="flex w-full items-center justify-start gap-2.5">
        <div className="h-2 w-2 rounded-full bg-yellow-1" />
        <p className="text-xs font-medium text-primary">05:00 AM</p>
      </div>
      <h1 className="text-xs font-semibold text-muted-foreground">
        Meeting with client
      </h1>
    </div>
  );
};

export default UpcomingEventCard;

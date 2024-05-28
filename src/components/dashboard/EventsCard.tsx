import { type LucideIcon } from "lucide-react";
import React from "react";

interface EventCardprops {
  event: {
    title: string;
    data: string;
    details: string;
    icon: LucideIcon;
  };
}

const EventsCard = ({ event }: EventCardprops) => {
  return (
    <div className="mb-1.5 flex w-full cursor-pointer items-center justify-start gap-3 rounded-md md:p-0">
      <div className="flex w-full items-start justify-between gap-2">
        <div className="flex w-full items-center gap-2">
          <div className="flex h-10 w-10 min-w-10 items-center justify-center rounded-md bg-purple-2">
            <event.icon size={20} className=" h-5 w-5 text-purple-1" />
          </div>
          <div className="flex w-full flex-col justify-start">
            <h1 className="text-sm font-medium md:text-sm">{event.title}</h1>
            <h3 className="text-xs font-normal text-muted-foreground">
              {event.data}
            </h3>
          </div>
        </div>
        <div className="flex h-full flex-col items-start justify-start text-nowrap">
          <p className="text-sm font-normal text-purple-1 md:text-base">
            {event.details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;

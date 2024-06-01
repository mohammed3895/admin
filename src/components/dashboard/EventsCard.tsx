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
    <div className="flex w-full cursor-pointer items-center justify-start gap-3 rounded-xl bg-accent p-4 md:bg-transparent md:px-0 md:py-2">
      <div className="flex w-full items-start justify-between gap-2">
        <div className="flex w-full items-center gap-2">
          <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-xl bg-purple-2">
            <event.icon size={20} className=" h-5 w-5 text-purple-1" />
          </div>
          <div className="flex w-full flex-col justify-start">
            <h1 className="text-sm font-semibold">{event.title}</h1>
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

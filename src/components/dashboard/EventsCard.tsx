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
    <div className="flex w-full cursor-pointer items-center justify-start gap-3 rounded-md bg-white p-4 md:bg-transparent md:p-0">
      <div className=" hover:group-[bg-purple-1]: flex items-center justify-center rounded-xl bg-purple-2 p-2 md:p-3.5">
        <event.icon size={20} className=" text-purple-1" />
      </div>

      <div className="flex w-full items-center">
        <div className="flex w-3/4 flex-col justify-start gap-1">
          <h1 className="text-sm font-medium md:text-sm">{event.title}</h1>
          <h3 className="text-xs font-normal text-muted-foreground">
            {event.data}
          </h3>
        </div>
        <div className="flex w-1/3 items-center justify-end text-nowrap">
          <p className="text-sm font-medium text-muted-foreground md:text-base">
            {event.details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;

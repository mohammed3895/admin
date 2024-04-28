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
    <div className="mb-2.5 flex w-full items-center justify-start gap-3">
      <div className=" flex items-center justify-center rounded-lg bg-purple-2 p-2 md:p-3.5">
        <event.icon size={20} className=" text-purple-1" />
      </div>

      <div className="flex w-full items-center">
        <div className="flex w-3/4 flex-col justify-start gap-1">
          <h1 className="text-sm font-semibold md:text-base">{event.title}</h1>
          <h3 className="text-sm font-medium text-gray-600 md:text-base">
            {event.data}
          </h3>
        </div>
        <div className="flex w-1/3 items-center justify-end text-nowrap">
          <p className="text-sm font-semibold md:text-base">{event.details}</p>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;

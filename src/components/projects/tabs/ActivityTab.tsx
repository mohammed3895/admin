import React from "react";
import ActivityCard from "../ActivityCard";
import { ACTIVITIES } from "~/constants/activities";
import { Calendar } from "lucide-react";

const ActivityTab = () => {
  return (
    <div className="h-full w-full">
      <div className="flex w-full flex-col items-start justify-start rounded-xl">
        {ACTIVITIES.map((event, i) => (
          <div key={i} className="mb-2.5 flex w-full flex-col justify-center">
            <div className="mb-3 flex items-center justify-start gap-2.5 text-purple-1">
              <Calendar size={14} />
              <h3 className=" text-xs font-normal tracking-tight">
                {event.date}
              </h3>
            </div>
            <div className="flex flex-col gap-2.5">
              {event.activity.map((activity, i) => (
                <ActivityCard key={i} activity={activity} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityTab;

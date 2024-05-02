import React from "react";
import ActivityCard from "../ActivityCard";
import { ACTIVITIES } from "~/constants/activities";
import { Calendar } from "lucide-react";

const ActivityTab = () => {
  return (
    <div className="flex h-full w-full flex-1 flex-col">
      <div className="flex h-full w-full flex-col items-start justify-start rounded-xl p-2 md:p-6">
        {ACTIVITIES.map((event, i) => (
          <div
            key={i}
            className="mx-auto mb-4 flex w-full flex-col justify-center"
          >
            <div className="mb-3 flex items-center justify-start gap-2.5 text-purple-1">
              <Calendar size={14} />
              <h3 className=" text-xs font-bold tracking-wide">{event.date}</h3>
            </div>
            <div className="flex h-full w-full flex-col gap-4">
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

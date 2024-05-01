import React from "react";
import ActivityCard from "../ActivityCard";
import { ACTIVITIES } from "~/constants/activities";
import { Calendar } from "lucide-react";

const ActivityTab = () => {
  return (
    <div className="flex h-full w-full flex-1 flex-col">
      <div className="h-full w-full rounded-xl bg-white p-4 md:p-6">
        {ACTIVITIES.map((event, i) => (
          <div key={i} className="mb-4 flex w-full flex-col justify-start">
            <div className="mb-3 flex items-center justify-start gap-2.5 text-purple-1">
              <Calendar size={14} />
              <h3 className=" text-xs font-bold tracking-wide">{event.date}</h3>
            </div>
            {event.activity.map((activity, i) => (
              <ActivityCard key={i} activity={activity} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityTab;

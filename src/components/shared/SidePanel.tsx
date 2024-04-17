import React from "react";
import UpdatesCard from "./UpdatesCard";
import UpcomingEventCard from "./UpcomingEventCard";
import { ScrollArea } from "../ui/scroll-area";

const SidePanel = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="hidden h-screen w-96 flex-col justify-between gap-6 border-r bg-white px-4 py-6 lg:flex">
      {/* USER INFO */}
      <div className="h-[15vh] w-full">
        <div className="flex flex-col items-start justify-start">
          <div className="mb-2.5 flex h-16 w-16 items-center justify-center rounded-2xl bg-black-1 text-white">
            <h1 className="text-5xl font-bold">M</h1>
          </div>
          <p className="text-lg font-semibold text-black-1">Michael Zhang</p>
          <p className="text-sm font-normal text-gray-2">
            michaelzhang@mail.com
          </p>
        </div>
      </div>

      {/* UPDATES */}
      <div className="h-[50vh] w-full">
        <div className="flex h-full w-full flex-col">
          <h2 className="mb-5 text-base font-semibold capitalize text-black-1">
            Latest updates
          </h2>
          <ScrollArea className="flex h-[40vh] flex-col gap-3.5 space-y-3.5">
            <UpdatesCard />
            <UpdatesCard />
            <UpdatesCard />
            <UpdatesCard />
            <UpdatesCard />
            <UpdatesCard />
            <UpdatesCard />
            <UpdatesCard />
          </ScrollArea>
        </div>
      </div>

      {/* EVENTS */}
      <div className="h-[30vh] w-full">
        <h2 className="mb-5 text-base font-semibold capitalize text-black-1">
          Upcoming events
        </h2>

        <ScrollArea className="flex h-[20vh] flex-col flex-wrap gap-3.5">
          <UpcomingEventCard />
          <UpcomingEventCard />
          <UpcomingEventCard />
          <UpcomingEventCard />
        </ScrollArea>
      </div>
    </div>
  );
};

export default SidePanel;

import React from "react";
import UpdatesCard from "./UpdatesCard";
import UpcomingEventCard from "./UpcomingEventCard";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";

const SidePanel = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="hidden h-dvh w-[24rem] flex-col justify-between gap-6 overflow-hidden border-r border-dashed bg-background px-3 py-6 dark:border-zinc-700 xl:flex xl:w-[26rem]">
      {/* USER INFO */}
      <div className=" w-full">
        <div className="flex flex-col items-start justify-start">
          <div className="mb-2.5 flex h-14 w-14 items-center justify-center rounded-lg bg-black-1 p-2 text-white dark:bg-gray-50 dark:text-black-1">
            <h1 className="text-5xl font-medium">M</h1>
          </div>
          <p className="text-2xl font-semibold text-black-1 dark:text-gray-50">
            WELCOME,
          </p>
          <p className="text-lg font-semibold text-muted-foreground">
            UI STORE
          </p>
        </div>
      </div>

      {/* UPDATES */}
      <div className="h-full w-full">
        <div className="flex h-full w-full flex-col">
          <h2 className="mb-3 text-sm font-medium capitalize text-black-1 dark:text-white md:text-base">
            Latest updates
          </h2>
          <div className="flex h-full flex-col gap-1.5 ">
            <UpdatesCard details="New Income #7" />
            <UpdatesCard details="You have 2 Requests to resolve" />
            <UpdatesCard details="Email notification sent" />
            <UpdatesCard details="Upload Files complete" />
          </div>
        </div>
      </div>

      {/* EVENTS */}
      <div className="h-fit w-full">
        <h2 className="mb-3 text-base font-medium capitalize text-black-1 dark:text-white">
          Upcoming events
        </h2>

        <div className="flex h-full w-full flex-col overflow-hidden">
          <UpcomingEventCard />
          <UpcomingEventCard />
        </div>
      </div>
    </div>
  );
};

export default SidePanel;

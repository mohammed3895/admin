import React from "react";
import UpdatesCard from "./UpdatesCard";
import UpcomingEventCard from "./UpcomingEventCard";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";

const SidePanel = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="hidden h-dvh flex-col justify-between gap-6 border-r bg-white px-4 py-6 md:w-72 lg:flex lg:w-80">
      {/* USER INFO */}
      <div className="h-[14vh] w-full">
        <div className="flex flex-col items-start justify-start">
          <div className="mb-2.5 flex h-14 w-14 items-center justify-center rounded-lg bg-black-1 p-2 text-white">
            <h1 className="text-4xl font-bold">M</h1>
          </div>
          <p className="text-base font-semibold text-black-1">Michael Zhang</p>
          <p className="text-xs font-normal text-gray-2">
            michaelzhang@mail.com
          </p>
        </div>
      </div>

      {/* UPDATES */}
      <div className="h-[45vh] w-full">
        <div className="flex h-full w-full flex-col">
          <h2 className="mb-3 text-sm font-semibold capitalize text-black-1 md:text-base">
            Latest updates
          </h2>
          <ScrollArea className="flex h-[40vh] flex-col gap-3.5 ">
            <UpdatesCard details="New Income #7" />
            <UpdatesCard details="You have 2 Requests to resolve" />
            <UpdatesCard details="New Income #4" />
            <UpdatesCard details="Email notification sent" />
            <UpdatesCard details="Item sale #76" />
            <UpdatesCard details="Upload Files complete" />
          </ScrollArea>
        </div>
      </div>

      {/* EVENTS */}
      <div className="h-[30vh] w-full">
        <h2 className="mb-3 text-base font-semibold capitalize text-black-1">
          Upcoming events
        </h2>

        <ScrollArea className="flex h-[20vh] flex-col flex-wrap gap-3.5">
          <UpcomingEventCard />
          <UpcomingEventCard />
          <UpcomingEventCard />
          <UpcomingEventCard />
        </ScrollArea>
      </div>
      <Link
        href="https://www.linkedin.com/in/mohammed-sameer-bb81b3151/"
        target="_blank"
        className="rounded-lg bg-green-2 p-4 text-lg font-black text-green-1"
      >
        Mohammed Sammeer
      </Link>
    </div>
  );
};

export default SidePanel;

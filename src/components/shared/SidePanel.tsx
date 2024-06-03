import React from "react";
import UpdatesCard from "./UpdatesCard";
import UpcomingEventCard from "./UpcomingEventCard";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { HiBell } from "react-icons/hi";
import { cn } from "~/lib/utils";

const SidePanel = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <button
          className={cn(
            "flex h-8 w-8 min-w-8 items-center justify-center rounded-md bg-gray-1 shadow-none transition-opacity ease-linear hover:opacity-80 dark:bg-accent",
          )}
        >
          <HiBell className="h-5 w-5 text-purple-1" />
        </button>
      </SheetTrigger>
      <SheetContent className="w-[400px] min-w-[400px] p-2 md:w-[600px] md:min-w-[600px]">
        <div className="flex h-full w-full flex-col justify-start gap-4 overflow-y-scroll bg-background px-3 py-6">
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
      </SheetContent>
    </Sheet>
  );
};

export default SidePanel;

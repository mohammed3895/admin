"use client";
import React, { useState } from "react";
import { SidebarTabs } from "~/constants/sidebarTabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { cn } from "~/lib/utils";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="h-full w-full py-2">
      <div className="flex h-full flex-col items-center justify-between gap-5">
        <div className="flex flex-col items-center gap-5">
          <div className="mb-4 py-4">
            <Link
              href="/"
              className="text-center text-lg font-bold text-primary"
            >
              <Image
                src="/assets/icons/logo.svg"
                alt="logo"
                width={20}
                height={20}
                className="h-10 w-10 text-primary"
              />
            </Link>
          </div>
          <TooltipProvider delayDuration={0}>
            {SidebarTabs.map((tab, i) => (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <div
                    className={cn(
                      "flex w-20 items-center justify-center border-r border-transparent transition-all duration-500 ease-in-out",
                      {
                        "border-primary ": activeIndex === i,
                      },
                    )}
                    onClick={() => setActiveIndex(i)}
                  >
                    <Link
                      href={tab.path}
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg bg-transparent transition-all duration-500",
                        { "bg-purple-2": activeIndex === i },
                      )}
                    >
                      <Image
                        src={tab.icon}
                        alt={tab.name}
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{tab.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>

        {/* <div className="-rotate-90 text-nowrap text-sm font-semibold">
          Mohammed Sameer
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;

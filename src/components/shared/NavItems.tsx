import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { SidebarTabs } from "~/constants/sidebarTabs";
import { cn } from "~/lib/utils";
import Link from "next/link";
import Image from "next/image";

const NavItems = ({
  tooltipSide,
}: {
  tooltipSide: "right" | "top" | "bottom" | "left" | undefined;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TooltipProvider delayDuration={0}>
      {SidebarTabs.map((tab, i) => (
        <Tooltip key={i}>
          <TooltipTrigger asChild>
            <div
              className={cn(
                "flex h-full w-full items-center justify-between border-t border-transparent transition-all duration-500 ease-in-out md:w-16 md:justify-center md:border-r md:border-t-0",
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
                <Image src={tab.icon} alt={tab.name} width={20} height={20} />
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent side={tooltipSide}>
            <p>{tab.name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </TooltipProvider>
  );
};

export default NavItems;

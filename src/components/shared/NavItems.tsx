import React from "react";
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
import { usePathname } from "next/navigation";

const NavItems = ({
  tooltipSide,
}: {
  tooltipSide: "right" | "top" | "bottom" | "left" | undefined;
}) => {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-full items-center justify-between gap-1 md:flex-col md:justify-start">
      <TooltipProvider delayDuration={0}>
        {SidebarTabs.map((tab, i) => (
          <Tooltip key={i}>
            <TooltipTrigger asChild>
              <div
                className={cn(
                  "flex h-full w-full items-center justify-center border-t border-transparent transition-all duration-500 ease-in-out md:w-20 md:justify-center md:border-r md:border-t-0",
                  {
                    "border-purple-1": tab.path === pathname.split("/")[1],
                  },
                )}
              >
                <Link
                  href={`/${tab.path}`}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded bg-transparent text-muted-foreground transition-all duration-500 hover:text-purple-1",
                    {
                      "bg-purple-2 text-purple-1":
                        tab.path === pathname.split("/")[1],
                    },
                  )}
                >
                  <tab.icon strokeWidth={1.5} className="h-5 w-5 " />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent side={tooltipSide}>
              <p>{tab.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default NavItems;

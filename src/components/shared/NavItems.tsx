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
                  "flex h-full w-full items-center justify-center border-t border-transparent transition-all duration-500 ease-in-out md:w-16 md:justify-center md:border-r md:border-t-0",
                  {
                    "border-purple-1": tab.path === pathname.split("/")[1],
                  },
                )}
              >
                <Link
                  href={`/${tab.path}`}
                  className={cn(
                    "flex h-8 w-8 min-w-8 items-center justify-center rounded-lg bg-transparent text-muted-foreground transition-all duration-500 hover:text-purple-1 md:h-10 md:w-10 md:min-w-10",
                    {
                      "bg-purple-2 text-purple-1":
                        tab.path === pathname.split("/")[1],
                    },
                  )}
                >
                  <tab.icon className="h-4 w-4 md:h-5 md:w-5" />
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

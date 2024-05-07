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
    <div className="flex justify-between gap-3.5 md:flex-col md:justify-start">
      <TooltipProvider delayDuration={0}>
        {SidebarTabs.map((tab, i) => (
          <Tooltip key={i}>
            <TooltipTrigger asChild>
              <div
                className={cn(
                  "flex h-full w-full items-center justify-between border-t-2 border-transparent transition-all duration-500 ease-in-out md:w-16 md:justify-center md:border-r-2 md:border-t-0",
                  {
                    "border-primary": tab.path === pathname.split("/")[1],
                  },
                )}
              >
                <Link
                  href={`/${tab.path}`}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-md bg-transparent transition-all duration-500",
                    { "bg-purple-2": tab.path === pathname.split("/")[1] },
                  )}
                >
                  <Image
                    src={tab.icon}
                    alt={tab.name}
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
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

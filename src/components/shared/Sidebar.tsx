"use client";
import React from "react";
import { SidebarTabs } from "~/constants/sidebarTabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);
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
                        "border-primary ": pathname === tab.path,
                      },
                    )}
                  >
                    <Link
                      href={tab.path}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-2"
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

        <div>88</div>
      </div>
    </div>
  );
};

export default Sidebar;

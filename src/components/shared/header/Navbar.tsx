"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import MobileDrawerMenu from "./menu/MobileDrawerMenu";
import MenuItems from "./menu/MenuItems";
import DeskTopAddMenu from "./menu/DeskTopAddMenu";
import Search from "../Search";
import { cn } from "~/lib/utils";
import SidePanel from "../SidePanel";
import SettingsMenu from "~/components/settings/SettingsMenu";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/" ? true : false;

  return (
    <div className="bg-backgrund relative mb-0 flex h-14 w-full items-center justify-between px-0 md:bg-transparent">
      <div
        className={cn(
          "fixed z-50 flex h-14 w-full items-center justify-between bg-background p-4 shadow-none md:hidden",
          { "shadow-md": pathname === "/" },
          {
            hidden:
              pathname.split("/")[1] === "messages" && pathname.length === 2,
          },
        )}
      >
        <SidePanel />
        <h2 className="w-full text-center text-lg  font-medium capitalize text-black-1 dark:text-white md:text-xl md:font-semibold">
          {isHomePage ? "Dashboard" : pathname.split("/")[1]}
        </h2>
        <SettingsMenu />
      </div>

      {/* DESKTOP NAV */}
      <div className="hidden h-14 w-full items-center justify-between rounded-md px-4 md:flex">
        <div className="flex items-center justify-between gap-3.5 md:justify-start">
          <div className="flex items-center justify-start gap-3">
            <h2 className="w-full text-center text-lg font-medium capitalize text-black-1 dark:text-white md:text-xl md:font-semibold">
              {isHomePage ? "Dashboard" : pathname.split("/")[1]}
            </h2>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
          <SidePanel />
          <SettingsMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

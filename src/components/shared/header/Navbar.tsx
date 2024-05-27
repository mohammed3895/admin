"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "~/components/ToggleTheme";
import MobileDrawerMenu from "./menu/MobileDrawerMenu";
import MenuItems from "./menu/MenuItems";
import DeskTopAddMenu from "./menu/DeskTopAddMenu";
import Search from "../Search";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/" ? true : false;

  return (
    <div className="bg-backgrund relative mb-0 flex h-14 w-full items-center justify-between px-0">
      <div className="fixed z-50 flex h-14 w-full items-center justify-between bg-accent p-4 md:hidden">
        <MobileDrawerMenu>
          <MenuItems />
        </MobileDrawerMenu>
        <div className="flex items-center justify-between gap-3.5 md:justify-start">
          <div className="flex items-center justify-start gap-3">
            <h2 className="text-lg font-medium capitalize  text-black-1 dark:text-white md:text-xl md:font-semibold">
              {isHomePage ? "Dashboard" : pathname.split("/")[1]}
            </h2>
          </div>
        </div>
        <Search />
      </div>

      {/* DESKTOP NAV */}
      <div className="hidden h-14 w-full items-center justify-between rounded-md bg-accent px-4 md:flex">
        <div className="flex items-center justify-between gap-3.5 md:justify-start">
          <div className="flex items-center justify-start gap-3">
            <h2 className="text-lg font-medium capitalize text-black-1 dark:text-white md:text-xl md:font-semibold">
              {isHomePage ? "Dashboard" : pathname.split("/")[1]}
            </h2>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3">
          <Search />
          <DeskTopAddMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

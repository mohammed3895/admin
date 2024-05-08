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
  console.log(pathname);
  return (
    <div className="flex h-16 w-full items-center justify-between bg-card px-4 md:bg-transparent md:px-0">
      <div className="flex w-full items-center justify-between md:hidden">
        <MobileDrawerMenu>
          <MenuItems />
        </MobileDrawerMenu>
        <div className="flex items-center justify-between gap-3.5 md:justify-start">
          <h2 className="text-lg font-medium capitalize text-black-1 dark:text-white">
            {isHomePage ? "Dashboard" : pathname.split("/")[1]}
          </h2>
        </div>
        <Search />
      </div>

      {/*  */}
      <div className="hidden h-14 w-full items-center justify-between md:flex">
        <div className="flex items-center justify-between gap-3.5 md:justify-start">
          <h2 className="text-lg font-medium capitalize text-black-1 dark:text-white">
            {isHomePage ? "Dashboard" : pathname.split("/")[1]}
          </h2>
        </div>
        <div className="flex items-center justify-end gap-3">
          <ModeToggle />
          <Search />
          <DeskTopAddMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

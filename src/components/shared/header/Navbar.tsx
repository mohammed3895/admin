"use client";
import React from "react";
import IconButton from "../IconButton";
import { usePathname } from "next/navigation";
import { ModeToggle } from "~/components/ToggleTheme";
import DrawerMenu from "../DrawerMenu";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/" ? true : false;
  console.log(pathname);
  return (
    <div className="flex h-16 w-full items-center justify-between">
      <div className="flex w-full items-center justify-between md:hidden">
        <DrawerMenu>
          <div className="flex w-full flex-col"></div>
        </DrawerMenu>
        <div className="flex items-center justify-between gap-3.5 md:justify-start">
          <h2 className="text-lg font-semibold capitalize text-black-1 dark:text-white">
            {isHomePage ? "Dashboard" : pathname.split("/")[1]}
          </h2>
        </div>
        <IconButton iconSrc="/assets/icons/search.svg" />
      </div>

      {/*  */}
      <div className="hidden h-14 w-full items-center justify-between md:flex">
        <div className="flex items-center justify-between gap-3.5 md:justify-start">
          <h2 className="text-lg font-semibold capitalize text-black-1 dark:text-white">
            {isHomePage ? "Dashboard" : pathname.split("/")[1]}
          </h2>
        </div>
        <div className="flex items-center justify-end gap-3">
          <ModeToggle />
          <DrawerMenu>
            <div className="flex w-full flex-col"></div>
          </DrawerMenu>
          <IconButton iconSrc="/assets/icons/search.svg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

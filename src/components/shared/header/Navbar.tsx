"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "~/components/ToggleTheme";
import MobileDrawerMenu from "./menu/MobileDrawerMenu";
import MenuItems from "./menu/MenuItems";
import DeskTopAddMenu from "./menu/DeskTopAddMenu";
import Search from "../Search";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "~/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/" ? true : false;
  const backHref = pathname.slice(pathname.length - 1, -1);

  return (
    <div className="flex h-16 w-full items-center justify-between rounded-md bg-zinc-50 px-4 dark:bg-zinc-700">
      <div className="flex w-full items-center justify-between md:hidden">
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
      <div className="hidden h-14 w-full items-center justify-between md:flex">
        <div className="flex items-center justify-between gap-3.5 md:justify-start">
          <div className="flex items-center justify-start gap-3">
            <h2 className="text-lg font-medium capitalize text-black-1 dark:text-white md:text-xl md:font-semibold">
              {isHomePage ? "Dashboard" : pathname.split("/")[1]}
            </h2>
          </div>
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

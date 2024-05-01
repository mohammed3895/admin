"use client";
import React from "react";
import IconButton from "../IconButton";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/" ? true : false;
  console.log(pathname);
  return (
    <div className="flex h-14 w-full items-center justify-between px-2">
      <div className="flex h-14 w-full items-center justify-between md:hidden">
        <IconButton iconSrc="/assets/icons/add-circle.svg" />
        <div className="flex items-center justify-between gap-3.5 md:justify-start">
          {/* <MobileNav /> */}
          <h2 className="text-lg font-semibold capitalize text-black-1 dark:text-white">
            {isHomePage ? "Dashboard" : pathname.split("/")[1]}
          </h2>
        </div>
        <IconButton iconSrc="/assets/icons/search.svg" />
      </div>

      {/*  */}
      <div className="hidden h-14 w-full items-center justify-between md:flex">
        <div className="flex items-center justify-between gap-3.5 md:justify-start">
          {/* <MobileNav /> */}
          <h2 className="text-lg font-semibold capitalize text-black-1 dark:text-white">
            {isHomePage ? "Dashboard" : pathname.split("/")[1]}
          </h2>
        </div>
        <div className="flex items-center justify-end gap-3">
          <IconButton iconSrc="/assets/icons/add-circle.svg" />
          <IconButton iconSrc="/assets/icons/search.svg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

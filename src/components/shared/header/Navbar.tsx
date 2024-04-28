"use client";
import React from "react";
import IconButton from "../IconButton";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/" ? true : false;
  console.log(pathname);
  return (
    <div className="flex h-14 w-full items-center justify-between">
      <div className="flex items-center justify-start gap-3.5">
        <IconButton
          iconSrc="/assets/icons/menu-icon.svg"
          className="lg:hidden"
        />
        <h2 className="text-lg font-semibold capitalize text-black-1 dark:text-white">
          {isHomePage ? "Dashboard" : pathname.split("/")[1]}
        </h2>
      </div>
      <div className="flex items-center justify-start gap-3.5">
        <IconButton iconSrc="/assets/icons/add-circle.svg" />
        <IconButton iconSrc="/assets/icons/search.svg" />
      </div>
    </div>
  );
};

export default Navbar;

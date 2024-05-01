"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";

const Sidebar = () => {
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
          <NavItems tooltipSide="right" />
        </div>

        {/* <div className="-rotate-90 text-nowrap text-sm font-semibold">
          Mohammed Sameer
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;

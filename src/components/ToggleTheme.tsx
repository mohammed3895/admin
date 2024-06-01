"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { IoMdSunny } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";
import { cn } from "~/lib/utils";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex w-full flex-col items-start justify-start">
      <h1 className="mb-2 text-sm font-medium text-primary">Mode</h1>
      <div className="flex w-full items-center gap-2">
        <button
          className={cn(
            "flex h-14 w-full items-center justify-center rounded-xl border",
            {
              "border-none bg-accent shadow-sm": theme === "light",
            },
          )}
          onClick={() => setTheme("light")}
        >
          <IoMdSunny className="h-5 w-5 text-primary" />
        </button>
        <button
          className={cn(
            "flex h-14 w-full items-center justify-center rounded-xl border",
            {
              "border-none bg-accent shadow-sm": theme === "dark",
            },
          )}
          onClick={() => setTheme("dark")}
        >
          <BsMoonStarsFill className="h-5 w-5 text-primary" />
        </button>
      </div>
    </div>
  );
}

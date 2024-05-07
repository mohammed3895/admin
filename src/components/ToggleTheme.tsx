"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import IconButton from "./shared/IconButton";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <>
          <IconButton
            iconSrc="/assets/icons/sun.svg"
            className="flex rotate-0 scale-100 transition-all dark:hidden dark:-rotate-90 dark:scale-0"
          />
          <IconButton
            iconSrc="/assets/icons/moon.svg"
            className="hidden rotate-0 scale-0 transition-all dark:flex dark:-rotate-90 dark:scale-100"
          />
        </>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

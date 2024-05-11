"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LaptopMinimal, Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <>
          <button className="flex h-9 w-9  items-center justify-center rounded-md bg-accent text-purple-1  transition-all dark:hidden dark:-rotate-90 dark:scale-0">
            <Sun className="h-4 w-4 " />
          </button>
          <button className="hidden h-9 w-9 rotate-0 scale-0 items-center justify-center rounded-md bg-accent text-purple-1  transition-all dark:flex dark:-rotate-90 dark:scale-100">
            <Moon className="h-4 w-4" />
          </button>
        </>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="rounded-sm border-none bg-accent p-2.5 text-sm font-normal shadow-lg"
      >
        <DropdownMenuItem
          className="flex w-full cursor-pointer items-center justify-start gap-2 rounded px-3 py-1.5 hover:bg-gray-200 dark:hover:bg-zinc-700"
          onClick={() => setTheme("light")}
        >
          <Sun className="h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex w-full cursor-pointer items-center justify-start gap-2 rounded px-3 py-1.5 hover:bg-gray-200 dark:hover:bg-zinc-700"
          onClick={() => setTheme("dark")}
        >
          <Moon className="h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex w-full cursor-pointer items-center justify-start gap-2 rounded px-3 py-1.5 hover:bg-gray-200 dark:hover:bg-zinc-700"
          onClick={() => setTheme("system")}
        >
          <LaptopMinimal className="h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

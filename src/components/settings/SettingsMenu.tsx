import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "~/lib/utils";
import { IoSettings } from "react-icons/io5";
import { ModeToggle } from "../ToggleTheme";

const SettingsMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button
          className={cn(
            "flex h-8 w-8 min-w-8 items-center justify-center rounded-md bg-gray-1 shadow-none transition-opacity ease-linear hover:opacity-80 dark:bg-accent",
          )}
        >
          <IoSettings className="h-5 w-5 text-purple-1" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 rounded-xl bg-background p-3.5">
        <div className="flex flex-col items-center justify-center gap-2">
          <ModeToggle />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsMenu;

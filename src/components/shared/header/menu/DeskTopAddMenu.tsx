import React from "react";
import MenuItems from "./MenuItems";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { CirclePlus } from "lucide-react";

const DeskTopAddMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-purple-1 md:bg-background">
          <CirclePlus className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-8 w-60 border-none shadow-lg">
        <MenuItems />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DeskTopAddMenu;

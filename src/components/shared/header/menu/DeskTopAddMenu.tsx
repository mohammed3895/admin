import React from "react";
import IconButton from "../../IconButton";
import MenuItems from "./MenuItems";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const DeskTopAddMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IconButton iconSrc="/assets/icons/add-circle.svg" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-8 w-60 border-none shadow-lg">
        <MenuItems />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DeskTopAddMenu;

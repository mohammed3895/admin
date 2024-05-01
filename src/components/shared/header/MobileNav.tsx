import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import IconButton from "../IconButton";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <IconButton
          iconSrc="/assets/icons/menu-icon.svg"
          className="lg:hidden"
        />
      </SheetTrigger>
      <SheetContent></SheetContent>
    </Sheet>
  );
};

export default MobileNav;

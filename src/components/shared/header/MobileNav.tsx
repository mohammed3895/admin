import { Menu } from "lucide-react";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <button className="flex h-9 w-9 items-center justify-center rounded-md bg-purple-2 text-purple-1">
          <Menu className="h-4 w-4" />
        </button>
      </SheetTrigger>
      <SheetContent></SheetContent>
    </Sheet>
  );
};

export default MobileNav;

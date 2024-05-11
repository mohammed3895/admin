import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "../../../ui/drawer";
import { CirclePlus, type LucideIcon } from "lucide-react";

interface DrawerProps {
  isOpen?: boolean;
  icon?: LucideIcon;
}

const MobileDrawerMenu = ({
  children,
  props,
}: {
  children: React.ReactNode;
  props?: DrawerProps;
}) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="flex h-9 w-9 items-center justify-center rounded-md bg-background text-purple-1">
          <CirclePlus className="h-4 w-4" />
        </button>
      </DrawerTrigger>
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  );
};

export default MobileDrawerMenu;

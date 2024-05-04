import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "../../../ui/drawer";
import { type LucideIcon } from "lucide-react";
import IconButton from "../../IconButton";

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
        <IconButton iconSrc="/assets/icons/add-circle.svg" />
      </DrawerTrigger>
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  );
};

export default MobileDrawerMenu;

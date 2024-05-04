import React from "react";
import { MOBILEMENUITEMS } from "~/constants/MobileMenu";
import MenuItem from "./MenuItem";

const MenuItems = () => {
  return (
    <div className="flex w-full flex-col">
      {MOBILEMENUITEMS.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuItems;

import React from "react";
import IconButton from "../IconButton";

const Navbar = () => {
  return (
    <div className="flex h-14 w-full items-center justify-between">
      <div className="flex items-center justify-start gap-3.5">
        <IconButton
          iconSrc="/assets/icons/menu-icon.svg"
          className="lg:hidden"
        />
        <h2 className="text-black-1 text-lg font-semibold dark:text-white">
          Dashboard
        </h2>
      </div>
      <div className="flex items-center justify-start gap-3.5">
        <IconButton iconSrc="/assets/icons/add-circle.svg" />
        <IconButton iconSrc="/assets/icons/search.svg" />
      </div>
    </div>
  );
};

export default Navbar;

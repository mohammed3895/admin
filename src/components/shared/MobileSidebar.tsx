"use client";
import NavItems from "./NavItems";

const MobileSidebar = () => {
  return (
    <div className="fixed bottom-0 z-50 h-16 w-full border-t bg-white shadow-md md:hidden">
      <div className="flex h-full w-full items-center justify-between gap-3 px-2">
        <NavItems tooltipSide="top" />
      </div>
    </div>
  );
};

export default MobileSidebar;

"use client";

import NavItems from "./NavItems";

const MobileSidebar = () => {
  return (
    <div className="fixed bottom-0 z-50 h-14 w-full border-t bg-background shadow-none md:hidden">
      <div className="flex h-full w-full items-center justify-between gap-3">
        <NavItems tooltipSide="top" />
      </div>
    </div>
  );
};

export default MobileSidebar;

import React from "react";
import { type MOBILEMENUITEMS } from "~/constants/MobileMenu";

interface ItemProps {
  item: (typeof MOBILEMENUITEMS)[number];
}

const MenuItem = ({ item }: ItemProps) => {
  return (
    <div className="w-full border-b border-accent last:border-none">
      <div className="flex w-full items-center justify-start gap-4 p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-purple-2 text-purple-1">
          <item.icon className="h-6 w-6" />
        </div>
        <h2 className="font-semibold capitalize">{item.title}</h2>
      </div>
    </div>
  );
};

export default MenuItem;

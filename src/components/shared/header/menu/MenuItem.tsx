import React from "react";
import { type MOBILEMENUITEMS } from "~/constants/MobileMenu";

interface ItemProps {
  item: (typeof MOBILEMENUITEMS)[number];
}

const MenuItem = ({ item }: ItemProps) => {
  return (
    <div className="w-full border-b border-accent last:border-none">
      <div className="flex w-full items-center justify-start gap-4 p-4">
        <div className="flex h-10 w-10 min-w-10 items-center justify-center rounded-md bg-purple-2 text-purple-1">
          <item.icon strokeWidth={1.2} className="h-5 w-5" />
        </div>
        <div className="flex w-full flex-col items-start justify-start">
          <h2 className="font-medium capitalize">{item.title}</h2>
          <p className="truncate text-xs font-light capitalize text-muted-foreground">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

import { LucideMoreHorizontal } from "lucide-react";
import React from "react";
import { cn } from "~/lib/utils";

const MoreBtn = ({ className }: { className: string }) => {
  return (
    <button
      className={cn(
        "flex h-6 w-6 items-center justify-center rounded-md border text-muted-foreground shadow-none dark:border-primary/5",
        className,
      )}
    >
      <LucideMoreHorizontal className="h-5 w-5 text-gray-400" />
    </button>
  );
};

export default MoreBtn;

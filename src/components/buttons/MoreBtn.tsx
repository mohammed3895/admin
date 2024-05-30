import { LucideMoreHorizontal } from "lucide-react";
import React from "react";
import { cn } from "~/lib/utils";

const MoreBtn = ({ className }: { className?: string }) => {
  return (
    <button
      className={cn(
        "flex h-6 w-6 min-w-6 items-center justify-center rounded-md bg-border shadow-none",
        className,
      )}
    >
      <LucideMoreHorizontal
        strokeWidth={2}
        size={20}
        className="h-4 w-4 text-foreground"
      />
    </button>
  );
};

export default MoreBtn;

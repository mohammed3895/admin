import { LucideMoreHorizontal } from "lucide-react";
import React from "react";
import { cn } from "~/lib/utils";

const MoreBtn = ({ className }: { className?: string }) => {
  return (
    <button
      className={cn(
        "flex h-6 w-6 items-center justify-center rounded border text-muted-foreground shadow-none dark:border-zinc-600",
        className,
      )}
    >
      <LucideMoreHorizontal className="h-4 w-4 text-muted-foreground dark:text-zinc-600" />
    </button>
  );
};

export default MoreBtn;

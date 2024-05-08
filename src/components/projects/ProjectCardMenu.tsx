"use client";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ClipboardPlus, Info, LucideMoreHorizontal, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const ProjectCardMenu = ({ id }: { id?: string }) => {
  const router = useRouter();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex h-8 w-8 items-center justify-center rounded-md border text-gray-400 shadow-none">
          <LucideMoreHorizontal className="h-5 w-5 text-gray-400" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-36 rounded-lg border-none bg-secondary">
        <div className="flex h-full w-full flex-col gap-1">
          <Button
            variant="ghost"
            className="flex w-full scroll-m-20 items-center justify-start gap-2 text-left text-xs font-medium uppercase tracking-tight text-zinc-800 hover:bg-zinc-200 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            <ClipboardPlus className="h-4 w-4" />
            New Task
          </Button>
          <Button
            variant="ghost"
            className="flex w-full scroll-m-20 items-center justify-start gap-2 text-left text-xs font-medium uppercase tracking-tight text-zinc-800 hover:bg-zinc-200 dark:text-zinc-100 dark:hover:bg-zinc-700"
          >
            <Info className="h-4 w-4" />
            Details
          </Button>
          <Button
            variant="destructive"
            className="flex w-full scroll-m-20 items-center justify-start gap-2 text-left text-xs font-medium uppercase tracking-tight"
          >
            <Trash className="h-4 w-4" />
            Delete
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProjectCardMenu;

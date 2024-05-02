"use client";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LucideMoreHorizontal } from "lucide-react";
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
      <PopoverContent className="w-36 rounded-lg border-none">
        <div className="flex h-full w-full flex-col gap-1">
          <Button
            variant="ghost"
            className="w-full scroll-m-20 text-xs font-medium uppercase tracking-tight"
          >
            New Task
          </Button>
          <Button
            variant="ghost"
            className="w-full scroll-m-20 text-xs font-medium uppercase tracking-tight"
            onClick={() => router.push(`/projects/${id}`)}
          >
            details
          </Button>
          <Button
            variant="destructive"
            className="w-full text-xs font-medium uppercase"
          >
            delete
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProjectCardMenu;

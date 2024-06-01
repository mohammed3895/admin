"use client";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Info, Trash } from "lucide-react";
import AddTask from "./AddTask";
import MoreBtn from "../buttons/MoreBtn";
import Link from "next/link";

const ProjectCardMenu = ({ id }: { id?: string }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <MoreBtn />
      </PopoverTrigger>
      <PopoverContent className="w-36 rounded-xl border-none bg-card">
        <div className="flex h-full w-full flex-col gap-1">
          <AddTask />
          <Link
            href={`/projects/${id}`}
            className="flex cursor-pointer items-center justify-start gap-2 text-nowrap rounded-md p-2.5 text-xs font-normal uppercase transition-all ease-in-out hover:bg-accent hover:opacity-95 dark:text-white"
          >
            <Info size={20} strokeWidth={1.35} className="h-5 w-5" />
            Details
          </Link>
          <div className="flex cursor-pointer items-center justify-start gap-2 text-nowrap rounded-md p-2.5 text-xs font-normal uppercase transition-all ease-in-out hover:bg-accent hover:opacity-95 dark:text-white">
            <Trash size={20} strokeWidth={1.35} className="h-5 w-5" />
            Delete
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProjectCardMenu;

import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Link2, ListChecks, MessagesSquare } from "lucide-react";
import { cn } from "~/lib/utils";
import Image from "next/image";

export interface TaskProps {
  task: { id: number; name: string; status: string };
  user: {
    name: string;
    email: string;
    image: string;
  };
}

const TaskCard = ({ task, user }: TaskProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-2.5 rounded-lg border p-3 dark:border-primary/5 md:flex-row">
      <div className="flex w-full items-center justify-start gap-2.5 md:w-1/3">
        <Checkbox
          id={task.name}
          className="h-4 w-4 border bg-transparent shadow-none transition-colors ease-in-out dark:bg-input "
        />
        <Label
          htmlFor={task.name}
          className="truncate text-sm font-bold text-foreground md:text-base"
        >
          {task.name}
        </Label>
      </div>
      <div className="flex w-full flex-row-reverse items-center justify-end gap-3 text-nowrap text-purple-1 md:w-3/4 md:flex-row md:gap-5">
        <div className="flex items-center justify-center gap-1.5 text-xs md:text-sm">
          <ListChecks size={16} />
          <span>3 / 9</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-xs md:text-sm">
          <Link2 size={16} />
          <span>4</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-xs md:text-sm">
          <MessagesSquare size={16} />
          <span>3</span>
        </div>

        <div
          className={cn(
            "flex items-center justify-center rounded-md bg-green-2 px-2 py-1 text-[8px] capitalize text-green-1 md:text-xs",
            { "bg-purple-2 text-purple-1": task.status === "on hold" },
            { "bg-yellow-2 text-yellow-1": task.status === "pending" },
          )}
        >
          <span>{task.status}</span>
        </div>
        <div className="h-6 w-6 rounded-md">
          <Image
            src={user.image}
            alt=""
            width={50}
            height={50}
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Link2, ListChecks, MessagesSquare } from "lucide-react";
import { cn } from "~/lib/utils";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

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
    <div className="flex w-full flex-col items-center justify-between gap-2.5 rounded-lg border bg-background px-4 py-5 md:flex-row">
      <div className="flex w-full items-center justify-start gap-2.5 md:w-1/3">
        <Checkbox
          id={task.name}
          className="h-4 w-4 border bg-transparent shadow-none transition-colors ease-in-out dark:bg-input dark:text-white"
        />
        <Label
          htmlFor={task.name}
          className="truncate text-sm font-medium text-foreground md:text-base"
        >
          {task.name}
        </Label>
      </div>
      <div className="flex w-full flex-row-reverse items-center justify-between gap-3 text-nowrap text-purple-1 md:w-3/4 md:flex-row md:gap-5">
        <div className="flex items-center justify-center gap-3.5">
          <div className="flex items-center justify-center gap-1.5 text-xs">
            <ListChecks size={16} />
            <span>3/9</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-xs">
            <Link2 size={16} />
            <span>4</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-xs">
            <MessagesSquare size={16} />
            <span>3</span>
          </div>
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
          <HoverCard openDelay={50} closeDelay={50}>
            <HoverCardTrigger>
              <Image
                src={user.image}
                alt=""
                width={50}
                height={50}
                className="h-full w-full rounded-md object-cover"
              />
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex items-center justify-center gap-3 rounded-md">
                <div className="h-12 w-12 min-w-12 rounded-full">
                  <Image
                    src={user.image}
                    alt=""
                    width={50}
                    height={50}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <h3 className="text-sm font-normal capitalize">
                    {user.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

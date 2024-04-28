import React from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
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
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex h-16 w-full items-center justify-between gap-3 rounded-lg border p-3">
          <div className="flex items-center justify-start gap-2.5">
            <Checkbox id={task.name} className="h-4 w-4 shadow-none" />
            <Label
              htmlFor={task.name}
              className="truncate text-sm font-bold md:text-base"
            >
              {task.name}
            </Label>
          </div>
          <div className="flex items-center justify-end gap-3.5 text-nowrap text-purple-1 md:gap-5">
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
                "flex items-center justify-center rounded-md bg-green-2 px-3 py-1 text-xs capitalize text-green-1 md:text-sm",
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
      </DialogTrigger>
    </Dialog>
  );
};

export default TaskCard;

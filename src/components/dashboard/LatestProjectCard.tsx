import Image from "next/image";
import React from "react";
import { type ProjectProps } from "../projects/tabs/TasksTab";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "~/lib/utils";

const LatestProjectCard = ({ project }: ProjectProps) => {
  const usersNum = project.users.length;

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center justify-start gap-2.5">
        <div className="flex h-14 w-14 min-w-14 items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-800">
          <div className="h-6 w-6">
            <Image
              src={project.image}
              alt=""
              width={20}
              height={20}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-start">
          <div className="flex items-center justify-start gap-1.5">
            <h3 className="text-base font-medium capitalize">
              {project.title}
            </h3>
            <div
              className={cn(
                "flex items-center justify-center text-xs font-medium capitalize text-green-1 md:text-xs",
                { "text-purple-1": project.status === "on hold" },
                { "text-yellow-1": project.status === "pending" },
              )}
            >
              <span>{project.status}</span>
            </div>
          </div>
          <p className="text-xs font-normal text-muted-foreground">
            {project.role}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end justify-end gap-1">
        <div className="flex items-center justify-end gap-px">
          {project.users.slice(0, 1).map((user, i) => (
            <div className="h-5 w-5 rounded-sm md:h-6 md:w-6 " key={i}>
              <Image
                src={user.image}
                alt=""
                width={50}
                height={50}
                className="h-full w-full rounded-sm object-cover"
              />
            </div>
          ))}

          {usersNum - 1 > 0 && (
            <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-input text-xs text-muted-foreground dark:bg-neutral-700 md:h-6 md:w-6">
              +{usersNum - 1}
            </div>
          )}
        </div>
        <div className="flex items-center justify-end gap-1.5 text-muted-foreground hover:text-primary">
          <Link
            href={`/projects/${project.id}`}
            className="text-xs  hover:underline"
          >
            View
          </Link>
          <ArrowRight className="h-2.5 w-2.5" />
        </div>
      </div>
    </div>
  );
};

export default LatestProjectCard;

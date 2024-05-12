import React from "react";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";
import Image from "next/image";
import ProjectCardMenu from "./ProjectCardMenu";
import { type ProjectProps } from "./tabs/TasksTab";
import { cn } from "~/lib/utils";

const ProjectCard = ({ project, loading }: ProjectProps) => {
  const usersNum = project.users.length;
  const tasksNum = project.tasks?.length;
  const tasksCompleted = project.tasks?.filter(function (el) {
    return el.status === "done";
  });
  const task = Array.from(tasksCompleted ?? []).length;
  console.log(task);

  function getProgressColor(
    task: number,
  ): "bg-green-1" | "bg-yellow-1" | "bg-red-1" {
    if (task === tasksNum) return "bg-green-1";
    if (task >= tasksNum / 2) return "bg-yellow-1";
    return "bg-red-1";
  }

  return (
    <Card
      className={cn(
        "invisible rounded-md border border-border bg-transparent py-2.5 shadow-none duration-500 ease-linear animate-in fade-in-0",
        { visible: loading },
      )}
    >
      <CardContent>
        <div className="flex w-full flex-col items-center gap-3">
          <div className="flex w-full items-start justify-between gap-3 pt-3">
            <Progress
              className="h-1.5 w-10 bg-input text-green-1 dark:bg-neutral-800"
              indicatorBg={getProgressColor(task)}
              value={task * 10}
              max={tasksNum * 10}
            />
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-purple-2">
              <Image
                src={project.image ?? "/assets/icons/logo.svg"}
                width={100}
                height={100}
                alt=""
                className="h-6 w-6"
              />
            </div>
            <ProjectCardMenu id={project.id} />
          </div>
          <div className="flex w-full flex-col items-center">
            <h3 className="text-lg font-medium capitalize">{project.title}</h3>
            <p className="text-sm font-normal text-muted-foreground">
              {project.role}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-medium">
              {task} / {tasksNum}
            </h3>
            <p className="text-sm font-normal text-muted-foreground">
              Tasks Completed
            </p>
          </div>

          <div className="mt-1.5 flex w-full items-center justify-center gap-px">
            {project.users.slice(0, 3).map((user, i) => (
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

            {usersNum - 3 > 0 && (
              <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-input text-xs text-muted-foreground dark:bg-neutral-700 md:h-6 md:w-6">
                +{usersNum - 3}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

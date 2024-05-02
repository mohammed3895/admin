import React from "react";
import { type PROJECTS } from "~/constants/projects";
import TaskCard from "../TaskCard";
import { Checkbox } from "~/components/ui/checkbox";

export interface ProjectProps {
  project: (typeof PROJECTS)[number];
}

const TasksTab = ({ project }: ProjectProps) => {
  const tasks = project.tasks;
  const users = project.users;

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="flex w-full flex-col space-y-2 px-3">
      <div className="flex h-16 w-full items-center justify-start gap-3 rounded-lg border border-dashed p-3 dark:border-primary/5">
        <Checkbox className="border dark:border-primary/5" />
        <h3 className="text-base font-bold text-muted-foreground">
          Add New Task
        </h3>
      </div>
      {tasks.map((task, i) => (
        <TaskCard
          key={i}
          task={task}
          user={project.users[getRandomInt(users.length)]!}
        />
      ))}
    </div>
  );
};

export default TasksTab;

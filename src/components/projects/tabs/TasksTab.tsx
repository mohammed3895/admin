import React from "react";
import { type PROJECTS } from "~/constants/projects";
import TaskCard from "../TaskCard";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import AddTask from "../AddTask";

export interface ProjectProps {
  project: (typeof PROJECTS)[number];
  loading: boolean;
}

const TasksTab = ({ project }: ProjectProps) => {
  const tasks = project.tasks;
  const users = project.users;

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="flex w-full flex-col space-y-2 px-4">
      <div className="flex h-16 w-full items-center justify-start gap-3  pb-3">
        <AddTask />
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

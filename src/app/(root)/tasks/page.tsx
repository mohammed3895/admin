import React from "react";
import { type ProjectProps } from "~/components/projects/tabs/TasksTab";
import TaskCard from "~/components/projects/TaskCard";
import { PROJECTS } from "~/constants/projects";

const TasksPage = () => {
  const tasks = PROJECTS[0]?.tasks;
  const users = PROJECTS[0]?.users;

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="flex w-full flex-col space-y-2">
      {tasks?.map((task, i) => (
        <TaskCard
          key={i}
          task={task}
          user={
            PROJECTS[0]?.users[getRandomInt(PROJECTS[0]?.users.length)] ?? {
              name: "",
              email: "",
              image: "",
            }
          }
        />
      ))}
    </div>
  );
};

export default TasksPage;

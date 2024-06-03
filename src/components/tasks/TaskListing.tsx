import React from "react";
import TaskCard from "../projects/TaskCard";
import { PROJECTS } from "~/constants/projects";

const TaskListing = ({
  status,
}: {
  status: "all" | "pending" | "done" | "on hold";
}) => {
  const tasks = PROJECTS[0]?.tasks;

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="mb-16 flex h-full w-full flex-col gap-1">
      {tasks
        ?.filter((task) => {
          if (status === "all") return true;
          return task.status === status;
        })

        .map((task, i) => (
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

export default TaskListing;

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { type ProjectProps } from "./TasksTab";
import KanbanDeskCard from "../KanbanDeskCard";

const DeskTabMobile = ({ project }: ProjectProps) => {
  const todoTasks = project.tasks.filter((task) => task.status === "on hold");
  const inProgressTasks = project.tasks.filter(
    (task) => task.status === "pending",
  );
  const doneTasks = project.tasks.filter((task) => task.status === "done");

  return (
    <div className="flex h-full w-full rounded-lg bg-gray-50 p-2 md:hidden">
      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="flex w-full justify-between bg-transparent">
          <TabsTrigger
            value="pending"
            className="w-full bg-gray-50 px-4 py-2 text-sm font-bold capitalize tracking-tight text-black-1 data-[state=active]:bg-white data-[state=active]:text-muted-foreground data-[state=active]:shadow-md"
          >
            pending
          </TabsTrigger>
          <TabsTrigger
            value="onhold"
            className="w-full bg-gray-50 px-4 py-2 text-sm font-bold capitalize tracking-tight text-black-1 data-[state=active]:bg-white data-[state=active]:text-muted-foreground data-[state=active]:shadow-md"
          >
            on hold
          </TabsTrigger>
          <TabsTrigger
            value="done"
            className="w-full bg-gray-50 px-4 py-2 text-sm font-bold capitalize tracking-tight text-black-1 data-[state=active]:bg-white data-[state=active]:text-muted-foreground data-[state=active]:shadow-md"
          >
            done
          </TabsTrigger>
        </TabsList>
        <TabsContent value="pending">
          <div className="flex flex-col gap-3">
            {inProgressTasks.map((task, i) => (
              <KanbanDeskCard loading i={i} project={project} key={i} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="onhold">
          <div className="flex flex-col gap-3">
            {todoTasks.map((task, i) => (
              <KanbanDeskCard loading i={i} project={project} key={i} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="done">
          <div className="flex flex-col gap-3">
            {doneTasks.map((task, i) => (
              <KanbanDeskCard loading i={i} project={project} key={i} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DeskTabMobile;

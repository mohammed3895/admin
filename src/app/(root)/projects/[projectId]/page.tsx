"use client";
import { Activity, FolderClosed, ListChecks, Settings } from "lucide-react";
import React, { useState } from "react";
import ActivityTab from "~/components/projects/tabs/ActivityTab";
import FilesTab from "~/components/projects/tabs/FilesTab";
import SettingsTab from "~/components/projects/tabs/SettingsTab";
import TasksTab from "~/components/projects/tabs/TasksTab";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { PROJECTS } from "~/constants/projects";
import { cn } from "~/lib/utils";
interface ParamsProp {
  params: {
    projectId: string;
  };
}

const tabsList = [
  {
    name: "tasks",
    icon: ListChecks,
    component: TasksTab,
  },
  {
    name: "activity",
    icon: Activity,
    component: ActivityTab,
  },
  {
    name: "files",
    icon: FolderClosed,
    component: FilesTab,
  },

  {
    name: "settings",
    icon: Settings,
    component: SettingsTab,
  },
];

const ProjectDetailsPage = ({ params }: ParamsProp) => {
  const [activeTab, setActiveTab] = useState(0);

  const project = PROJECTS.find((el) => {
    return el.id === params.projectId;
  });

  return (
    <div defaultValue="tasks">
      <ul className="mb-3 flex h-full flex-wrap justify-start gap-1 bg-transparent">
        {/* <ScrollArea className="flex w-full items-center"> */}
        {tabsList.map((tab, i) => (
          <div
            key={i}
            className={cn(
              "flex cursor-pointer items-center justify-center gap-1.5 rounded bg-purple-2 px-2.5 py-1 text-purple-1 transition-colors ease-in-out hover:bg-purple-1 hover:text-white",
              { "bg-purple-1 text-white": activeTab === i },
            )}
            onClick={() => setActiveTab(i)}
          >
            <tab.icon size={16} />
            <span className="text-xs">{tab.name.toUpperCase()}</span>
          </div>
        ))}
        {/* </ScrollArea> */}
      </ul>
      {tabsList.map((tab, i) => (
        <div key={i} className={cn("hidden w-full", { flex: activeTab === i })}>
          <div className="w-full">
            <tab.component project={project!} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetailsPage;

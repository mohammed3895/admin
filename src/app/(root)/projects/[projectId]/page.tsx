"use client";
import { Activity, FolderClosed, ListChecks, Settings } from "lucide-react";
import React, { useEffect, useState } from "react";
import ActivityTab from "~/components/projects/tabs/ActivityTab";
import FilesTab from "~/components/projects/tabs/FilesTab";
import SettingsTab from "~/components/projects/tabs/SettingsTab";
import TasksTab from "~/components/projects/tabs/TasksTab";
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
  const [tabList, setTabList] = useState<typeof tabsList>([]);

  const project = PROJECTS.find((el) => {
    return el.id === params.projectId;
  });

  useEffect(() => {
    setTabList(tabsList);
  }, []);

  return (
    <div defaultValue="tasks">
      <ul className="mx-2 mb-6 flex h-full w-fit flex-wrap justify-start gap-1.5 rounded-sm bg-accent p-1">
        {/* <ScrollArea className="flex w-full items-center"> */}
        {tabList.map((tab, i) => (
          <div
            key={i}
            className={cn(
              "flex cursor-pointer items-center justify-center gap-1.5 rounded bg-background px-3.5 py-2 text-purple-1 transition-colors ease-in-out hover:bg-purple-1 hover:text-white",
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
            <tab.component loading project={project!} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetailsPage;

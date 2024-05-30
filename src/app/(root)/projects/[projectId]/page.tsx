"use client";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  FolderClosed,
  ListChecks,
  Settings,
} from "lucide-react";
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
  const [activeTab, setActiveTab] = useState<number>(0);
  const [tabList, setTabList] = useState<typeof tabsList>([]);

  const project = PROJECTS.find((el) => {
    return el.id === params.projectId;
  });

  useEffect(() => {
    setTabList(tabsList);
  }, []);

  const incrementTabHandeller = () => {
    if (activeTab + 1 === tabList.length) {
      return;
    }

    setActiveTab(activeTab + 1);
  };
  const decrementTabHandeller = () => {
    if (activeTab === 0) {
      return;
    }

    setActiveTab(activeTab - 1);
  };

  return (
    <div>
      <div className="fixed top-14 flex h-14 w-full items-center justify-between gap-6 border-t bg-background p-4 md:relative md:top-0 md:bg-transparent">
        {tabList.map((tab, i) => (
          <div
            key={i}
            className={cn(
              "hidden w-fit cursor-pointer items-center justify-start gap-1.5 py-2 text-purple-1",
              { flex: activeTab === i },
            )}
          >
            <tab.icon size={20} className="" />
            <span className="text-sm font-medium tracking-tight">
              {tab.name.toUpperCase()}
            </span>
          </div>
        ))}
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={decrementTabHandeller}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-md bg-accent text-purple-1",
            )}
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={incrementTabHandeller}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-md bg-accent text-purple-1",
            )}
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      {tabsList.map((tab, i) => (
        <div key={i} className={cn("hidden w-full", { flex: activeTab === i })}>
          <div className="w-full bg-accent p-4 md:rounded-md">
            <tab.component loading project={project!} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetailsPage;

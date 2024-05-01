import {
  Activity,
  FolderClosed,
  ListChecks,
  MessageSquareWarning,
  Settings,
  Tv2,
} from "lucide-react";
import React from "react";
import KanbanDeskCard from "~/components/projects/KanbanDeskCard";
import ActivityTab from "~/components/projects/tabs/ActivityTab";
import DeskTab from "~/components/projects/tabs/DeskTab";
import FilesTab from "~/components/projects/tabs/FilesTab";
import ReportsTab from "~/components/projects/tabs/ReportsTab";
import SettingsTab from "~/components/projects/tabs/SettingsTab";
import TasksTab from "~/components/projects/tabs/TasksTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { PROJECTS } from "~/constants/projects";
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
    name: "desk",
    icon: Tv2,
    component: DeskTab,
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
    name: "reports",
    icon: MessageSquareWarning,
    component: ReportsTab,
  },
  {
    name: "settings",
    icon: Settings,
    component: SettingsTab,
  },
];

const ProjectDetailsPage = ({ params }: ParamsProp) => {
  const project = PROJECTS.find((el) => {
    return el.id === params.projectId;
  });

  return (
    <div className="h-full w-full flex-col rounded-xl bg-white p-4">
      <Tabs defaultValue="tasks" className="h-full w-full">
        <TabsList className="flex h-full w-full flex-wrap justify-start gap-2.5 bg-transparent lg:flex-nowrap">
          {tabsList.map((tab, i) => (
            <TabsTrigger
              value={tab.name}
              key={i}
              className="flex items-center justify-center gap-2"
            >
              <tab.icon size={16} />
              <span className="text-xs">{tab.name.toUpperCase()}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsList.map((tab, i) => (
          <TabsContent
            key={i}
            value={tab.name.toLowerCase()}
            className="flex w-full"
          >
            <tab.component project={project!} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ProjectDetailsPage;

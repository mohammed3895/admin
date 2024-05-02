import { Activity, FolderClosed, ListChecks, Settings } from "lucide-react";
import React from "react";
import ActivityTab from "~/components/projects/tabs/ActivityTab";
import FilesTab from "~/components/projects/tabs/FilesTab";
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
  const project = PROJECTS.find((el) => {
    return el.id === params.projectId;
  });

  return (
    <div className="mx-0 h-full w-full  flex-col items-center overflow-x-hidden rounded-none bg-card p-2 md:rounded-xl">
      <div className="mx-auto w-full">
        <Tabs defaultValue="tasks" className="h-full w-full">
          <TabsList className="flex h-full w-full justify-between gap-1 bg-transparent md:justify-start lg:flex-nowrap">
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
    </div>
  );
};

export default ProjectDetailsPage;

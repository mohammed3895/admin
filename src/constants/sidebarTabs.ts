import {
  BriefcaseBusiness,
  Clipboard,
  Cog,
  LayoutDashboard,
  Mails,
  Trello,
  UserRound,
} from "lucide-react";

export const SidebarTabs = [
  {
    name: "Dashboard",
    path: "",
    icon: LayoutDashboard,
  },
  {
    name: "Projects",
    path: "projects",
    icon: BriefcaseBusiness,
  },
  {
    name: "Tasks",
    path: "tasks",
    icon: Clipboard,
  },
  {
    name: "Kanban",
    path: "kanban",
    icon: Trello,
  },
  {
    name: "Messages",
    path: "messages",
    icon: Mails,
  },
  {
    name: "Settings",
    path: "settings",
    icon: Cog,
  },
  {
    name: "Profile",
    path: "profile",
    icon: UserRound,
  },
];

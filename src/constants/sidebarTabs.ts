import { HiBriefcase } from "react-icons/hi";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { GrTasks } from "react-icons/gr";
import { BsKanbanFill } from "react-icons/bs";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

export const SidebarTabs = [
  {
    name: "Dashboard",
    path: "",
    icon: RiDashboardHorizontalFill,
  },
  {
    name: "Projects",
    path: "projects",
    icon: HiBriefcase,
  },
  {
    name: "Tasks",
    path: "tasks",
    icon: GrTasks,
  },
  {
    name: "Kanban",
    path: "kanban",
    icon: BsKanbanFill,
  },
  {
    name: "Messages",
    path: "messages",
    icon: BiSolidMessageSquareDetail,
  },

  {
    name: "Profile",
    path: "profile",
    icon: FaUser,
  },
];

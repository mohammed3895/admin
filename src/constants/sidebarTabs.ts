import { HiBriefcase } from "react-icons/hi";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { GoTasklist } from "react-icons/go";
import { BsKanbanFill } from "react-icons/bs";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoIosCog } from "react-icons/io";
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
    icon: GoTasklist,
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
    name: "Settings",
    path: "settings",
    icon: IoIosCog,
  },
  {
    name: "Profile",
    path: "profile",
    icon: FaUser,
  },
];

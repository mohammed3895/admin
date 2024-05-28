import { CubeIcon } from "@radix-ui/react-icons";
import {
  BriefcaseBusiness,
  CalendarRange,
  ClipboardCheck,
  CreditCard,
  Laptop,
  UserPlus,
} from "lucide-react";

export const MOBILEMENUITEMS = [
  {
    id: "project",
    title: "projects",
    desc: "Create Project",
    icon: BriefcaseBusiness,
    onClick: () => console.log("clicked"),
  },
  {
    id: "task",
    title: "tasks",
    desc: "Add Task to exist project",
    icon: ClipboardCheck,
    onClick: () => console.log("clicked"),
  },
  {
    id: "contact",
    title: "contacts",
    desc: "search for friends or import from contacts",
    icon: UserPlus,
    onClick: () => console.log("clicked"),
  },
  {
    id: "event",
    title: "events",
    desc: "View events or create one",
    icon: CalendarRange,
    onClick: () => console.log("clicked"),
  },
  {
    id: "product",
    title: "products",
    desc: "upload new product or choose from storage",
    icon: CubeIcon,
    onClick: () => console.log("clicked"),
  },
  {
    id: "invoice",
    title: "invoices",
    desc: "Manage your salary",
    icon: CreditCard,
    onClick: () => console.log("clicked"),
  },
];

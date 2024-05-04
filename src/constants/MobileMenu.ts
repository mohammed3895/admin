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
    id: "new_project",
    title: "new project",
    icon: BriefcaseBusiness,
    onClick: () => console.log("clicked"),
  },
  {
    id: "new_task",
    title: "new task",
    icon: ClipboardCheck,
    onClick: () => console.log("clicked"),
  },
  {
    id: "new_contact",
    title: "new contact",
    icon: UserPlus,
    onClick: () => console.log("clicked"),
  },
  {
    id: "new_event",
    title: "new event",
    icon: CalendarRange,
    onClick: () => console.log("clicked"),
  },
  {
    id: "new_product",
    title: "new product",
    icon: CubeIcon,
    onClick: () => console.log("clicked"),
  },
  {
    id: "new_invoice",
    title: "new invoice",
    icon: CreditCard,
    onClick: () => console.log("clicked"),
  },
];

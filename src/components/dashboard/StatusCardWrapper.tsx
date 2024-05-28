import { BadgeDollarSign, LaptopMinimal, Users } from "lucide-react";
import React from "react";
import StatusCard from "./StatusCard";

export const STATS = [
  {
    name: "users",
    value: "12.2k",
    iconName: Users,
    iconColor: "green-1",
    iconBg: "green-2",
  },
  {
    name: "Projects",
    value: 59,
    iconName: LaptopMinimal,
    iconColor: "red-1",
    iconBg: "red-2",
  },
  {
    name: "Followers",
    value: "22.3K",
    iconName: Users,
    iconColor: "yellow-1",
    iconBg: "yellow-2",
  },
  {
    name: "Total income",
    value: "$ 422,450",
    iconName: BadgeDollarSign,
    iconColor: "purple-1",
    iconBg: "purple-2",
  },
];

const StatusCardWrapper = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {STATS.map((stat, i) => (
        <StatusCard stat={stat} key={i} />
      ))}
    </div>
  );
};

export default StatusCardWrapper;

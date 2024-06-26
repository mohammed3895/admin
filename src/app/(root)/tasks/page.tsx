"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import AllTasks from "~/components/tasks/AllTasks";
import DoneTasks from "~/components/tasks/DoneTasks";
import OnHoldTasks from "~/components/tasks/OnHoldTasks";
import PendingTasks from "~/components/tasks/PendingTasks";
import { cn } from "~/lib/utils";

const tabsList = [
  {
    name: "all",
    component: AllTasks,
  },
  {
    name: "pending",
    component: PendingTasks,
  },
  {
    name: "on hold",
    component: OnHoldTasks,
  },
  {
    name: "done",
    component: DoneTasks,
  },
];

const TasksPage = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [tabList, setTabList] = useState<typeof tabsList>([]);

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
    <div className="">
      <div className="fixed top-14 flex h-14 w-full items-center justify-between gap-6 border-t bg-background p-4 md:relative md:top-4">
        {tabList.map((tab, i) => (
          <div
            key={i}
            className={cn(
              "hidden w-fit cursor-pointer items-center justify-start gap-1.5 py-2 text-purple-1",
              { flex: activeTab === i },
            )}
          >
            <span className="text-sm font-medium tracking-tight">
              {tab.name.toUpperCase()}
            </span>
          </div>
        ))}
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={decrementTabHandeller}
            className={cn(
              "flex h-8 w-8  items-center justify-center rounded-md bg-accent text-purple-1",
              { "cursor-not-allowed": activeTab === 0 },
            )}
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={incrementTabHandeller}
            className={cn(
              "flex h-8 w-8  items-center justify-center rounded-md bg-accent text-purple-1",
              { "cursor-not-allowed": activeTab === tabList.length - 1 },
            )}
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      {tabsList.map((tab, i) => (
        <div
          key={i}
          className={cn("hidden h-full w-full", { flex: activeTab === i })}
        >
          <div className="mt-14 h-full w-full p-4">
            <tab.component />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TasksPage;

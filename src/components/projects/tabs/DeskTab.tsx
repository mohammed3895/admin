"use client";
import { PlusCircle } from "lucide-react";
import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import KanbanDeskCard from "../KanbanDeskCard";

const DeskTab = () => {
  const [toDo, setToDo] = useState([]);
  const [inProgress, setIn] = useState([]);
  const [done, setdDone] = useState([]);

  return (
    <div className="flex h-full min-h-svh w-full flex-1 items-start justify-between gap-6">
      <div className="h-full w-full rounded-lg border border-dashed p-4 ">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-sm font-bold capitalize">To Do</h1>
          <Button
            variant="ghost"
            className="flex items-center justify-center gap-2.5 font-semibold"
          >
            <PlusCircle size={18} /> New Task
          </Button>
        </div>

        <div className="flex flex-col gap-3">
          <KanbanDeskCard />
          <KanbanDeskCard />
          <KanbanDeskCard />
        </div>
      </div>

      {/* In Progress */}
      <div className="flex h-full w-full flex-col gap-3 rounded-lg border border-dashed p-4">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-sm font-bold capitalize">In Progress</h1>
        </div>

        <div className="flex flex-col gap-3">
          <KanbanDeskCard />
          <KanbanDeskCard />
        </div>
      </div>

      {/* Done */}
      <div className="flex h-full w-full flex-col gap-3 rounded-lg  border border-dashed p-4">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-sm font-bold capitalize">Done</h1>
        </div>

        <div className="flex flex-col gap-3">
          <KanbanDeskCard />
        </div>
      </div>
    </div>
  );
};

export default DeskTab;

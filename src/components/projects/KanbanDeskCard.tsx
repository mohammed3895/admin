import React from "react";
import MoreBtn from "../buttons/MoreBtn";
import { Progress } from "../ui/progress";
import { ListChecks } from "lucide-react";
import Image from "next/image";

const KanbanDeskCard = () => {
  return (
    <div
      className="flex h-44 w-full cursor-grab flex-col justify-between rounded-lg border p-4"
      draggable={true}
      onDragStart={(e: React.DragEvent) => {
        e.dataTransfer.setData("task", JSON.stringify({ id: "test" }));
      }}
    >
      {/*  */}
      <div className="flex w-full items-center justify-between gap-6">
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-sm font-semibold capitalize">Title</h2>
          <h3 className="text-xs font-medium capitalize text-muted-foreground">
            Desc
          </h3>
        </div>
        <MoreBtn />
      </div>

      {/*  */}
      <div className="flex w-full flex-col">
        <div className="mb-1.5 flex w-full items-center justify-between text-sm font-semibold text-muted-foreground">
          <div className=" flex items-center justify-start gap-2.5 ">
            <ListChecks size={16} />{" "}
            <span className="text-sm font-semibold ">Progress</span>
          </div>
          <span>3 / 12</span>
        </div>
        <Progress value={30} max={120} className="h-1 w-full bg-gray-100" />
      </div>

      {/*  */}
      <div className="flex w-full items-center justify-between">
        <div className="rounded-md bg-input px-3 py-1.5">
          <h3 className="text-xs font-semibold text-muted-foreground">
            24 Aug 2023
          </h3>
        </div>

        <div className="flex items-center justify-end gap-px">
          {[
            "https://randomuser.me/api/portraits/women/30.jpg",
            "https://randomuser.me/api/portraits/women/34.jpg",
          ].map((_, i) => (
            <div className="h-5 w-5 rounded-md md:h-7 md:w-7 " key={i}>
              <Image
                src={_}
                alt=""
                width={50}
                height={50}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          ))}

          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-input text-xs text-muted-foreground md:h-7 md:w-7">
            +3
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanDeskCard;

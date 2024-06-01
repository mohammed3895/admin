import { Bell } from "lucide-react";
import Image from "next/image";
import React from "react";
import { HiBell } from "react-icons/hi";

const UpdatesCard = ({ details }: { details: string }) => {
  return (
    <div className=" flex h-16 w-full cursor-pointer items-center justify-between gap-3 overflow-hidden rounded-lg border px-2.5 py-2">
      <div className="flex w-3/4 items-center justify-start gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-purple-2 font-bold text-primary">
          <HiBell color="#9597D6" className="h-5 w-5 text-purple-2" />
        </div>
        <h3 className="truncate text-xs font-normal text-muted-foreground">
          {details}
        </h3>
      </div>
      <p className="w-1/3 text-nowrap text-right text-xs text-gray-2">
        22:30 AM
      </p>
    </div>
  );
};

export default UpdatesCard;

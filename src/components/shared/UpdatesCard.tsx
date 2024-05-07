import { Bell } from "lucide-react";
import Image from "next/image";
import React from "react";

const UpdatesCard = ({ details }: { details: string }) => {
  return (
    <div className=" flex h-16 w-full items-center justify-between gap-3 overflow-hidden rounded-lg bg-accent/50 px-2.5 py-2">
      <div className="flex w-3/4 items-center justify-start gap-1.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-purple-2 font-bold text-primary">
          <Image
            src="/assets/icons/bell.svg"
            alt=""
            width={16}
            height={16}
            className="h-5 w-5"
          />
        </div>
        <h3 className="truncate text-xs font-semibold text-muted-foreground">
          {details}
        </h3>
      </div>
      <p className="w-1/2 text-nowrap text-right text-[10px] text-gray-2">
        22:30 AM
      </p>
    </div>
  );
};

export default UpdatesCard;

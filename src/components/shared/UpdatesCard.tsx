import { Bell } from "lucide-react";
import Image from "next/image";
import React from "react";

const UpdatesCard = ({ details }: { details: string }) => {
  return (
    <div className=" flex h-16 w-full items-center justify-between gap-3 overflow-hidden rounded-lg bg-accent/50 px-2.5 py-2">
      <div className="flex w-3/4 items-center justify-start gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-purple-2 font-bold text-primary">
          <div className="h-5 w-5">
            <Image
              src="/assets/icons/bell.svg"
              alt=""
              width={20}
              height={20}
              className="h-full w-full object-cover"
            />
          </div>
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

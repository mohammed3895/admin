import React from "react";

const UpdatesCard = ({ details }: { details: string }) => {
  return (
    <div className="mb-3.5 mt-2.5 flex h-14 w-[95%] items-center justify-between gap-3 overflow-hidden rounded-lg bg-purple-2 px-4 py-2">
      <div className="flex w-3/4 items-center justify-start gap-1.5">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-purple-2 p-1 font-bold text-primary   ">
          i
        </div>
        <h3 className="truncate text-xs font-semibold">{details}</h3>
      </div>
      <p className="w-1/2 text-nowrap text-right text-[10px] text-gray-2">
        22:30 AM
      </p>
    </div>
  );
};

export default UpdatesCard;

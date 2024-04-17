import React from "react";

const UpdatesCard = () => {
  return (
    <div className="mb-3.5 mt-2.5 flex h-16 w-full items-center justify-between gap-6 rounded-lg bg-purple-2 p-4">
      <div className="flex items-center justify-start gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-2 p-1 font-bold text-primary   ">
          i
        </div>
        <h3 className="truncate text-[14px] font-medium">Details</h3>
      </div>
      <p className="text-xs text-gray-2">22:30 AM</p>
    </div>
  );
};

export default UpdatesCard;

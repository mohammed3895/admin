import { LucideMoreHorizontal } from "lucide-react";
import React from "react";

const MoreBtn = () => {
  return (
    <button className="flex h-8 w-8 items-center justify-center rounded-md border text-gray-400 shadow-none">
      <LucideMoreHorizontal className="h-5 w-5 text-gray-400" />
    </button>
  );
};

export default MoreBtn;

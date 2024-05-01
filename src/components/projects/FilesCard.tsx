import React from "react";
import MoreBtn from "../buttons/MoreBtn";
import { type Files } from "./tabs/FilesTab";
import { Tags } from "lucide-react";

interface FileProps {
  file: (typeof Files)[number];
}

const FilesCard = ({ file }: FileProps) => {
  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-2.5 rounded-xl bg-white px-4 py-5 sm:max-w-lg  md:max-w-full ">
      <div className="flex items-center justify-start gap-2.5">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-lg ${file.bgColor} ${file.color}`}
        >
          <file.icon size={18} className="h-6 w-6" />
        </div>
        <h1 className="truncate text-base font-semibold tracking-tight">
          {file.name}
        </h1>
      </div>

      <div className="flex items-center justify-center gap-3 text-muted-foreground">
        <Tags size={18} />
        <span className="text-sm">Employee</span>
      </div>

      <MoreBtn />
    </div>
  );
};

export default FilesCard;
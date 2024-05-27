import React from "react";
import MoreBtn from "../buttons/MoreBtn";
import { type Files } from "./tabs/FilesTab";
import { Tags } from "lucide-react";

interface FileProps {
  file: (typeof Files)[number];
}

const FilesCard = ({ file }: FileProps) => {
  return (
    <div className="flex w-full items-center justify-between gap-2.5 rounded-xl bg-background px-6 py-5">
      <div className="flex items-center justify-start gap-2.5">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-lg ${file.bgColor} ${file.color}`}
        >
          <file.icon size={18} className="h-6 w-6" />
        </div>
        <h1 className="truncate text-base font-medium tracking-tight text-black-1 dark:text-gray-50">
          {file.name}
        </h1>
      </div>

      <div className="flex items-center justify-center gap-3 text-muted-foreground">
        <Tags size={18} />
        <span className="text-sm font-normal">Employee</span>
      </div>

      <MoreBtn />
    </div>
  );
};

export default FilesCard;

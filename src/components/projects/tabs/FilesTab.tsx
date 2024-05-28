import React from "react";
import FilesCard from "../FilesCard";
import {
  Chrome,
  FileText,
  Folder,
  Gem,
  PercentDiamond,
  Ribbon,
} from "lucide-react";

export const Files = [
  {
    id: 1,
    name: "File One",
    type: "PDF",
    color: "text-red-1",
    bgColor: "bg-red-2",
    icon: FileText,
  },
  {
    id: 2,
    name: "File Tow",
    type: "PDF",
    color: "text-green-1",
    bgColor: "bg-green-2",
    icon: Folder,
  },
  {
    id: 3,
    name: "File Three",
    type: "PDF",
    color: "text-yellow-1",
    bgColor: "bg-yellow-2",
    icon: Chrome,
  },
  {
    id: 4,
    name: "File Four",
    type: "PDF",
    color: "text-green-1",
    bgColor: "bg-green-2",
    icon: Gem,
  },
  {
    id: 5,
    name: "File Five",
    type: "PDF",
    color: "text-purple-1",
    bgColor: "bg-purple-2",
    icon: Ribbon,
  },
  {
    id: 6,
    name: "File Six",
    type: "PDF",
    color: "text-green-1",
    bgColor: "bg-green-2",
    icon: Folder,
  },
  {
    id: 7,
    name: "File Six",
    type: "PDF",
    color: "text-purple-1",
    bgColor: "bg-purple-2",
    icon: Ribbon,
  },
];

const FilesTab = () => {
  return (
    <div className="mb-16 flex h-full w-full flex-col gap-1">
      {Files.map((file, i) => (
        <FilesCard key={i} file={file} />
      ))}
    </div>
  );
};

export default FilesTab;

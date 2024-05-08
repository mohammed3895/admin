"use client";
import React, { useState } from "react";
import Image from "next/image";
import { type ProjectProps } from "../projects/tabs/TasksTab";
import Link from "next/link";

const SearchCard = ({ project }: ProjectProps) => {
  const [open, setOpen] = useState(false);

  const tasksCompleted = project.tasks?.filter(function (el) {
    return el.status === "done";
  });
  const task = Array.from(tasksCompleted ?? []).length;
  console.log(task);

  return (
    <Link
      href={`/projects/${project.id}`}
      className="flex w-full items-center justify-start gap-3 rounded-md p-3 hover:bg-purple-2"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-purple-2">
        <Image
          src={project.image ?? "/assets/icons/logo.svg"}
          width={100}
          height={100}
          alt=""
          className="h-6 w-6"
        />
      </div>

      <h1>{project.title}</h1>
    </Link>
  );
};

export default SearchCard;

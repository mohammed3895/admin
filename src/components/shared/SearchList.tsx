"use client";
import React from "react";
import { type PROJECTS } from "~/constants/projects";
import SearchCard from "./SearchCard";

interface Props {
  filteredProjects: typeof PROJECTS;
}

export default function SearchList({ filteredProjects }: Props) {
  const filtered = filteredProjects.map((project) => (
    <SearchCard key={project.id} project={project} />
  ));
  return (
    <div className="flex h-full w-full flex-col gap-1.5 rounded-md bg-background p-4 duration-300 animate-in">
      {filtered}
    </div>
  );
}

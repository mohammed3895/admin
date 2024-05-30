import React from "react";
import { PROJECTS } from "~/constants/projects";
import LatestProjectCard from "./LatestProjectCard";

const LatestProjects = () => {
  return (
    <div className="mt-4 flex h-full w-full flex-col gap-5">
      {PROJECTS.slice(0, 4).map((project) => (
        <LatestProjectCard key={project.id} loading project={project} />
      ))}
    </div>
  );
};

export default LatestProjects;

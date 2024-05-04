import { auth } from "auth";
import React from "react";
import ProjectCard from "~/components/projects/ProjectCard";
import { PROJECTS } from "~/constants/projects";

const ProjectsPage = async () => {
  const session = await auth();

  return (
    <div className="flex h-full w-full">
      <div className="grid w-full grid-cols-1 gap-2.5 rounded-lg md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

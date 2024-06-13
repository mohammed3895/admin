"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "~/components/projects/ProjectCard";
import { PROJECTS } from "~/constants/projects";
import Loading from "./loading";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<typeof PROJECTS>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 75);
    setProjects(PROJECTS);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="mb-16 flex h-full w-full p-4">
      <div className="grid w-full grid-cols-1 gap-2.5 rounded-lg md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project, i) => (
          <ProjectCard loading key={i} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

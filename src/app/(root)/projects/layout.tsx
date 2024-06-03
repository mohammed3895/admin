import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admin - Projects",
};

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default ProjectsLayout;

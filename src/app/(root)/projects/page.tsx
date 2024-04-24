import { auth } from "auth";
import React from "react";

const ProjectsPage = async () => {
  const session = await auth();

  console.log(session);
  return <div>ProjectsPage</div>;
};

export default ProjectsPage;

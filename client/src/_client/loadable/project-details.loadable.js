import React from "react";
import loadable from "@loadable/component";

const ProjectDetails = loadable(() => import("../page_project-details"), {
  fallback: null,
});

const ProjectDetailsPage = () => <ProjectDetails />;
export default ProjectDetailsPage;

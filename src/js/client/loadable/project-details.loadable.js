import React from "react";
import loadable from '@loadable/component'

const ProjectDetails = loadable(() => import("../project-details.page"), {
	fallback: null
});

const ProjectDetailsPage = () => <ProjectDetails />;
export default ProjectDetailsPage;

import React from "react";
import loadable from '@loadable/component'

const ProjectDetails = loadable(() => import("../ProjectDetailsPage"), {
	fallback: null
});

const ProjectDetailsPage = () => <ProjectDetails />;
export default ProjectDetailsPage;

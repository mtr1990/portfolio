import React from "react";
import { ProjectItem } from "..";

const ProjectList = ({ stateProject }) => {
  if (stateProject.length === 0) return null;
  return stateProject.map((item) => <ProjectItem key={item._id} item={item} />);
};

export default ProjectList;

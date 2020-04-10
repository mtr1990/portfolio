import React from "react";
import { ProjectItem } from ".";

const ProjectList = ({ stateProject }) => {
  if (!stateProject.length) return null;

  return stateProject.map((item, index) => (
    <ProjectItem key={index} item={item} />
  ));
};

export default ProjectList;
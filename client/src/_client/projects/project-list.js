import React from "react";
import { ProjectItem } from "..";

const ProjectList = ({ stateProject }) => {
  if (!stateProject.length) return null;

  console.log("LIST RENDER");

  return stateProject.map((item) => <ProjectItem key={item._id} item={item} />);
};

export default ProjectList;

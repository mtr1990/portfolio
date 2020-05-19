import React from "react";
import { useSelector } from "react-redux";
import { ProjectItem } from ".";

function ProjectList() {
  const projects = useSelector((state) => state.projects.projects);

  if (!projects.length) return null;

  return projects.map((item) => <ProjectItem key={item._id} item={item} />);
}

export default ProjectList;

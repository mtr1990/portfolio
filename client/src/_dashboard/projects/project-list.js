import React from "react";
import { ProjectItem, ProjectControls } from "..";

const ProjectList = ({
  stateProject,
  deleteProject,
  stateFilter,
  filterProject,
  stateReverse,
  reverseProject,
}) => {
  if (!stateProject.length) return null;

  const filtered = stateProject.filter((item) => {
    return item.name.toLowerCase().indexOf(stateFilter.toLowerCase()) !== -1;
  });

  return (
    <>
      <ProjectControls
        stateReverse={stateReverse}
        reverseProject={reverseProject}
        stateFilter={stateFilter}
        filterProject={filterProject}
      />

      {/********** List ***********/}
      {filtered.map((item, index) => (
        <ProjectItem
          item={item}
          key={index}
          index={index}
          deleteProject={deleteProject}
        />
      ))}
    </>
  );
};

export default ProjectList;

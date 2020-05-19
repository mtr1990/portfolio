import React from "react";
import {
  ProjectFilterByName,
  ProjectFilterCheckList,
  ProjectFilterByCategory,
} from ".";

const ProjectFilters = (props) => {
  const { formik } = props;

  const onClear = () => {
    formik.resetForm();
  };

  return (
    <>
      {/********** FILTER BY NAME ***********/}
      <ProjectFilterByName formik={formik} />

      {/********** FILTER BY CATEGORY ***********/}
      <ProjectFilterByCategory formik={formik} />

      {/********** FILTER BY CHECKLIST ***********/}
      <ProjectFilterCheckList formik={formik} />

      {/********** CLEAR FILTER ***********/}
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default ProjectFilters;

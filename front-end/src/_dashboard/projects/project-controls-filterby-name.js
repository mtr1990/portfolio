import React from "react";
import { TextField } from "@material-ui/core";

const ProjectFilterByName = (props) => {
  const { values, handleChange } = props.formik;

  return (
    <TextField
      name="filterName"
      value={values.filterName}
      autoComplete="off"
      fullWidth
      variant="outlined"
      type="search"
      onChange={handleChange}
      label="Search..."
    />
  );
};

export default ProjectFilterByName;

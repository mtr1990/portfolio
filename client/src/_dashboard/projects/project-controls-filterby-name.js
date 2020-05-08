import React from "react";
import { TextField } from "@material-ui/core";

const ProjectFilterByName = (props) => {
  return (
    <TextField
      name="byName"
      value={props.value}
      autoComplete="off"
      fullWidth
      variant="outlined"
      type="search"
      onChange={props.onChange}
      label="Search..."
    />
  );
};

export default ProjectFilterByName;

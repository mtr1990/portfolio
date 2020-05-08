import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useSelector } from "react-redux";

const ProjectFilterByCategory = (props) => {
  const projects = useSelector((state) => state.projects.projects);
  const options = projects
    .map((e) => e["category"])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter((e) => projects[e])
    .map((e) => projects[e]);

  return (
    <FormControl variant="outlined" size="small">
      <InputLabel id="controls-filter">Filter</InputLabel>
      <Select
        value={props.value}
        name="byCategory"
        labelId="controls-filter"
        id="projects-filter"
        onChange={props.onChange}
        labelWidth={40}
        style={{ minWidth: "120px" }}
      >
        <MenuItem value="">None</MenuItem>
        {options.map((item, index) => (
          <MenuItem key={index} value={item.category}>
            {item.category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ProjectFilterByCategory;

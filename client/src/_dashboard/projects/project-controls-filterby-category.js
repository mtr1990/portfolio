import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useSelector } from "react-redux";

const ProjectFilterByCategory = (props) => {
  const { values, handleChange } = props.formik;

  const projects = useSelector((state) => state.projects.projects);
  const filterOption = projects
    .map((e) => e["category"])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter((e) => projects[e])
    .map((e) => projects[e]);

  return (
    <FormControl variant="outlined" size="small">
      <InputLabel id="filterBycategory">Filter</InputLabel>
      <Select
        name="filterCategory"
        value={values.filterCategory}
        labelId="filterBycategory"
        id="projects-filter"
        onChange={handleChange}
        labelWidth={40}
        style={{ minWidth: "120px" }}
      >
        <MenuItem value="">None</MenuItem>
        {filterOption.map((item, index) => (
          <MenuItem key={index} value={item.category}>
            {item.category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ProjectFilterByCategory;

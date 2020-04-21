import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Box,
} from "@material-ui/core";

const ProjectControlsFilter = ({
  stateFilter,
  resultsFilter,
  handleChangeFilter,
  handleChangeReset,
}) => {
  return (
    <>
      <FormControl variant="outlined" size="small">
        <InputLabel id="controls-filter">Category</InputLabel>
        <Select
          labelId="controls-filter"
          id="projects-filter"
          value={stateFilter}
          onChange={handleChangeFilter}
          labelWidth={80}
          style={{ minWidth: "120px" }}
        >
          {resultsFilter.map((item, index) => (
            <MenuItem key={index} value={item.category.name}>
              {item.category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {stateFilter ? (
        <Box ml={1}>
          <Button size="small" color="primary" onClick={handleChangeReset}>
            CLear
          </Button>
        </Box>
      ) : null}
    </>
  );
};

export default ProjectControlsFilter;

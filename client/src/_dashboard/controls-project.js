import React from "react";
import { TextField, Box, FormControlLabel, Switch } from "@material-ui/core";

const ProjectControls = ({
  stateFilter,
  filterProject,
  stateReverse,
  reverseProject,
}) => {
  return (
    <Box display="flex" alignItems="center" my={8}>
      <Box flexGrow={1}>
        <TextField
          fullWidth
          variant="outlined"
          type="search"
          name="search"
          value={stateFilter}
          onChange={filterProject}
          label="Search..."
        />
      </Box>

      <Box ml={2}>
        <FormControlLabel
          control={
            <Switch
              checked={stateReverse}
              onChange={reverseProject}
              name="checkedB"
              color="primary"
            />
          }
          label="Sort"
        />
      </Box>
    </Box>
  );
};

export default ProjectControls;

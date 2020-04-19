import React from "react";
import { FormControlLabel, Checkbox, Typography } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const ProjectControlsSort = ({ stateSort, toogleSort }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          size="small"
          color={stateSort ? "primary" : "default"}
          icon={<ArrowDownward />}
          checkedIcon={<ArrowUpward />}
          checked={stateSort}
          onChange={toogleSort}
        />
      }
      label={
        <Typography
          variant="subtitle2"
          color={stateSort ? "primary" : "textSecondary"}
          component="span"
        >
          Sort
        </Typography>
      }
    />
  );
};

export default ProjectControlsSort;

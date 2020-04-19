import React from "react";
import { FormControlLabel, Checkbox, Typography } from "@material-ui/core";
import { GridOn, GridOff } from "@material-ui/icons";

const ProjectControlsView = ({ stateView, toogleView }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          size="small"
          color={stateView ? "primary" : "default"}
          icon={<GridOff />}
          checkedIcon={<GridOn />}
          checked={stateView}
          onChange={toogleView}
        />
      }
      label={
        <Typography
          variant="subtitle2"
          color={stateView ? "primary" : "textSecondary"}
          component="span"
        >
          Grid
        </Typography>
      }
    />
  );
};

export default ProjectControlsView;

import React from "react";
import { FormControlLabel, Checkbox, Typography } from "@material-ui/core";
import { GridOn, GridOff } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { toogleViewProject } from "../../redux";

function ProjectControlsView(props) {
  const dispatch = useDispatch();
  const checked = useSelector((state) => state.projects.toogleView);

  const onToogle = () => {
    return dispatch(toogleViewProject());
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          size="small"
          color={checked ? "primary" : "default"}
          icon={<GridOff />}
          checkedIcon={<GridOn />}
          checked={checked}
          onChange={onToogle}
        />
      }
      label={
        <Typography
          variant="subtitle2"
          color={checked ? "primary" : "textSecondary"}
          component="span"
        >
          Grid
        </Typography>
      }
    />
  );
}

export default ProjectControlsView;

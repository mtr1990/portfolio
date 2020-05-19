import React from "react";
import { FormControlLabel, Checkbox, Typography } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { toogleSortProject } from "../../redux";

function ProjectControlsSort(props) {
  const dispatch = useDispatch();
  const checked = useSelector((state) => state.projects.toogleSort);

  const onToogle = () => {
    return dispatch(toogleSortProject());
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          size="small"
          color={checked ? "primary" : "default"}
          icon={<ArrowDownward />}
          checkedIcon={<ArrowUpward />}
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
          Sort
        </Typography>
      }
    />
  );
}

export default ProjectControlsSort;

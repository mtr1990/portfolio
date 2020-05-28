import React from "react";
import { makeStyles, Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.black,
    borderRadius: theme.shape.borderRadiusXs,
  },
  arrow: {
    color: theme.palette.common.black,
  },
}));

function MoreTooltip(props) {
  const classes = useStyles();

  return (
    <Tooltip
      {...props}
      classes={{
        tooltip: classes.tooltip,
        arrow: classes.arrow,
      }}
    >
      {props.children}
    </Tooltip>
  );
}

export default MoreTooltip;

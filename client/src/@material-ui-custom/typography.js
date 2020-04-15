import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  info: { color: theme.palette.info.main },
  success: { color: theme.palette.success.main },
  warning: { color: theme.palette.warning.main },
}));

export const MoreTypography = (props) => {
  const classes = useStyles();

  let color;
  switch (props.color) {
    case "info":
      color = classes.info;
      break;
    case "success":
      color = classes.success;
      break;
    case "warning":
      color = classes.warning;
      break;
    default:
      color = null;
  }

  return (
    <Typography className={color} {...props}>
      {props.children}
    </Typography>
  );
};

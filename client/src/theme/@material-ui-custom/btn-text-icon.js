import React from "react";
import { fade, Button, IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // BASIC
  default: {
    color: theme.palette.contrast.medium,
    "&:hover": {
      backgroundColor: fade(
        theme.palette.contrast.medium,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&:disabled": {
      color: theme.palette.contrast.medium,
    },
  },
  // INFO
  info: {
    color: theme.palette.info.main,
    "&:hover": {
      backgroundColor: fade(
        theme.palette.info.main,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&:disabled": {
      color: theme.palette.info.main,
    },
  },
  // SUCCESS
  success: {
    color: theme.palette.success.main,
    "&:hover": {
      backgroundColor: fade(
        theme.palette.success.main,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&:disabled": {
      color: theme.palette.success.main,
    },
  },
  // WARNING
  warning: {
    color: theme.palette.warning.main,
    "&:hover": {
      backgroundColor: fade(
        theme.palette.warning.main,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&:disabled": {
      color: theme.palette.warning.main,
    },
  },
  // ERROR
  error: {
    color: theme.palette.error.main,
    "&:hover": {
      backgroundColor: fade(
        theme.palette.error.main,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&:disabled": {
      color: theme.palette.error.main,
    },
  },
}));

export function CheckStatus(props) {
  const classes = useStyles();
  let status;
  switch (props.status) {
    case "info":
      status = classes.info;
      break;
    case "success":
      status = classes.success;
      break;
    case "warning":
      status = classes.warning;
      break;
    case "error":
      status = classes.error;
      break;
    default:
      status = classes.default;
  }
  return status;
}

// BTN TEXT
export const MoreBtnText = (props) => {
  return (
    <Button className={CheckStatus(props)} {...props}>
      {props.children}
    </Button>
  );
};

// ICON BUTTON
export const MoreIconButton = React.forwardRef((props, ref) => (
  <IconButton {...props} ref={ref} className={CheckStatus(props)}>
    {props.children}
  </IconButton>
));

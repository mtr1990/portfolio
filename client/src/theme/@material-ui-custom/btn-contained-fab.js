import React from "react";
import { Button, Fab, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // DEFAULT
  default: {
    color: theme.palette.getContrastText(theme.palette.contrast.low),
    backgroundColor: theme.palette.contrast.low,
    "&:hover": {
      backgroundColor: theme.palette.contrast.medium,
      "@media (hover: none)": {
        backgroundColor: theme.palette.contrast.low,
      },
    },
    "&:disabled": {
      color: theme.palette.getContrastText(theme.palette.contrast.low),
      backgroundColor: theme.palette.contrast.low,
    },
  },

  // INFO
  info: {
    color: theme.palette.getContrastText(theme.palette.info.main),
    backgroundColor: theme.palette.info.main,
    "&:hover": {
      backgroundColor: theme.palette.info.dark,
      "@media (hover: none)": {
        backgroundColor: theme.palette.info.main,
      },
    },
    "&:disabled": {
      color: theme.palette.getContrastText(theme.palette.info.main),
      backgroundColor: theme.palette.info.main,
    },
  },

  // SUCCESS
  success: {
    color: theme.palette.getContrastText(theme.palette.success.main),
    backgroundColor: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
      "@media (hover: none)": {
        backgroundColor: theme.palette.success.main,
      },
    },
    "&:disabled": {
      color: theme.palette.getContrastText(theme.palette.success.main),
      backgroundColor: theme.palette.success.main,
    },
  },

  // WARNING
  warning: {
    color: theme.palette.getContrastText(theme.palette.warning.main),
    backgroundColor: theme.palette.warning.main,
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
      "@media (hover: none)": {
        backgroundColor: theme.palette.warning.main,
      },
    },
    "&:disabled": {
      color: theme.palette.getContrastText(theme.palette.warning.main),
      backgroundColor: theme.palette.warning.main,
    },
  },

  // ERROR
  error: {
    color: theme.palette.getContrastText(theme.palette.error.main),
    backgroundColor: theme.palette.error.main,
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
      "@media (hover: none)": {
        backgroundColor: theme.palette.error.main,
      },
    },
    "&:disabled": {
      color: theme.palette.getContrastText(theme.palette.error.main),
      backgroundColor: theme.palette.error.main,
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

// BTN CONTAINED
export function MoreBtnContained(props) {
  return (
    <Button className={CheckStatus(props)} variant="contained" {...props}>
      {props.children}
    </Button>
  );
}

// FAB
export function MoreFab(props) {
  return (
    <Fab className={CheckStatus(props)} {...props}>
      {props.children}
    </Fab>
  );
}

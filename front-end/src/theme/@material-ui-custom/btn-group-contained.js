import React from "react";
import { ButtonGroup, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // DEFAULT
  default: {
    "& button": {
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
      " &:not(:last-child)": {
        borderColor: theme.palette.contrast.medium,
      },
    },
  },

  // INFO
  info: {
    "& button": {
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
      " &:not(:last-child)": {
        borderColor: theme.palette.info.dark,
      },
    },
  },

  // SUCCESS
  success: {
    "& button": {
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
      " &:not(:last-child)": {
        borderColor: theme.palette.success.dark,
      },
    },
  },

  // WARNING
  warning: {
    "& button": {
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
      " &:not(:last-child)": {
        borderColor: theme.palette.warning.dark,
      },
    },
  },

  // ERROR
  error: {
    "& button": {
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
      " &:not(:last-child)": {
        borderColor: theme.palette.error.dark,
      },
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

// BTN GROUP CONTAINED
export function MoreBtnGroupContained(props) {
  return (
    <ButtonGroup className={CheckStatus(props)} variant="contained" {...props}>
      {props.children}
    </ButtonGroup>
  );
}

import React from "react";
import { ButtonGroup, makeStyles, fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // DEFAULT
  default: {
    "& button": {
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
      "&:not(:last-child)": {
        borderColor: theme.palette.contrast.medium,
      },
    },
  },

  // INFO
  info: {
    "& button": {
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
      "&:not(:last-child)": {
        borderColor: theme.palette.info.main,
      },
    },
  },

  // SUCCESS
  success: {
    "& button": {
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
      "&:not(:last-child)": {
        borderColor: theme.palette.success.main,
      },
    },
  },

  // WARNING
  warning: {
    "& button": {
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
      "&:not(:last-child)": {
        borderColor: theme.palette.warning.main,
      },
    },
  },

  // ERROR
  error: {
    "& button": {
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
      "&:not(:last-child)": {
        borderColor: theme.palette.error.main,
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

// BTN GROUP TEXT
export function MoreBtnGroupText(props) {
  return (
    <ButtonGroup className={CheckStatus(props)} variant="text" {...props}>
      {props.children}
    </ButtonGroup>
  );
}

import React from "react";
import { ButtonGroup, makeStyles, fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // DEFAULT
  default: {
    "& button": {
      color: theme.palette.contrast.medium,
      border: `1px solid ${fade(theme.palette.contrast.medium, 0.5)}`,
      "&:hover": {
        border: `1px solid ${theme.palette.contrast.medium}`,
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
        borderColor: theme.palette.contrast.medium,
      },
    },
  },

  // INFO
  info: {
    "& button": {
      color: theme.palette.info.main,
      border: `1px solid ${fade(theme.palette.info.main, 0.5)}`,
      "&:hover": {
        border: `1px solid ${theme.palette.info.main}`,
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
        borderColor: "currentColor",
      },
    },
  },

  // SUCCESS
  success: {
    "& button": {
      color: theme.palette.success.main,
      border: `1px solid ${fade(theme.palette.success.main, 0.5)}`,
      "&:hover": {
        border: `1px solid ${theme.palette.success.main}`,
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
        borderColor: "currentColor",
      },
    },
  },

  // WARNING
  warning: {
    "& button": {
      color: theme.palette.warning.main,
      border: `1px solid ${fade(theme.palette.warning.main, 0.5)}`,
      "&:hover": {
        border: `1px solid ${theme.palette.warning.main}`,
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
        borderColor: "currentColor",
      },
    },
  },

  // ERROR
  error: {
    "& button": {
      color: theme.palette.error.main,
      border: `1px solid ${fade(theme.palette.error.main, 0.5)}`,
      "&:hover": {
        border: `1px solid ${theme.palette.error.main}`,
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
        borderColor: "currentColor",
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

// BTN GROUP OUTLINED
export function MoreBtnGroupOutlined(props) {
  return (
    <ButtonGroup className={CheckStatus(props)} {...props}>
      {props.children}
    </ButtonGroup>
  );
}

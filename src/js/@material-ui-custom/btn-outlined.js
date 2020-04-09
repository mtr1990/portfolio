import React from "react";
import { fade, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // basic
  basic: {
    color: theme.palette.contrast.higher,
    border: `1px solid ${fade(theme.palette.contrast.high, 0.5)}`,
    "&:hover": {
      border: `1px solid ${theme.palette.contrast.high}`,
      backgroundColor: fade(
        theme.palette.contrast.high,
        theme.palette.action.hoverOpacity
      ),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&:disabled": {
      color: theme.palette.contrast.higher,
      borderColor: theme.palette.contrast.high,
    },
  },

  // info
  info: {
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

  // success
  success: {
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

  // warning
  warning: {
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

  // error
  error: {
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
}));

export const BtnOutlinedBasic = (props) => {
  const classes = useStyles();
  return (
    <Button classes={{ root: classes.basic }} variant="outlined" {...props}>
      {props.children}
    </Button>
  );
};

export const BtnOutlinedInfo = (props) => {
  const classes = useStyles();
  return (
    <Button classes={{ root: classes.info }} variant="outlined" {...props}>
      {props.children}
    </Button>
  );
};

export const BtnOutlinedSuccess = (props) => {
  const classes = useStyles();
  return (
    <Button classes={{ root: classes.success }} variant="outlined" {...props}>
      {props.children}
    </Button>
  );
};

export const BtnOutlinedWarning = (props) => {
  const classes = useStyles();
  return (
    <Button classes={{ root: classes.warning }} variant="outlined" {...props}>
      {props.children}
    </Button>
  );
};

export const BtnOutlinedError = (props) => {
  const classes = useStyles();
  return (
    <Button classes={{ root: classes.error }} variant="outlined" {...props}>
      {props.children}
    </Button>
  );
};

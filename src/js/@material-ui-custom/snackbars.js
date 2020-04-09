import React from "react";
import { SnackbarProvider, useSnackbar } from "notistack";
import PropTypes from "prop-types";
import {
  // Typography,
  // IconButton,
  // Box,
  makeStyles,
  Button,
} from "@material-ui/core";
import {
  // Close,
  Done,
  ErrorOutline,
  HighlightOff,
  ReportProblemOutlined,
} from "@material-ui/icons";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  success: { backgroundColor: theme.palette.success.main, color: "white" },
  error: { backgroundColor: theme.palette.error.main, color: "white" },
  warning: { backgroundColor: theme.palette.warning.main, color: "white" },
  info: { backgroundColor: theme.palette.info.main, color: "white" },

  root: {
    maxWidth: 400,
    minWidth: 320,
    // display: "flex",
    // alignItems: "center",
    // padding: `${theme.spacing(1.5)}px ${theme.spacing(1.5)}px`,
    // borderRadius: theme.shape.borderRadius,
  },
}));

export const SnackContainer = (props) => {
  const notistackRef = React.createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };
  return (
    <SnackbarProvider
      autoHideDuration={null}
      maxSnack={8}
      preventDuplicate
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      ref={notistackRef}
      action={(key) => <Button onClick={onClickDismiss(key)}>'Dismiss'</Button>}
    >
      {props.children}
    </SnackbarProvider>
  );
};

export const SnackMessage = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const { closeSnackbar } = useSnackbar();

  let status, icon;
  switch (props.variant) {
    case "info":
      status = classes.info;
      icon = <ErrorOutline fontSize="inherit" />;
      break;
    case "success":
      status = classes.success;
      icon = <Done fontSize="inherit" />;
      break;
    case "warning":
      status = classes.warning;
      icon = <ReportProblemOutlined fontSize="inherit" />;
      break;
    case "error":
      status = classes.error;
      icon = <HighlightOff fontSize="inherit" />;
      break;
    default:
      status = null;
  }
  console.log(status);

  return (
    // <Box className={`${classes.root} ${status}`} ref={ref}>
    //   <Box mr={1}>{icon}</Box>
    //   <Box flexGrow={1}>
    //     <Typography variant="subtitle2">{props.message}</Typography>
    //   </Box>
    //   <IconButton color="inherit" size="small" onClick={() => closeSnackbar()}>
    //     <Close />
    //   </IconButton>
    // </Box>

    <Alert
      icon={icon}
      ref={ref}
      className={classes.root}
      severity={props.variant}
      onClose={() => closeSnackbar()}
      variant="filled"
    >
      {props.message}
    </Alert>
  );
});

SnackMessage.propTypes = {
  id: PropTypes.number.isRequired,
};

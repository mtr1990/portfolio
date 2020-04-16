import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { SnackStatus, SnackAction } from "../styles/@material-ui-custom";
import { GlLayout } from ".";
import { MoreBtnText } from "../styles/@material-ui-custom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& >*": {
      marginRight: theme.spacing(4),
    },
  },
}));

const GlSnackbars = () => {
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();

  const handleClickInfo = () => {
    SnackStatus(enqueueSnackbar, {
      message: "Status info!",
      variant: "info",
    });
  };

  const handleClickSuccess = () => {
    SnackStatus(enqueueSnackbar, {
      message: "Status success!",
      variant: "success",
    });
  };

  const handleClickWarning = () => {
    SnackStatus(enqueueSnackbar, {
      message: "Status warning!",
      variant: "warning",
    });
  };

  const handleClickError = () => {
    SnackStatus(enqueueSnackbar, {
      message: "Status error!",
      variant: "error",
    });
  };

  //
  const WindowAlert = () => {
    alert("Hello! I am an alert box!!");
  };

  const handleClickAction = () => {
    SnackAction(enqueueSnackbar, {
      message: "Do you want click this action ?",
      funC: WindowAlert,
      btnAction: "Action",
    });
  };

  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      <GlLayout heading="Snackbar">
        <Box className={classes.root}>
          <MoreBtnText status="info" onClick={handleClickInfo}>
            Info
          </MoreBtnText>
          <MoreBtnText status="success" onClick={handleClickSuccess}>
            Success
          </MoreBtnText>
          <MoreBtnText status="warning" onClick={handleClickWarning}>
            Warning
          </MoreBtnText>
          <MoreBtnText status="error" onClick={handleClickError}>
            Error
          </MoreBtnText>
          <MoreBtnText onClick={handleClickAction}>Action</MoreBtnText>
        </Box>
      </GlLayout>
    </motion.div>
  );
};

export default GlSnackbars;

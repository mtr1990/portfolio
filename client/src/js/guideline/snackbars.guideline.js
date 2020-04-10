import React from "react";
import { Button, makeStyles, Box } from "@material-ui/core";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { SnackStatus, SnackAction } from "../@material-ui-custom";
import { GlLayout } from ".";
import {
  BtnInfo,
  BtnSuccess,
  BtnWarning,
  BtnError,
} from "../@material-ui-custom";

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
          <BtnInfo onClick={handleClickInfo}>Info</BtnInfo>
          <BtnSuccess onClick={handleClickSuccess}>Success</BtnSuccess>
          <BtnWarning onClick={handleClickWarning}>Warning</BtnWarning>
          <BtnError onClick={handleClickError}>Error</BtnError>
          <Button onClick={handleClickAction}>Action</Button>
        </Box>
      </GlLayout>
    </motion.div>
  );
};

export default GlSnackbars;

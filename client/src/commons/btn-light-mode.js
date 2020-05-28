import React from "react";
import { motion } from "framer-motion";
import { Checkbox, Box, makeStyles } from "@material-ui/core";
import { HighlightRounded } from "@material-ui/icons";
import { varfadeIn, varIcon } from "../utilities";
import { useDispatch, useSelector } from "react-redux";
import { toogleLightMode } from "../redux";

function BtnLightMode() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const lightMode = useSelector((state) => state.lightMode.lightMode);

  const onToogle = () => {
    return dispatch(toogleLightMode());
  };

  return (
    <Box className={classes.root}>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={varfadeIn}
      >
        <motion.div whileTap="tap" whileHover="hover" variants={varIcon}>
          <Checkbox
            color={lightMode ? "primary" : "default"}
            icon={<HighlightRounded />}
            checkedIcon={<HighlightRounded />}
            className={classes.checkbox}
            checked={lightMode}
            onChange={onToogle}
          />
        </motion.div>
      </motion.div>
    </Box>
  );
}

export default BtnLightMode;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    left: theme.spacing(3),
    bottom: theme.spacing(3),
    zIndex: theme.zIndex.modal,
    [theme.breakpoints.up("md")]: {
      left: theme.spacing(6),
      bottom: theme.spacing(6),
    },
  },
  checkbox: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

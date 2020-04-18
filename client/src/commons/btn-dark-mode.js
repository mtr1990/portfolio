import React from "react";
import useDarkMode from "use-dark-mode";
import { motion } from "framer-motion";
import { Checkbox, Box, makeStyles } from "@material-ui/core";
import { HighlightRounded } from "@material-ui/icons";
import { varfadeIn, varIcon } from "../utilities";

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

const BtnDarkMode = (props) => {
  const classes = useStyles();
  const darkMode = useDarkMode(false, {
    classNameDark: "light-theme",
    classNameLight: "dark-theme",
    storageKey: "isLightMode",
  });

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
            color={darkMode.value ? "primary" : "default"}
            icon={<HighlightRounded />}
            checkedIcon={<HighlightRounded />}
            className={classes.checkbox}
            checked={darkMode.value}
            onChange={darkMode.toggle}
          />
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default BtnDarkMode;

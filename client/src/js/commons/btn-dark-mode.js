import React from "react";
import useDarkMode from "use-dark-mode";
import { motion } from "framer-motion";
import ReactSVG from "react-svg";
import { Checkbox, Box, makeStyles } from "@material-ui/core";
import { varfadeIn, varIcon } from "../utilities";
import { iMoon, iSun } from "../../assets";

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
    padding: theme.spacing(1),
    width: theme.spacing(6),
    height: theme.spacing(6),
    overflow: "hidden",
    backgroundColor: theme.palette.contrast.lower,
    "& svg": {
      width: "100%",
    },
  },
}));

const BtnDarkMode = ({ iShow }) => {
  const classes = useStyles();
  const darkMode = useDarkMode(false, {
    classNameDark: "light-theme",
    classNameLight: "dark-theme",
    storageKey: "lightMode",
  });

  return (
    <Box style={{ display: iShow }} className={classes.root}>
      <motion.div variants={varfadeIn}>
        <motion.div whileTap="tap" whileHover="hover" variants={varIcon}>
          <Checkbox
            color="default"
            icon={<ReactSVG src={iSun} />}
            checkedIcon={<ReactSVG src={iMoon} />}
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

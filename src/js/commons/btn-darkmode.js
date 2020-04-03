import React from "react";
import useDarkMode from "use-dark-mode";
import { motion } from "framer-motion";
import ReactSVG from "react-svg";
import { Checkbox, Box, makeStyles } from "@material-ui/core";
import { varfadeIn, varIcon } from "../utilities";
import { iMoon, iSun } from "../../assets";

const useStyles = makeStyles(theme => ({
  toggle: {
    padding: theme.spacing(1),
    width: theme.spacing(6),
    height: theme.spacing(6),
    overflow: "hidden",
    backgroundColor: theme.palette.contrast.lower,
    "& svg": {
      width: "100%"
    }
  },
  button: {
    [theme.breakpoints.up("md")]: {
      left: "48px",
      bottom: "48px"
    }
  }
}));

const Toggle = ({ checked, onChange }) => {
  const classes = useStyles();
  return (
    <Checkbox
      color="default"
      defaultChecked={checked}
      onChange={onChange}
      icon={<ReactSVG src={iMoon} />}
      checkedIcon={<ReactSVG src={iSun} />}
      className={classes.toggle}
    />
  );
};

const BtnDarkMode = ({ iShow }) => {
  const classes = useStyles();
  const darkMode = useDarkMode(false, {
    classNameDark: "light-mode",
    classNameLight: "dark-mode",
    storageKey: "isLight"
  });
  return (
    <Box
      position="fixed"
      left={24}
      bottom={24}
      zIndex="modal"
      style={{ display: iShow }}
      className={classes.button}
    >
      <motion.div variants={varfadeIn}>
        <motion.div whileTap="tap" whileHover="hover" variants={varIcon}>
          <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default BtnDarkMode;

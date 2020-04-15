import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core";
import { varfadeInUp, varIcon } from "../utilities";
import { path_CLIENT } from "../config";
import { iAvatar } from "../assets";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    width: theme.spacing(8),
    height: theme.spacing(8),
    zIndex: theme.zIndex.mobileStepper,
    [theme.breakpoints.up("md")]: {
      bottom: theme.spacing(6),
      right: theme.spacing(6),
    },
  },
  button: {
    filter: "grayscale(100%)",
    transition: `all  ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeIn}`,
    "&:hover": {
      filter: "none",
    },
  },
}));

const BtnAvatar = () => {
  const classes = useStyles();
  return (
    <Link to={path_CLIENT.about}>
      <motion.div variants={varfadeInUp} className={classes.root}>
        <motion.div whileTap="tap" whileHover="hover" variants={varIcon}>
          <img className={classes.button} src={iAvatar} alt="Go to about me" />
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default BtnAvatar;

import React from "react";
import { motion } from "framer-motion";
// import { bgBodyDark, bgBodyLight } from "../../assets";
import { varfadeIn } from "../utilities";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100vh",
    // backgroundImage:
    //   theme.palette.type === "light"
    //     ? `url(${bgBodyLight})`
    //     : `url(${bgBodyDark})`,
    // backgroundSize: "cover",
    // backgroundPosition: "center center",
    // transition: `all  ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeIn}`,
  },
}));

const BgBody = () => {
  const classes = useStyles();
  return <motion.div variants={varfadeIn} className={classes.root} />;
};
export default BgBody;

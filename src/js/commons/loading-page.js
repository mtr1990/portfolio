import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, makeStyles, fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    zIndex: 9999,
    backgroundColor: "rgba(0,0,0,0.88)",
  },
  boxes: {
    height: "calc(32px * 2)",
    width: "calc(32px * 3)",
    position: "relative",
    transformStyle: "preserve-3d",
    transformOrigin: "50% 50%",
    marginTop: "calc(32px * 1.5 * -1)",
    transform: "rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px)",
  },
  box: {
    width: "32px",
    height: "32px",
    top: 0,
    left: 0,
    position: "absolute",
    transformStyle: "preserve-3d",
    "&:nth-child(1)": {
      transform: "translate(100%, 0)",
      animation: "$box1 800ms linear infinite",
    },
    "&:nth-child(2)": {
      transform: "translate(0, 100%)",
      animation: "$box2 800ms linear infinite",
    },
    "&:nth-child(3)": {
      transform: "translate(100%, 100%)",
      animation: "$box3 800ms linear infinite",
    },
    "&:nth-child(4)": {
      transform: "translate(200%, 0)",
      animation: "$box4 800ms linear infinite",
    },
    "& > div": {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto",
      background: theme.palette.primary.light,
      transform: "rotateY(0deg) rotateX(0deg) translateZ(calc(32px / 2))",
      "&:nth-child(1)": {
        top: 0,
        left: 0,
      },
      "&:nth-child(2)": {
        right: 0,
        background: theme.palette.primary.main,
        transform: "rotateY(90deg) rotateX(0deg) translateZ(calc(32px / 2))",
      },
      "&:nth-child(3)": {
        background: theme.palette.primary.dark,
        transform: "rotateY(0deg) rotateX(-90deg) translateZ(calc(32px / 2))",
      },
      "&:nth-child(4)": {
        top: 0,
        left: 0,
        background: fade(theme.palette.primary.main, 0.12),
        transform:
          "rotateY(0deg) rotateX(0deg) translateZ(calc(32px * 3 * -1))",
      },
    },
  },
  "@keyframes box1": {
    "0%,50%": {
      WebkitTransform: "translate(100%, 0)",
      transform: "translate(100%, 0)",
    },
    "100%": {
      WebkitTransform: "translate(200%, 0)",
      transform: "translate(200%, 0)",
    },
  },
  "@keyframes box2": {
    "0%": {
      WebkitTransform: "translate(0, 100%)",
      transform: "translate(0, 100%)",
    },
    "50%": {
      WebkitTransform: "translate(0, 0)",
      transform: "translate(0, 0)",
    },
    "100%": {
      WebkitTransform: "translate(100%, 0)",
      transform: "translate(100%, 0)",
    },
  },
  "@keyframes box3": {
    "0%,50%": {
      WebkitTransform: "translate(100%, 100%)",
      transform: "translate(100%, 100%)",
    },
    "100%": {
      WebkitTransform: "translate(0, 100%)",
      transform: "translate(0, 100%)",
    },
  },
  "@keyframes box4": {
    "0%": {
      WebkitTransform: "translate(200%, 0)",
      transform: "translate(200%, 0)",
    },
    "50%": {
      WebkitTransform: "translate(200%, 100%)",
      transform: "translate(200%, 100%)",
    },
    "100%": {
      WebkitTransform: "translate(100%, 100%)",
      transform: "translate(100%, 100%)",
    },
  },
}));

const LoadingPage = () => {
  const classes = useStyles();
  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      <Box className={classes.root}>
        <Box className={classes.boxes}>
          <Box className={classes.box}>
            <Box />
            <Box />
            <Box />
            <Box />
          </Box>
          <Box className={classes.box}>
            <Box />
            <Box />
            <Box />
            <Box />
          </Box>
          <Box className={classes.box}>
            <Box />
            <Box />
            <Box />
            <Box />
          </Box>
          <Box className={classes.box}>
            <Box />
            <Box />
            <Box />
            <Box />
          </Box>
        </Box>
        <Box mt={12}>
          <Typography variant="subtitle2" color="textSecondary">
            Loading...
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default LoadingPage;

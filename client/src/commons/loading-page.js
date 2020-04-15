import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, makeStyles, fade } from "@material-ui/core";
import { Logo } from "../commons";

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
    zIndex: 999,
    color: "white",
    backgroundColor:
      theme.palette.type === "light"
        ? fade(theme.palette.contrast.higher, 0.96)
        : fade(theme.palette.contrast.lower, 0.96),
  },
}));

const LoadingPage = () => {
  const classes = useStyles();
  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      <Box className={classes.root}>
        <motion.div
          initial={{ rotateY: 0, x: -80 }}
          animate={{ rotateY: 360, x: 80 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            flip: Infinity,
            repeatDelay: 1,
          }}
        >
          <Logo style={{ width: "72px", height: "72px" }} />
        </motion.div>

        <Box mt={4}>
          <motion.div
            initial={{ opacity: 0.32 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.48,
              ease: "linear",
              flip: Infinity,
              repeatDelay: 0.32,
            }}
          >
            <Typography variant="subtitle2">Loading...</Typography>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default LoadingPage;

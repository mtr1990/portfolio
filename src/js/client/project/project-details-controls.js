import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Box, IconButton, makeStyles } from "@material-ui/core";
import { Close, ArrowForward, ArrowBack } from "@material-ui/icons";
import { varIcon } from "../../utilities";
import { path_PROJECT } from "../../../config";

const useStyles = makeStyles((theme) => ({
  close: {
    [theme.breakpoints.up("md")]: {
      top: theme.spacing(3),
      right: theme.spacing(3),
    },
  },
  controls: {
    display: "flex",
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    zIndex: theme.zIndex.mobileStepper,
    [theme.breakpoints.up("md")]: {
      right: theme.spacing(3),
      bottom: theme.spacing(6),
    },
  },
}));

const ProjectDetailsControls = ({ prevItem, nextItem }) => {
  const classes = useStyles();

  const prevItemName = prevItem
    ? prevItem.name.toLowerCase().replace(/\s+/g, "-")
    : null;

  const nextItemName = nextItem
    ? nextItem.name.toLowerCase().replace(/\s+/g, "-")
    : null;

  return (
    <>
      <Link to="/">
        <Box
          position="fixed"
          top={12}
          right={12}
          zIndex="mobileStepper"
          className={classes.close}
        >
          <motion.div whileTap="tap" whileHover="hover" variants={varIcon}>
            <IconButton color="primary">
              <Close />
            </IconButton>
          </motion.div>
        </Box>
      </Link>

      <Box className={classes.controls}>
        <Box display={prevItem ? "" : "none"}>
          <motion.div whileTap="tap" whileHover="hover" variants={varIcon}>
            <IconButton
              to={path_PROJECT.root + prevItemName}
              color="primary"
              component={Link}
            >
              <ArrowBack />
            </IconButton>
          </motion.div>
        </Box>

        <Box ml={2} display={nextItem ? "" : "none"}>
          <motion.div whileTap="tap" whileHover="hover" variants={varIcon}>
            <IconButton
              to={path_PROJECT.root + nextItemName}
              color="primary"
              component={Link}
            >
              <ArrowForward />
            </IconButton>
          </motion.div>
        </Box>
      </Box>
    </>
  );
};

export default ProjectDetailsControls;

import React from "react";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { varIcon } from "../../utilities";
import { Box, IconButton, makeStyles } from "@material-ui/core";

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

  const prevItemName = prevItem.name.toLowerCase().replace(/\s+/g, "-");
  const nextItemName = nextItem.name.toLowerCase().replace(/\s+/g, "-");

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
              <FeatherIcon icon="x" />
            </IconButton>
          </motion.div>
        </Box>
      </Link>

      <Box className={classes.controls}>
        {!prevItem ? null : (
          <Link to={"/projects/" + prevItemName}>
            <motion.div whileTap="tap" whileHover="hover" variants={varIcon}>
              <IconButton color="primary">
                <FeatherIcon icon="arrow-left" />
              </IconButton>
            </motion.div>
          </Link>
        )}

        {!nextItem ? null : (
          <Box ml={2}>
            <Link to={"/projects/" + nextItemName}>
              <motion.div whileTap="tap" whileHover="hover" variants={varIcon}>
                <IconButton color="primary">
                  <FeatherIcon icon="arrow-right" />
                </IconButton>
              </motion.div>
            </Link>
          </Box>
        )}
      </Box>
    </>
  );
};

export default ProjectDetailsControls;

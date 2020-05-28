import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, IconButton, makeStyles, Typography } from "@material-ui/core";
import {
  CloseRounded,
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";
import { varIcon, UrlFormat, varfadeIn } from "../../utilities";
import { path_CLIENT } from "../../configs";

function ProjectDetailsControls(props) {
  const classes = useStyles();
  const { prevItem, nextItem, currentIndex } = props;
  const prevItemName = prevItem ? UrlFormat(prevItem.name) : null;
  const nextItemName = nextItem ? UrlFormat(nextItem.name) : null;
  const prevItemHero = prevItem ? prevItem.hero.map((item) => item.url) : null;
  const nextItemHero = nextItem ? nextItem.hero.map((item) => item.url) : null;
  const projects = useSelector((state) => state.projects.projects);

  return (
    <>
      {/********** CLOSE ***********/}
      <Box
        position="fixed"
        top={12}
        right={12}
        zIndex="mobileStepper"
        className={classes.close}
      >
        <motion.div whileTap="tap" whileHover="hover" variants={varIcon}>
          <IconButton color="primary" component={Link} to="/">
            <CloseRounded />
          </IconButton>
        </motion.div>
      </Box>

      {/********** CONTROLS ***********/}
      <motion.div className={classes.controls_wrap} variants={varfadeIn}>
        <Typography variant="caption" color="textSecondary">
          {currentIndex} / {projects.length}
        </Typography>

        <Box className={classes.controls}>
          <Box display={prevItem ? "" : "none"}>
            <motion.div whileTap="tap" whileHover="hover" variants={varIcon}>
              <Link to={path_CLIENT.projects.root + prevItemName}>
                <Box className={classes.control}>
                  <Box className="control-icon">
                    <ArrowBackIosRounded color="primary" fontSize="small" />
                  </Box>
                  <img src={prevItemHero} alt={prevItemHero} />
                </Box>
              </Link>
            </motion.div>
          </Box>
          <Box ml={1} display={nextItem ? "" : "none"}>
            <motion.div whileTap="tap" whileHover="hover" variants={varIcon}>
              <Link to={path_CLIENT.projects.root + nextItemName}>
                <Box className={classes.control}>
                  <Box className="control-icon">
                    <ArrowForwardIosRounded color="primary" fontSize="small" />
                  </Box>
                  <img src={nextItemHero} alt={nextItemHero} />
                </Box>
              </Link>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
    </>
  );
}

export default ProjectDetailsControls;

const useStyles = makeStyles((theme) => ({
  close: {
    [theme.breakpoints.up("md")]: {
      top: theme.spacing(3),
      right: theme.spacing(3),
    },
  },
  controls_wrap: {
    position: "fixed",
    textAlign: "right",
    right: theme.spacing(3),
    bottom: theme.spacing(3),
    zIndex: theme.zIndex.mobileStepper,

    [theme.breakpoints.up("md")]: {
      right: theme.spacing(3),
      bottom: theme.spacing(6),
    },
  },
  controls: {
    display: "flex",
    padding: theme.spacing(0.5),
    boxShadow: theme.shadows[16],
    marginTop: theme.spacing(0.5),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.card,
  },
  control: {
    position: "relative",
    overflow: "hidden",
    width: theme.spacing(8),
    "&:hover": {
      "& .control-icon": {
        opacity: 1,
      },
      "&:before": {
        opacity: 1,
      },
    },
    "& .control-icon": {
      top: "50%",
      zIndex: 99,
      opacity: 0,
      left: "50%",
      position: "absolute",
      transformorigin: "center",
      transform: "translate(-50%, -50%)",
      transition: `all  ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeIn}`,
    },
    "&:before": {
      content: "''",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0,
      zIndex: 98,
      position: "absolute",
      background: "rgba(0,0,0,0.48)",
      borderRadius: theme.shape.borderRadius,
      transition: `all  ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeIn}`,
    },
    "& img": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

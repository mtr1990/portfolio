import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Grid, Box, makeStyles, Typography } from "@material-ui/core";
import { path_CLIENT } from "../../configs";
import {
  varItem,
  varImg,
  varZoomInOut,
  varTransition,
  UrlFormat,
  ScrollMagicFadeIn,
} from "../../utilities";
import { Spinners } from "../../commons";

function ProjectItem(props) {
  const classes = useStyles();
  const { item } = props;
  const itemName = UrlFormat(item.name);

  return (
    <Grid item xs={6}>
      <ScrollMagicFadeIn triggerHook={0.64} offset={80} duration={560}>
        <motion.div variants={varZoomInOut}>
          <Box
            to={path_CLIENT.projects.root + itemName}
            color="inherit"
            component={Link}
            style={{ textDecoration: "none" }}
          >
            <Box className={classes.root}>
              <motion.div
                whileTap="tap"
                whileHover="hover"
                variants={varItem}
                transition={varTransition}
              >
                <Box className={classes.thumbnail}>
                  <motion.img
                    src={item.thumbnail}
                    alt="thumbnail"
                    variants={varImg}
                    transition={varTransition}
                    className={classes.img}
                  />
                  <Spinners index={1} />
                </Box>
              </motion.div>

              <Box className={classes.caption}>
                <Typography variant="caption" color="textSecondary">
                  {item.category}
                </Typography>
                <Typography variant="subtitle1">{item.name}</Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </ScrollMagicFadeIn>
    </Grid>
  );
}
export default ProjectItem;

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: `${theme.spacing(0.5)}px  ${theme.spacing(0.5)}px  0`,
    overflow: "hidden",
    boxShadow: theme.shadows[25].card.root,
    borderRadius: theme.shape.borderRadiusLg,
    backgroundColor: theme.palette.background.card,
    transition: `all  ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeIn}`,
    "&:hover": {
      boxShadow: theme.shadows[25].card.hover,
    },
  },
  thumbnail: {
    position: "relative",
    overflow: "hidden",
    paddingTop: "136%",
    borderRadius: theme.shape.borderRadiusLg,
    border: `${theme.palette.background.card} solid 6px`,
    "&::before": {
      content: '" "',
      display: "none",
      position: "absolute",
      top: 0,
      width: "100%",
      height: "100%",
      zIndex: 3,
      boxShadow: theme.shadows[25].thumbnail,
    },
  },
  img: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 2,
  },
  caption: {
    padding: `${theme.spacing(4)}px ${theme.spacing(3)}px`,
    "&:hover": {
      boxShadow: theme.shadows[25].card.root,
    },
  },
}));

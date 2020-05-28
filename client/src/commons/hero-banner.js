import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Grid,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { varfadeInRight, varWrapBoth } from "../utilities";
import { Spinners } from ".";

export function HeroHome() {
  const classes = useStyles();

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      className={`${classes.home} ${classes.commons}`}
    >
      <Container>
        <Grid item md={9} lg={7}>
          <motion.div variants={varfadeInRight}>
            <Typography variant="h2" component="h1">
              The creative designer with a passion for
              <Typography variant="h2" component="span" color="textSecondary">
                {" "}
                simple{" "}
              </Typography>
              and
              <Typography variant="h2" component="span" color="textSecondary">
                {" "}
                functional{" "}
              </Typography>
              design.
            </Typography>
          </motion.div>
        </Grid>
      </Container>
    </motion.div>
  );
}

export function HeroProjectDetails(props) {
  const classes = useStyles();
  const { currentItem } = props;
  const itemHero = currentItem.hero.map((item) => item.url);
  const itemName = currentItem.name;
  const itemDescription = currentItem.description;

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={varWrapBoth}
      className={`${classes.project} ${classes.commons}`}
    >
      <Box
        style={{
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `
						 url(${itemHero})`,
        }}
      />

      <Box className={classes.project_content}>
        <Container>
          <Grid item md={7}>
            <motion.div variants={varfadeInRight}>
              <Box
                mb={2}
                fontWeight={500}
                color="common.white"
                fontSize="h2.fontSize"
              >
                {itemName}
              </Box>
            </motion.div>
            <motion.div variants={varfadeInRight}>
              <Box fontSize="body1.fontSize" color="common.white">
                {itemDescription}
              </Box>
            </motion.div>
          </Grid>
        </Container>
      </Box>

      <Spinners />
    </motion.div>
  );
}

const useStyles = makeStyles((theme) => ({
  commons: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    position: "fixed",
  },
  // HOME
  home: {
    display: "flex",
    alignItems: "center",
  },

  // PROJECT
  project: {
    zIndex: -1,
    "&:before": {
      zIndex: 1,
      bottom: 0,
      content: "''",
      width: "100%",
      height: "100vh",
      position: "absolute",
      backgroundImage:
        "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
    },
  },
  project_content: {
    zIndex: 1,
    width: "100%",
    position: "absolute",
    bottom: theme.spacing(24),
  },
}));

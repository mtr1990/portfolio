import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  makeStyles,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import { varfadeInRight } from "../utilities";
import { Spinners } from ".";

const useStyles = makeStyles((theme) => ({
  home: {
    display: "flex",
    alignItems: "center",
  },
  project: {
    zIndex: -1,
  },
  commons: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
  },
}));

export const HeroHome = () => {
  const classes = useStyles();

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      className={`${classes.home} ${classes.commons}`}
    >
      <Container>
        <Grid item md={7}>
          <motion.div variants={varfadeInRight}>
            <Typography variant="h2" component="h1">
              22 The creative designer with a passion for
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
};

export const HeroProjectDetails = ({ item }) => {
  const classes = useStyles();

  return (
    <Box className={`${classes.project} ${classes.commons}`}>
      <Box
        style={{
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `
						 url(${item.hero})`,
        }}
      />
      <Spinners />
    </Box>
  );
};

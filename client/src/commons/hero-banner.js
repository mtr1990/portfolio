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
  const { item } = props;
  const imgHero = item.hero.map((item) => item.url);

  return (
    <Box className={`${classes.project} ${classes.commons}`}>
      <Box
        style={{
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `
						 url(${imgHero})`,
        }}
      />
      <Spinners />
    </Box>
  );
}

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

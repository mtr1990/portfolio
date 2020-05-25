import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Container, Grid, Box, makeStyles } from "@material-ui/core";
import { varWrapExit, ScrollMagicFadeOut } from "../utilities";
import {
  BgBody,
  HeroHome,
  BtnAvatar,
  LoadingPage,
  HeaderClient,
} from "../commons";
import { ProjectList } from "./projects";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../redux";
import { useWidth } from "../theme/@material-ui-custom";

function HomePage() {
  const classes = useStyles();
  const width = useWidth();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.projects.loading);

  // GET PROJECTS
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      className={classes.root}
    >
      {isLoading ? <LoadingPage isLoading={isLoading} /> : null}
      {/********** COMMONS ***********/}
      <HeaderClient />
      <BgBody />
      <BtnAvatar />

      {/********** HERO ***********/}
      <ScrollMagicFadeOut>
        <HeroHome />
      </ScrollMagicFadeOut>
      <Box height="100vh" />

      <Box className={classes.main}>
        <Container>
          <Grid item md={9} lg={7}>
            <motion.div variants={varWrapExit}>
              <Grid
                container
                spacing={(width === "xs" && 2) || (width === "sm" ? 3 : 4)}
              >
                <ProjectList />
              </Grid>
            </motion.div>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
}

export default HomePage;

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(2),
    paddingBottom: theme.spacing(32),
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.background.default
        : theme.palette.background.default,
  },
}));

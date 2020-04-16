import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { Container, Grid, Box, makeStyles } from "@material-ui/core";
import { API } from "../config";
import { varWrapExit, ScrollMagicFadeOut } from "../utilities";
import {
  HeaderClient,
  BtnAvatar,
  BtnDarkMode,
  BgBody,
  LoadingPage,
  HeroHome,
} from "../commons";
import { SnackStatus } from "../@material-ui-custom";
import { ProjectList } from ".";

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

const HomePage = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     getProjects();
  //   }, 10000);
  //   return () => clearTimeout(timer);
  // }, []);

  // Get Projects
  const getProjects = async () => {
    await API.get("projects")
      .then((res) => {
        setProjects(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        SnackStatus(enqueueSnackbar, {
          message: "Cannot connect to the server!",
          variant: "error",
        });
      });
  };

  useEffect(() => {
    getProjects();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        className={classes.root}
      >
        {isLoading ? <LoadingPage isLoading={isLoading} /> : null}

        <HeaderClient />
        <BgBody />
        <BtnDarkMode />
        <BtnAvatar />

        {/********** Hero ***********/}
        <ScrollMagicFadeOut>
          <HeroHome />
        </ScrollMagicFadeOut>
        <Box height="100vh" />

        <Box className={classes.main}>
          <Container>
            <Grid item md={8} lg={7}>
              <motion.div variants={varWrapExit}>
                <Grid container spacing={4}>
                  <ProjectList stateProject={projects} />
                </Grid>
              </motion.div>
            </Grid>
          </Container>
        </Box>
      </motion.div>
    </>
  );
};

export default HomePage;

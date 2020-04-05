import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import { API } from "../../config";
import { varfadeInRight, varWrapExit, SmoothScrollbar } from "../utilities";
import {
  Header,
  BtnAvatar,
  BtnDarkMode,
  BgBody,
  LoadingPage,
} from "../commons";
import { ProjectList } from "./project";

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getProjects();
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      getProjects();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Get Projects
  const getProjects = async () => {
    await API.get("projects")
      .then((res) => {
        setProjects(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Display = () => {
    return (
      <>
        The creative designer with a passion for simple and functional design.
      </>
    );
  };

  return (
    <>
      <motion.div initial="initial" animate="enter" exit="exit">
        <BgBody />

        <BtnDarkMode />

        {isLoading ? <LoadingPage /> : null}

        <SmoothScrollbar>
          <Header />

          <Container>
            <Grid item md={8} lg={7}>
              <motion.div variants={varfadeInRight}>
                <Box height="100vh" display="flex" alignItems="center">
                  <Typography variant="h1" component="h1">
                    <Display />
                  </Typography>
                </Box>
              </motion.div>

              <motion.div variants={varWrapExit}>
                <Grid container spacing={3}>
                  <ProjectList stateProject={projects} />
                </Grid>
              </motion.div>
            </Grid>
          </Container>
        </SmoothScrollbar>

        <BtnAvatar />
      </motion.div>
    </>
  );
};

export default HomePage;

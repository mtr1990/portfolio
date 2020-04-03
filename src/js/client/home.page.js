import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import { API } from "../../config";
import { varfadeInRight, varWrapExit, SmoothScrollbar } from "../utilities";
import { Header, LoadingPage, BtnAvatar, BtnDarkMode, BgBody } from "../commons";
import { ProjectItem } from "./project";

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [isDone, setIsDone] = useState(undefined);

  // Get Projects
  const getProjects = async () => {
    await API.get("projects")
      .then(res => {
        setProjects(res.data);
        setIsDone(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    // setTimeout(() => {}, 800);
    getProjects();
  }, []);

  const ProjectItemList = projects.map((item, index) => (
    <ProjectItem key={index} item={item} isDone={isDone} />
  ));

  const Display = () => {
    return (
      <>
        The creative designer with a passion for simple and functional design.
      </>
    );
  };

  return (
    <>
      {!isDone ? (
        <LoadingPage />
      ) : (
        <motion.div initial="initial" animate="enter" exit="exit">
          <BgBody />

          <BtnDarkMode />

          <SmoothScrollbar>
            <Header />

            <Container>
              <Grid item md={8} lg={7}>
                <motion.div variants={varfadeInRight}>
                  <Box height="100vh" display="flex" alignItems="center">
                    <Typography variant="h1">
                      <Display />
                    </Typography>
                  </Box>
                </motion.div>

                <motion.div variants={varWrapExit}>
                  <Grid container spacing={3}>
                    {ProjectItemList}
                  </Grid>
                </motion.div>

                <Box height={160} />
              </Grid>
            </Container>
          </SmoothScrollbar>

          <BtnAvatar />
        </motion.div>
      )}
    </>
  );
};

export default HomePage;

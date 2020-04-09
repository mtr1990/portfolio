import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
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
import { SnackStatus } from "../@material-ui-custom";
import { ProjectList } from "./project";

const HomePage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     getProjects();
  //   }, 1000);
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
      <motion.div initial="initial" animate="enter" exit="exit">
        {isLoading ? <LoadingPage /> : null}

        <BgBody />
        <BtnDarkMode />
        <BtnAvatar />
        <SmoothScrollbar>
          <Header />

          <Container>
            <Grid item md={8} lg={7}>
              <motion.div variants={varfadeInRight}>
                <Box height="100vh" display="flex" alignItems="center">
                  <Typography variant="h2" component="h1">
                    The creative designer with a passion for
                    <Typography
                      variant="h2"
                      component="span"
                      color="textSecondary"
                    >
                      {" "}
                      simple{" "}
                    </Typography>
                    and
                    <Typography
                      variant="h2"
                      component="span"
                      color="textSecondary"
                    >
                      {" "}
                      functional{" "}
                    </Typography>
                    design.
                  </Typography>
                </Box>
              </motion.div>

              <motion.div variants={varWrapExit}>
                <Box mb={20}>
                  <Grid container spacing={4}>
                    <ProjectList stateProject={projects} />
                  </Grid>
                </Box>
              </motion.div>
            </Grid>
          </Container>
        </SmoothScrollbar>
      </motion.div>
    </>
  );
};

export default HomePage;

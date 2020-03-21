import React from "react";
import { API } from "../../config";
import { motion } from "framer-motion";
import { Header, LoadingPage, BtnAvatar, BtnDarkMode, BgBody } from "../common";
import { ProjectItem } from "./project";
import { varfadeInRight, varWrapExit, SmoothScrollbar } from "../utils";
import { Container, Grid, Box, Typography } from "@material-ui/core";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsList: [],
      isDone: undefined
    };
  }

  // Get Project
  async getProject() {
    await API.get("myProjects")
      .then(res => {
        const projectsList = res.data;
        this.setState({
          projectsList,
          isDone: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    setTimeout(() => {
      this.getProject();
    }, 800);
  }

  render() {
    let { projectsList, isDone } = this.state;
    const ProjectItemList = projectsList.map((item, index) => (
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
  }
}

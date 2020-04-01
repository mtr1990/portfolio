import React from "react";
import { API } from "../../config";
import { motion } from "framer-motion";
import { Header, LoadingPage, BtnAvatar, BtnDarkMode, BgBody } from "../common";
import { ProjectItem } from "./project";
import { varfadeInRight, varWrapExit, SmoothScrollbar } from "../utilities";
import { Container, Grid, Box, Typography } from "@material-ui/core";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isDone: undefined
    };
  }

  // Get Projects
  async getProjects() {
    await API.get()
      .then(res => {
        const projects = res.data;
        this.setState({
          projects,
          isDone: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    // setTimeout(() => {}, 800);
    this.getProjects();
  }

  render() {
    let { projects, isDone } = this.state;
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
  }
}

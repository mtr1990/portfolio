import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { path_DASHBOARD } from "../configs";
import { HeaderDashboard, PanelDashBoard } from "../commons";
import { Box, Container, Fab } from "@material-ui/core";
import { NoteAdd } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../redux";
import { ProjectList } from "./projects";
import { LoginCheck } from "./login";

function DashboardPage() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  // GET PROJECTS
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <LoginCheck>
      <motion.div initial="initial" animate="enter" exit="exit">
        {/********** COMMONS ***********/}
        <HeaderDashboard />

        <Box mb={24}>
          <Container>
            {/********** PANEL ***********/}
            <PanelDashBoard
              txtHeading="Projects"
              txtSubHeading="project"
              numbLength={projects.length}
            />

            {/********** PROJECT LIST ***********/}
            <ProjectList />
          </Container>
        </Box>

        <Box position="fixed" bottom={56} right={56} zIndex="mobileStepper">
          <Fab
            color="primary"
            component={Link}
            to={path_DASHBOARD.projects.create}
            aria-label="Add Project"
          >
            <NoteAdd />
          </Fab>
        </Box>
      </motion.div>
    </LoginCheck>
  );
}

export default DashboardPage;

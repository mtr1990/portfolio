import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { Box, Container, Fab } from "@material-ui/core";
import { NoteAdd } from "@material-ui/icons";
import { API, path_DASHBOARD } from "../configs";
import { HeaderDashboard, CheckLogin, PanelDashBoard } from "../commons";
import { SnackStatus } from "../@material-ui-custom";
import { ProjectList } from ".";

const DashboardPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [projects, setProjects] = useState([]);
  const [reverse, setReverse] = useState(
    localStorage.getItem("isReverse") === null ||
      localStorage.getItem("isReverse") === "false"
      ? false
      : true
  );
  const [view, setView] = useState(
    localStorage.getItem("isView") === null ||
      localStorage.getItem("isView") === "false"
      ? false
      : true
  );

  // GET PROJECTS
  useEffect(() => {
    const getProjects = async () => {
      await API.get("projects")
        .then((res) => {
          if (reverse === true) {
            setProjects(res.data.reverse());
          } else {
            setProjects(res.data);
          }
        })
        .catch(() => {
          SnackStatus(enqueueSnackbar, {
            message: "Cannot connect to the server!",
            variant: "error",
          });
        });
    };
    getProjects();
  }, [enqueueSnackbar, reverse]);

  // DELETE PROJECT
  const deleteProject = async (id) => {
    await API.delete(`projects/${id}`)
      .then((res) => {
        setProjects(projects.filter((item) => item._id !== id));
        SnackStatus(enqueueSnackbar, {
          message: "Deleted success!",
          variant: "success",
        });
      })
      .catch((err) => {
        SnackStatus(enqueueSnackbar, {
          message: "Deleted error!",
          variant: "error",
        });
      });
  };

  // REVERSE PROJECT
  const toogleSort = () => {
    if (reverse === false || reverse === null) {
      setReverse(true);
      setProjects(projects.reverse());
      localStorage.setItem("isReverse", "true");
    } else {
      setReverse(false);
      setProjects(projects.reverse());
      localStorage.setItem("isReverse", "false");
    }
  };

  // CHANGE VIEW PROJECT
  const toogleView = () => {
    if (view === false || view === null) {
      setView(true);
      localStorage.setItem("isView", "true");
    } else {
      setView(false);
      localStorage.setItem("isView", "false");
    }
  };

  return (
    <CheckLogin>
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
            <ProjectList
              stateView={view}
              stateSort={reverse}
              stateProject={projects}
              toogleView={toogleView}
              toogleSort={toogleSort}
              deleteProject={deleteProject}
              setProjects={setProjects}
            />
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
    </CheckLogin>
  );
};

export default DashboardPage;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { Box, Container, Typography, Fab } from "@material-ui/core";
import { NoteAdd } from "@material-ui/icons";
import { API, path_DASHBOARD } from "../configs";
import { HeaderDashboard, CheckLogin } from "../commons";
import { SnackStatus } from "../styles/@material-ui-custom";
import { ProjectList } from ".";

const DashboardPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("");
  const [reverse, setReverse] = useState(
    localStorage.getItem("isReverse") === null ||
      localStorage.getItem("isReverse") === "false"
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

  // FILTER PROJECT
  const filterProject = (e) => {
    setFilter(e.target.value.substr(0, 20));
  };

  // REVERSE PROJECT
  const reverseProject = () => {
    if (reverse === false) {
      localStorage.setItem("isReverse", "true");
      setReverse(true);
      setProjects(projects.reverse());
    } else {
      localStorage.setItem("isReverse", "false");
      setReverse(false);
      setProjects(projects.reverse());
    }
  };

  return (
    <CheckLogin>
      <motion.div initial="initial" animate="enter" exit="exit">
        <HeaderDashboard />

        <Box mb={20}>
          <Container>
            {/********** Panel ***********/}
            <Typography variant="h3" component="h1" paragraph>
              Projects
            </Typography>
            <Typography variant="body1" component="p" color="textSecondary">
              {projects.length} Project
            </Typography>

            {/********** Project List ***********/}
            <ProjectList
              stateProject={projects}
              deleteProject={deleteProject}
              stateFilter={filter}
              filterProject={filterProject}
              stateReverse={reverse}
              reverseProject={reverseProject}
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

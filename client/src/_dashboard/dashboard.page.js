import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { Box, Button, Container, Typography, Fab } from "@material-ui/core";
import { Add, ArrowForward, Drafts } from "@material-ui/icons";
import { API, path_DASHBOARD } from "../config";
import { Header } from "../commons";
import { FabInfo, SnackStatus } from "../@material-ui-custom";
import { ProjectList } from ".";

const Dashboard = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("");
  const [reverse, setReverse] = useState(
    localStorage.getItem("isReverse") === null ||
      localStorage.getItem("isReverse") === "false"
      ? false
      : true
  );

  useEffect(() => {
    getProject();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Get Projects
  const getProject = async () => {
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

  // Delete Project
  const deleteProject = async (id) => {
    await API.delete(`projects/${id}`)
      .then((res) => {
        getProject();

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
    setProjects(projects.filter((item) => item._id !== id));
  };

  // Filter Project
  const filterProject = (e) => {
    setFilter(e.target.value.substr(0, 20));
  };

  // Reverse Project
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
    <motion.div initial="initial" animate="enter" exit="exit">
      <Header />

      <Container>
        {/********** Panel ***********/}
        <Box
          mt={24}
          mb={8}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h3" component="h1" paragraph>
              Projects
            </Typography>
            <Typography variant="body1" component="p" color="textSecondary">
              {projects.length} Project
            </Typography>
          </Box>

          <Button
            to={path_DASHBOARD.categories.root}
            size="small"
            color="primary"
            component={Link}
            endIcon={<ArrowForward />}
          >
            Categories
          </Button>
        </Box>

        {/********** Project List ***********/}
        <ProjectList
          stateProject={projects}
          deleteProject={deleteProject}
          stateFilter={filter}
          filterProject={filterProject}
          stateReverse={reverse}
          reverseProject={reverseProject}
        />
        <Box height={80} />
      </Container>

      <Box position="fixed" bottom={56 * 2.4} right={56} zIndex="mobileStepper">
        <FabInfo
          component={Link}
          to={path_DASHBOARD.emails}
          aria-label="view emails"
        >
          <Drafts />
        </FabInfo>
      </Box>

      <Box position="fixed" bottom={56} right={56} zIndex="mobileStepper">
        <Fab
          color="primary"
          component={Link}
          to={path_DASHBOARD.projects.create}
          aria-label="add"
        >
          <Add />
        </Fab>
      </Box>
    </motion.div>
  );
};

export default Dashboard;

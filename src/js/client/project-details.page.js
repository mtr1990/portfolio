import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Box } from "@material-ui/core";
import { API } from "../../config";
import { SmoothScrollbar, varfadeIn } from "../utilities";
import { Header, Hero, BtnDarkMode, MsgError } from "../commons";
import { ProjectDetailsContent, ProjectDetailsControls } from "./project";
import { NoMatchPage } from ".";
import { useParams } from "react-router-dom";

const ProjectDetailsPage = () => {
  const [projects, setProjects] = useState(null);

  // Get Project By Id
  const getProjectById = async () => {
    await API.get("projects")
      .then(res => {
        setProjects(res.data);
      })
      .catch(err => {
        toast(<MsgError txtMsg="Get Project Fail!" />);
      });
  };

  useEffect(() => {
    getProjectById();
  }, []);

  // let ItemId = parseInt(props.match.params.id, 10);
  // let ItemId = props.match.params.id;
  let { id } = useParams(); // Hook
  let ItemId = id;

  if (!projects) {
    return null;
  } else {
    const currentItem = projects.find(item => item._id === ItemId);
    const currentIndex = projects.findIndex(item => item._id === ItemId);
    const prevItem = projects[currentIndex - 1];
    const nextItem = projects[currentIndex + 1];

    if (currentItem) {
      return (
        <motion.div initial="initial" animate="enter" exit="exit">
          <BtnDarkMode />

          {/********** Hero ***********/}
          <motion.div variants={varfadeIn}>
            <Hero img={currentItem} />
          </motion.div>

          <SmoothScrollbar>
            <Header />
            <Box height="100vh" />
            {/********** Content ***********/}
            <ProjectDetailsContent currentItem={currentItem} />
          </SmoothScrollbar>

          {/********** Controls ***********/}
          <motion.div variants={varfadeIn}>
            <ProjectDetailsControls prevItem={prevItem} nextItem={nextItem} />
          </motion.div>
        </motion.div>
      );
    } else {
      return <NoMatchPage />;
    }
  }
};

export default ProjectDetailsPage;

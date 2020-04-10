import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { Box } from "@material-ui/core";
import { API } from "../config";
import { varfadeIn, UrlFormat } from "../utilities";
import { Header, HeroProjectDetails, BtnDarkMode } from "../commons";
import { SnackStatus } from "../@material-ui-custom";
import { ProjectDetailsContent, ProjectDetailsControls, NoMatchPage } from ".";

const ProjectDetailsPage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [projects, setProjects] = useState(null);

  // Get Project By Id
  const getProjectById = async () => {
    await API.get("projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        SnackStatus(enqueueSnackbar, {
          message: "Cannot connect to the server!",
          variant: "error",
        });
      });
  };

  useEffect(() => {
    getProjectById();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // let ItemId = parseInt(props.match.params.id, 10);
  // let ItemId = props.match.params.id;
  let { name } = useParams(); // Hook
  let ItemId = name;

  if (!projects) {
    return null;
  }

  const currentItem = projects.find((item) => UrlFormat(item.name) === ItemId);
  const currentIndex = projects.findIndex(
    (item) => UrlFormat(item.name) === ItemId
  );
  const prevItem = projects[currentIndex - 1];
  const nextItem = projects[currentIndex + 1];

  // console.log("currentItem:", currentItem.name);
  // console.log("prevItem:", prevItem);
  // console.log("nextItem:", nextItem);

  if (currentItem) {
    return (
      <motion.div initial="initial" animate="enter" exit="exit">
        <BtnDarkMode />

        {/********** Hero ***********/}
        <motion.div variants={varfadeIn}>
          <HeroProjectDetails item={currentItem} />
        </motion.div>

        <Header />
        <Box height="100vh" />
        {/********** Content ***********/}
        <ProjectDetailsContent currentItem={currentItem} />

        {/********** Controls ***********/}
        <motion.div variants={varfadeIn}>
          <ProjectDetailsControls prevItem={prevItem} nextItem={nextItem} />
        </motion.div>
      </motion.div>
    );
  }
  return <NoMatchPage />;
};

export default ProjectDetailsPage;

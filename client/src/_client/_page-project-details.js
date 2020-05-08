import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Box } from "@material-ui/core";
import { varfadeIn, UrlFormat } from "../utilities";
import { HeaderClient, HeroProjectDetails, Page404 } from "../commons";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../redux";
import { ProjectDetailsContent, ProjectDetailsControls } from "./projects";

const ProjectDetailsPage = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  // GET PROJECTS
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  let { name } = useParams();
  let ItemId = name;

  // if (!projects) {
  //   return null;
  // }

  const currentItem = projects.find((item) => UrlFormat(item.name) === ItemId);
  const currentIndex = projects.findIndex(
    (item) => UrlFormat(item.name) === ItemId
  );
  const prevItem = projects[currentIndex - 1];
  const nextItem = projects[currentIndex + 1];

  if (currentItem) {
    return (
      <motion.div initial="initial" animate="enter" exit="exit">
        {/********** COMMONS ***********/}
        <HeaderClient />

        {/********** HERO ***********/}
        <HeroProjectDetails item={currentItem} />
        <Box height="100vh" />

        {/********** CONTENT ***********/}
        <ProjectDetailsContent currentItem={currentItem} />

        {/********** CONTROLS ***********/}
        <motion.div variants={varfadeIn}>
          <ProjectDetailsControls prevItem={prevItem} nextItem={nextItem} />
        </motion.div>
      </motion.div>
    );
  }
  return <Page404 />;
};

export default ProjectDetailsPage;

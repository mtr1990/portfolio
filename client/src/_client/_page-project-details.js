import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { Box } from "@material-ui/core";
import { API } from "../configs";
import { varfadeIn, UrlFormat } from "../utilities";
import { HeaderClient, HeroProjectDetails } from "../commons";
import { SnackStatus } from "../@material-ui-custom";
import { ProjectDetailsContent, ProjectDetailsControls, NoMatchPage } from ".";

const ProjectDetailsPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [projects, setProjects] = useState(null);

  // GET PROJECT BY ID
  useEffect(() => {
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
    getProjectById();
  }, [enqueueSnackbar]);

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
  return <NoMatchPage />;
};

export default ProjectDetailsPage;

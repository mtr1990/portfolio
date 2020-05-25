import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";
import { path_DASHBOARD } from "../../configs";
import { validationProjectForm } from "../../utilities";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { MoreBreadcrumbs } from "../../theme/@material-ui-custom";
import { getProject, updateProject } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { HeaderDashboard } from "../../commons";
import { ProjectForm } from ".";
import { LoginCheck } from "../login";

function ProjectEdit() {
  let { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [initialState, setInitialState] = useState({
    name: "",
    description: "",
    category: "",
    thumbnail: [],
    hero: [],
    imglist: [],
    videolist: [],
  });

  const project = useSelector((state) => state.projects.project);

  // GET PROJECT BY ID
  useEffect(() => {
    dispatch(getProject(id, enqueueSnackbar));
  }, [dispatch, id, enqueueSnackbar]);

  // DISPLAY STATE PROJECT BY ID
  useEffect(() => {
    if (Object.keys(project).length > 0) {
      setInitialState({
        name: project.name,
        description: project.description,
        category: project.category,
        thumbnail: project.thumbnail,
        hero: project.hero,
        imglist: project.imglist,
        videolist: project.videolist,
      });
    }
  }, [project]);

  // FORMIK
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialState,
    validationSchema: validationProjectForm,
    onSubmit: (values) => {
      const upProject = {
        id,
        name: values.name,
        description: values.description,
        category: values.category,
        thumbnail: values.thumbnail,
        hero: values.hero,
        imglist: values.imglist,
        videolist: values.videolist,
      };

      dispatch(updateProject(upProject, enqueueSnackbar));
      setTimeout(() => {
        formik.setSubmitting(false);
      }, 1600);
    },
  });

  return (
    <LoginCheck>
      {/* <DebugForMik formik={formik} /> */}
      <motion.div initial="initial" animate="enter" exit="exit">
        {/********** COMMONS ***********/}
        <HeaderDashboard />
        <MoreBreadcrumbs current="Edit Project">
          <Link to={path_DASHBOARD.root}>Projects</Link>
        </MoreBreadcrumbs>

        <Box className={classes.root}>
          <Typography variant="h4" component="h4">
            Edit Project
          </Typography>

          {/********** FORM ***********/}
          <ProjectForm formik={formik} txtSubmit="Save" />
        </Box>
      </motion.div>
    </LoginCheck>
  );
}

export default ProjectEdit;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "640px",
    margin: `0 auto ${theme.spacing(10)}px`,
    background: theme.palette.background.card,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadiusMd,
    boxShadow: theme.shadows[25].card.root,
  },
}));

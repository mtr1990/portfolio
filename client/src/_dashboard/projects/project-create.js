import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { path_DASHBOARD } from "../../configs";
import { HeaderDashboard } from "../../commons";
import { validationProjectForm, DebugForMik } from "../../utilities";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { MoreBreadcrumbs } from "../../theme/@material-ui-custom";
import { useDispatch, useSelector } from "react-redux";
import { addProject, getCategories } from "../../redux";
import { ProjectForm } from ".";
import { LoginCheck } from "../login";

function ProjectCreate() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [initialState, setInitialState] = useState({
    name: "",
    description: "",
    thumbnail: "",
    hero: "",
    imglist: [""],
    videolist: [],
    category: "",
  });

  const setCategory = useSelector(
    (state) =>
      state.categories.categories[0] && state.categories.categories[0].name
  );

  // GET CATEGORIES
  useEffect(() => {
    dispatch(getCategories());
    setInitialState((prevState) => ({
      ...prevState,
      category: setCategory,
    }));
  }, [dispatch, setCategory]);

  // FORMIK
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialState,
    validationSchema: validationProjectForm,
    onSubmit: (values) => {
      const newProject = {
        name: values.name,
        description: values.description,
        thumbnail: values.thumbnail,
        hero: values.hero,
        category: values.category,
        imglist: values.imglist,
        videolist: values.videolist,
      };

      dispatch(addProject(newProject, enqueueSnackbar));
      setTimeout(() => {
        formik.setSubmitting(false);
      }, 1600);
    },
  });

  return (
    <LoginCheck>
      <DebugForMik formik={formik} />

      <motion.div initial="initial" animate="enter" exit="exit">
        {/********** COMMONS ***********/}
        <HeaderDashboard />
        <MoreBreadcrumbs current="Create Project">
          <Link to={path_DASHBOARD.root}>Projects</Link>
        </MoreBreadcrumbs>

        <Box className={classes.root}>
          <Typography variant="h4" component="h4">
            Create Project
          </Typography>

          {/********** FORM ***********/}
          <ProjectForm formik={formik} txtSubmit="Create" />
        </Box>
      </motion.div>
    </LoginCheck>
  );
}

export default ProjectCreate;

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

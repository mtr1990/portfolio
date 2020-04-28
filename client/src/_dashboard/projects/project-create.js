import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { API, history, path_DASHBOARD } from "../../configs";
import { validationProjectForm, DisplayFormikState } from "../../utilities";
import { SnackStatus, MoreBreadcrumbs } from "../../@material-ui-custom";
import { HeaderDashboard, CheckLogin } from "../../commons";
import { ProjectForm } from "..";

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

const ProjectCreate = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [name] = useState("");
  const [description] = useState("");
  const [thumbnail] = useState("");
  const [hero] = useState("");
  const [imglist] = useState([""]);
  const [videolist] = useState([]);
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isChecked] = useState(false);
  const isCancelled = useRef(false);

  // GET CATEGORIES
  useEffect(() => {
    const getCategories = async () => {
      await API.get("categories")
        .then((res) => {
          if (!isCancelled.current) {
            if (res.data.length > 0) {
              setCategories(res.data.map((item) => item.name));
              setCategory(res.data[0].name);
              // setCategories(res.data);
              // setCategory(res.data[0]);
            }
          }
        })
        .catch((err) => {
          SnackStatus(enqueueSnackbar, {
            message: "Cannot connect to the server!",
            variant: "error",
          });
        });
    };
    getCategories();
    return () => {
      isCancelled.current = true;
    };
  }, [enqueueSnackbar, categories]);

  // CREATE PROJECT
  const createProject = async (
    name,
    description,
    thumbnail,
    hero,
    category,
    imglist,
    videolist,
    isChecked
  ) => {
    const data = {
      name,
      description,
      thumbnail,
      hero,
      category,
      imglist,
      videolist,
      isChecked,
    };
    await API.post(`projects/save`, data)
      .then((res) => {
        SnackStatus(enqueueSnackbar, {
          message: "Created success!",
          variant: "success",
        });
        history.push(path_DASHBOARD.root);
      })
      .catch((err) => {
        SnackStatus(enqueueSnackbar, {
          message: "Created error!",
          variant: "error",
        });
      });
  };

  // SUBMIT
  const handleSubmit = (values, { setSubmitting }) => {
    createProject(
      values.name,
      values.description,
      values.thumbnail,
      values.hero,
      values.category,
      values.imglist,
      values.videolist,
      values.isChecked
    );
    setTimeout(() => {
      setSubmitting(false);
    }, 1600);
  };

  return (
    <CheckLogin>
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
          <Formik
            enableReinitialize
            initialValues={{
              name,
              description,
              thumbnail,
              hero,
              category,
              categories,
              imglist,
              videolist,
              isChecked,
            }}
            validationSchema={validationProjectForm}
            onSubmit={handleSubmit}
            render={(props) => (
              <>
                <DisplayFormikState {...props} />
                <ProjectForm {...props} txtSubmit="Create" />
              </>
            )}
          />
        </Box>
      </motion.div>
    </CheckLogin>
  );
};

export default ProjectCreate;

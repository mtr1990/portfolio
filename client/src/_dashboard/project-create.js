import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { API, history, path_DASHBOARD } from "../config";
import { validationProjectForm } from "../utilities";
import { SnackStatus } from "../@material-ui-custom";
import { Header } from "../commons";
import { ProjectForm } from ".";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "640px",
    margin: `${theme.spacing(24)}px auto ${theme.spacing(10)}px`,
    background: theme.palette.background.card,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadiusMd,
    boxShadow: theme.shadows[25].card.root,
  },
}));

const CreateProject = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [name] = useState("");
  const [description] = useState("");
  const [thumbnail] = useState("");
  const [hero] = useState("");
  const [category, setCategory] = useState("");
  const [imglist] = useState([""]);
  const [videolist] = useState([]);
  const [categories, setCategories] = useState([]);

  // Get Categories
  useEffect(() => {
    const getCategories = async () => {
      await API.get("categories")
        .then((res) => {
          // setCategories(res.data);
          if (res.data.length > 0) {
            setCategories(res.data.map((item) => item.name));
            setCategory(res.data[0].name);
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
  }, [enqueueSnackbar]);

  // Create Project
  const createProject = async (
    name,
    description,
    thumbnail,
    hero,
    category,
    imglist,
    videolist
  ) => {
    const data = {
      name,
      description,
      thumbnail,
      hero,
      category,
      imglist,
      videolist,
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

  // Submit Create
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      createProject(
        values.name,
        values.description,
        values.thumbnail,
        values.hero,
        values.category,
        values.imglist,
        values.videolist
      );
      setSubmitting(false);
    }, 800);
  };

  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      <Header />

      <Box className={classes.root}>
        <Typography variant="h4" component="h4">
          Create Project
        </Typography>

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
          }}
          validationSchema={validationProjectForm}
          onSubmit={handleSubmit}
          render={(props) => (
            <>
              <ProjectForm {...props} txtSubmit="Create" />
            </>
          )}
        />
      </Box>
    </motion.div>
  );
};

export default CreateProject;

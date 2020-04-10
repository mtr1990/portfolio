import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { history, path_DASHBOARD } from "../../config";
import { validationProjectForm } from "../utilities";
import { Header } from "../commons";
import { ProjectForm } from ".";
import { SnackStatus } from "../@material-ui-custom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "640px",
    margin: `${theme.spacing(24)}px auto ${theme.spacing(10)}px`,
    background: theme.palette.background.card,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadiusMd,
    boxShadow: theme.shadows[25].card,
  },
}));

const EditProject = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  let { id } = useParams(); // Hook
  // let { id } = props.match.params;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [hero, setHero] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [imglist, setImglist] = useState([]);
  const [videolist, setVideolist] = useState([]);

  // Get Categories
  useEffect(() => {
    const getCategories = async () => {
      await axios
        .get("/api/categories")
        .then((res) => {
          // setCategories(res.data);
          if (res.data.length > 0) {
            setCategories(res.data.map((item) => item.name));
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

  // Get Project By Id
  useEffect(() => {
    const getProjectById = async () => {
      await axios
        .get(`/api/projects/${id}`)
        .then((res) => {
          setName(res.data.name);
          setDescription(res.data.description);
          setThumbnail(res.data.thumbnail);
          setHero(res.data.hero);
          setCategory(res.data.category);
          setImglist(res.data.imglist);
          setVideolist(res.data.videolist);
        })
        .catch((err) => {
          SnackStatus(enqueueSnackbar, {
            message: "Cannot connect to the server!",
            variant: "error",
          });
        });
    };

    getProjectById();
  }, [id, enqueueSnackbar]);

  // Edit Project
  const editProject = async (
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
    await axios
      .put(`/api/projects/update/${id}`, data)
      .then((res) => {
        SnackStatus(enqueueSnackbar, {
          message: "Updated success!",
          variant: "success",
        });

        history.push(path_DASHBOARD.root);
      })
      .catch((err) => {
        SnackStatus(enqueueSnackbar, {
          message: "Updated error!",
          variant: "error",
        });
      });
  };

  // Submit Edit
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      editProject(
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
          Edit Project
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
              <ProjectForm {...props} txtSubmit="Save" />
            </>
          )}
        />
      </Box>
    </motion.div>
  );
};

export default EditProject;

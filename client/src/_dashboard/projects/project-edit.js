import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { API, history, path_DASHBOARD } from "../../configs";
import { validationProjectForm } from "../../utilities";
import { HeaderDashboard, CheckLogin } from "../../commons";
import { ProjectForm } from "..";
import { SnackStatus } from "../../styles/@material-ui-custom";

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

const ProjectEdit = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  let { id } = useParams(); // Hook

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [hero, setHero] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [imglist, setImglist] = useState([]);
  const [videolist, setVideolist] = useState([]);

  // GET CATEGORIES
  useEffect(() => {
    const getCategories = async () => {
      await API.get("categories")
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

  // GET PROJECT BY ID
  useEffect(() => {
    const getProjectById = async () => {
      await API.get(`projects/${id}`)
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

  // EDIT PROJECT
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
    await API.put(`projects/update/${id}`, data)
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

  // SUBMIT EDIT
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
    <CheckLogin>
      <motion.div initial="initial" animate="enter" exit="exit">
        <HeaderDashboard />

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
    </CheckLogin>
  );
};

export default ProjectEdit;

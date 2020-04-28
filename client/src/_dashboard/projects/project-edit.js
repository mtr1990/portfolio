import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
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

const ProjectEdit = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  let { id } = useParams(); // Hook

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [hero, setHero] = useState("");
  const [imglist, setImglist] = useState([]);
  const [videolist, setVideolist] = useState([]);
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  // GET CATEGORIES
  useEffect(() => {
    const getCategories = async () => {
      await API.get("categories")
        .then((res) => {
          if (res.data.length > 0) {
            setCategories(res.data.map((item) => item.name));
            // setCategories(res.data);
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
          setIsChecked(res.data.isChecked);
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
    await API.put(`projects/update/${id}`, data)
      .then((res) => {
        history.push(path_DASHBOARD.root);
        SnackStatus(enqueueSnackbar, {
          message: "Updated success!",
          variant: "success",
        });
      })
      .catch((err) => {
        SnackStatus(enqueueSnackbar, {
          message: "Updated error!",
          variant: "error",
        });
      });
  };

  // SUBMIT
  const handleSubmit = (values, { setSubmitting }) => {
    editProject(
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
        <MoreBreadcrumbs current="Edit Project">
          <Link to={path_DASHBOARD.root}>Projects</Link>
        </MoreBreadcrumbs>

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
              isChecked,
            }}
            validationSchema={validationProjectForm}
            onSubmit={handleSubmit}
            render={(props) => (
              <>
                <DisplayFormikState {...props} />
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

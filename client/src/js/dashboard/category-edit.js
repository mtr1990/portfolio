import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { history, path_CATEGORIES } from "../../config";
import { validationCategoryForm } from "../utilities";
import { Header } from "../commons";
import { CategoryForm } from ".";
import { SnackStatus } from "../@material-ui-custom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
  },
  main: {
    width: "640px",
    background: theme.palette.background.card,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadiusMd,
    boxShadow: theme.shadows[25].card,
  },
}));

const EditCategory = () => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  let { id } = useParams(); // Hook
  // let { id } = props.match.params;

  const [name, setName] = useState("");

  // Get Category By Id
  useEffect(() => {
    const getCategoryById = async () => {
      await axios
        .get(`/api/categories/${id}`)
        .then((res) => {
          setName(res.data.name);
        })
        .catch((err) => {
          SnackStatus(enqueueSnackbar, {
            message: "Cannot connect to the server!",
            variant: "error",
          });
        });
    };

    getCategoryById();
  }, [id, enqueueSnackbar]);

  // Edit Category
  const editCategory = async (name) => {
    const data = {
      name,
    };
    await axios
      .put(`/api/categories/update/${id}`, data)
      .then((res) => {
        SnackStatus(enqueueSnackbar, {
          message: "Updated success!",
          variant: "success",
        });
        history.push(path_CATEGORIES.root);
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
      editCategory(values.name);
      setSubmitting(false);
    }, 800);
  };

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      className={classes.root}
    >
      <Header />

      <Box className={classes.main}>
        <Typography variant="h4" component="h4">
          Edit Category
        </Typography>

        <Formik
          enableReinitialize
          initialValues={{
            name,
          }}
          validationSchema={validationCategoryForm}
          onSubmit={handleSubmit}
          render={(props) => (
            <>
              <CategoryForm {...props} txtSubmit="Save" />
            </>
          )}
        />
      </Box>
    </motion.div>
  );
};

export default EditCategory;

import React, { useState } from "react";
import { Formik } from "formik";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { API, history, path_DASHBOARD } from "../config";
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

const CreateCategory = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [name] = useState("");

  // Create Project
  const createCategory = async (name) => {
    const data = {
      name,
    };
    await API.post(`categories/save`, data)
      .then((res) => {
        SnackStatus(enqueueSnackbar, {
          message: "Created success!",
          variant: "success",
        });
        history.push(path_DASHBOARD.categories.root);
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
      createCategory(values.name);
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
          Create Category
        </Typography>

        <Formik
          initialValues={{
            name,
          }}
          validationSchema={validationCategoryForm}
          onSubmit={handleSubmit}
          render={(props) => (
            <>
              <CategoryForm {...props} txtSubmit="Create" />
            </>
          )}
        />
      </Box>
    </motion.div>
  );
};

export default CreateCategory;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { API, history, path_DASHBOARD } from "../../configs";
import { validationCategoryForm } from "../../utilities";
import { HeaderDashboard, CheckLogin } from "../../commons";
import { CategoryForm } from "..";
import { SnackStatus, MoreBreadcrumbs } from "../../@material-ui-custom";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "640px",
    margin: "0 auto",
    background: theme.palette.background.card,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadiusMd,
    boxShadow: theme.shadows[25].card.root,
  },
}));

const CategoryCreate = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [name] = useState("");

  // CREATE CATEGORY
  const createCategory = async (name) => {
    const data = { name };
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

  // SUBMIT
  const handleSubmit = (values, { setSubmitting }) => {
    createCategory(values.name);
    setTimeout(() => {
      setSubmitting(false);
    }, 1600);
  };

  return (
    <CheckLogin>
      <motion.div initial="initial" animate="enter" exit="exit">
        {/********** COMMONS ***********/}
        <HeaderDashboard />
        <MoreBreadcrumbs current="Create Category">
          <Link to={path_DASHBOARD.categories.root}>Categories</Link>
        </MoreBreadcrumbs>

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
    </CheckLogin>
  );
};

export default CategoryCreate;

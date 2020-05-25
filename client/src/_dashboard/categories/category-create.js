import React, { useState } from "react";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { path_DASHBOARD } from "../../configs";
import { validationCategoryForm, DebugForMik } from "../../utilities";
import { useDispatch } from "react-redux";
import { addCategory } from "../../redux";
import { MoreBreadcrumbs } from "../../theme/@material-ui-custom";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { HeaderDashboard } from "../../commons";
import { CategoryForm } from ".";
import { LoginCheck } from "../login";

const CategoryCreate = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [initialState] = useState({
    name: "",
    imgCollection: [],
  });

  // FORMIK
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validationCategoryForm,

    onSubmit: (values) => {
      const newCategory = {
        name: values.name,
        imgCollection: values.imgCollection,
      };

      dispatch(addCategory(newCategory, enqueueSnackbar));
    },
  });

  return (
    <LoginCheck>
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

          <DebugForMik formik={formik} />
          <CategoryForm formik={formik} txtSubmit="Create" />
        </Box>
      </motion.div>
    </LoginCheck>
  );
};

export default CategoryCreate;

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

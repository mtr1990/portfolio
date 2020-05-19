import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { path_DASHBOARD } from "../../configs";
import { validationCategoryForm, DebugForMik } from "../../utilities";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { MoreBreadcrumbs } from "../../theme/@material-ui-custom";
import { useDispatch, useSelector } from "react-redux";
import { updateCategory, getCategory } from "../../redux";
import { HeaderDashboard } from "../../commons";
import { CategoryForm } from ".";
import { LoginCheck } from "../login";

const CategoryEdit = () => {
  let { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [initialState, setInitialState] = useState({
    name: "",
    imgCollection: [],
  });
  const category = useSelector((state) => state.categories.category);

  // GET CATEGORY BY ID
  useEffect(() => {
    dispatch(getCategory(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (Object.keys(category).length > 0) {
      setInitialState({
        name: category.name,
        imgCollection:
          category.imgCollection !== undefined &&
          category.imgCollection.map((item) => {
            return item.source;
          }),
      });
    }
  }, [category]);

  // FORMIK
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialState,
    validationSchema: validationCategoryForm,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.set("_id", id);
      formData.set("name", values.name);
      values.imgCollection.map((file, index) => {
        // Check flie type
        if (file instanceof File) return formData.append("imgCollection", file);
        // flie is Blod
        file = new File([file], file.name.substring(37), {
          type: file.type,
          lastModified: Date.now(),
        });
        return formData.append("imgCollection", file);
      });

      dispatch(updateCategory(formData, enqueueSnackbar));
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
        <MoreBreadcrumbs current="Edit Category">
          <Link to={path_DASHBOARD.categories.root}>Categories</Link>
        </MoreBreadcrumbs>

        <Box className={classes.main}>
          <Typography variant="h4" component="h4">
            Edit Category
          </Typography>

          <CategoryForm formik={formik} txtSubmit="Save" />
        </Box>
      </motion.div>
    </LoginCheck>
  );
};

export default CategoryEdit;

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

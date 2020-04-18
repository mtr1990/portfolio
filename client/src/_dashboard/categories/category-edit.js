import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { API, history, path_DASHBOARD } from "../../configs";
import { validationCategoryForm } from "../../utilities";
import { HeaderDashboard, CheckLogin } from "../../commons";
import { CategoryForm } from "..";
import { SnackStatus } from "../../@material-ui-custom";

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

const CategoryEdit = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState("");
  let { id } = useParams(); // Hook

  // GET CATEGORY BY ID
  useEffect(() => {
    const getCategoryById = async () => {
      await API.get(`categories/${id}`)
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

  // EDIT CATEGORY
  const editCategory = async (name) => {
    const data = {
      name,
    };
    await API.put(`categories/update/${id}`, data)
      .then((res) => {
        SnackStatus(enqueueSnackbar, {
          message: "Updated success!",
          variant: "success",
        });
        history.push(path_DASHBOARD.categories.root);
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
    editCategory(values.name);
    setTimeout(() => {
      setSubmitting(false);
    }, 1600);
  };

  return (
    <CheckLogin>
      <motion.div initial="initial" animate="enter" exit="exit">
        <HeaderDashboard />

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
    </CheckLogin>
  );
};

export default CategoryEdit;

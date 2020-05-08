import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { path_DASHBOARD } from "../../configs";
import { validationUserForm } from "../../utilities";
import { Typography, makeStyles, Box } from "@material-ui/core";
import { MoreBreadcrumbs } from "../../theme/@material-ui-custom";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux";
import { HeaderDashboard } from "../../commons";
import { UserFormRegister } from ".";
import { LoginCheck } from "../login";

function UserCreate() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [initialState] = useState({
    email: "",
    password: "",
  });

  // FORMIK
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validationUserForm,
    onSubmit: (values) => {
      const newUser = {
        email: values.email,
        password: values.password,
      };
      dispatch(addUser(newUser, enqueueSnackbar));
      setTimeout(() => {
        formik.setSubmitting(false);
      }, 1600);
    },
  });

  return (
    <LoginCheck>
      <motion.div initial="initial" animate="enter" exit="exit">
        {/********** COMMONS ***********/}
        <HeaderDashboard />
        <MoreBreadcrumbs current="Create User">
          <Link to={path_DASHBOARD.users.root}>Users</Link>
        </MoreBreadcrumbs>

        <Box className={classes.main}>
          <Typography variant="h4" component="h4">
            Create User
          </Typography>

          <UserFormRegister formik={formik} />
        </Box>
      </motion.div>
    </LoginCheck>
  );
}

export default UserCreate;

const useStyles = makeStyles((theme) => ({
  main: {
    width: "640px",
    margin: `0 auto`,
    background: theme.palette.background.card,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadiusMd,
    boxShadow: theme.shadows[25].card.root,
  },
}));

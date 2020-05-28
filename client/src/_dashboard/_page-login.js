import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import { validationLogin, DebugForMik } from "../utilities";
import {
  Box,
  Grid,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { LoginUser } from "../redux";
import { HeaderClient } from "../commons";
import { LoginForm } from "./login";

function LoginPage(props) {
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
    validationSchema: validationLogin,
    onSubmit: (values) => {
      const newLogin = {
        email: values.email,
        password: values.password,
      };
      dispatch(LoginUser(newLogin, enqueueSnackbar));
    },
  });

  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      <DebugForMik formik={formik} />
      <HeaderClient />

      <Box className={classes.root}>
        <Container>
          <Box mt={-20}>
            <Grid container justify="center">
              <Grid item xs={12} sm={8} md={4}>
                <Typography variant="h2" component="h1" gutterBottom>
                  {props.heading ? props.heading : "Login"}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  {props.description ? props.description : null}
                </Typography>

                {/********** FORM ***********/}
                <LoginForm formik={formik} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
}

export default LoginPage;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  helpertext: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

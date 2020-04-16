import React, { useState } from "react";
import { motion } from "framer-motion";
import { Formik } from "formik";
import { history, API, path_DASHBOARD } from "../configs";
import { validationLogin } from "../utilities";
import {
  Container,
  Grid,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { HeaderClient } from "../commons";
import { UserFormLogin } from ".";

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

const LoginPage = (props) => {
  const classes = useStyles();
  const [email] = useState("");
  const [password] = useState("");
  const [isError, setIsError] = useState(null);

  // REQUEST LOGIN
  const requestLogin = async (email, password) => {
    const data = {
      email,
      password,
    };
    await API.post(`users/login`, data).then((res) => {
      if (res.data.error) {
        return setIsError(res.data.message);
      }
      history.push(path_DASHBOARD.root);
      history.go(0);
    });
  };

  // SUBMIT
  const handleSubmit = (values, { setSubmitting }) => {
    requestLogin(values.email, values.password);
    setTimeout(() => {
      setSubmitting(false);
    }, 2400);
  };

  return (
    <motion.div initial="initial" animate="enter" exit="exit">
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
                {/********** Formik ***********/}
                <Formik
                  initialValues={{
                    email,
                    password,
                  }}
                  validationSchema={validationLogin}
                  onSubmit={handleSubmit}
                  render={(props) => (
                    <>
                      <UserFormLogin {...props} isError={isError} />
                    </>
                  )}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default LoginPage;

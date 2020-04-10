import React from "react";
import { motion } from "framer-motion";
import { LoginHandle } from ".";
import {
  Container,
  Grid,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      <Box className={classes.root}>
        <Container>
          <Box mt={-20}>
            <Grid container justify="center">
              <Grid item xs={12} sm={8} md={4}>
                <Typography variant="h1" color="inherit" gutterBottom>
                  Login
                </Typography>

                {/********** Login Handle ***********/}
                <LoginHandle />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default LoginPage;

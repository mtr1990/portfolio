import React from "react";
import { motion } from "framer-motion";
import { Header, BtnDarkMode, BgBody } from "../common";
import { img404 } from "../../assets";
import { varbounce, varbounceIn, SmoothScrollbar } from "../utilities";
import { Box, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const NoMatchPage = () => (
  <motion.div initial="initial" animate="enter" exit="exit">
    <BgBody />
    <BtnDarkMode />

    <SmoothScrollbar>
      <Header />

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        height="100vh"
      >
        <motion.div variants={varbounce}>
          <Typography variant="h1"> Opp!</Typography>
        </motion.div>

        <Box my={8}>
          <motion.img
            src={img404}
            alt="Page not found.."
            variants={varbounceIn}
          />
        </Box>

        <Typography variant="body1" gutterBottom>
          The Page You Requested Could Not Be Found.
        </Typography>

        <Button component={Link} to="/" color="primary">
          Back to home
        </Button>
      </Box>
    </SmoothScrollbar>
  </motion.div>
);

export default NoMatchPage;

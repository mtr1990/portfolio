import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Box, Typography, Button } from "@material-ui/core";
import { varbounce, varbounceIn } from "../utilities";
import { HeaderClient, BgBody } from "../commons";
import { img404 } from "../assets";

const NoMatchPage = () => (
  <motion.div initial="initial" animate="enter" exit="exit">
    {/********** COMMONS ***********/}
    <BgBody />
    <HeaderClient />
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
          className="nomatch-img"
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
  </motion.div>
);

export default NoMatchPage;

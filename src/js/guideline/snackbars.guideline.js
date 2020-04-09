import React from "react";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { SnackMessage } from "../@material-ui-custom";
import { GlLayout } from ".";

const GlSnackbars = () => {
  return (
    <motion.div initial="initial" animate="enter" exit="exit">
      <GlLayout>
        <Typography variant="h2" color="textSecondary" gutterBottom>
          Toast
        </Typography>

        <SnackMessage
          id={1}
          message="This is an info alert — check it out!"
          variant="info"
        />
        <br />
        <SnackMessage
          id={2}
          message="This is an success alert — check it out!"
          variant="success"
        />
        <br />
        <SnackMessage
          id={3}
          message="This is an warning alert — check it out!"
          variant="warning"
        />
        <br />
        <SnackMessage
          id={4}
          message="This is an error alert — check it out!"
          variant="error"
        />
      </GlLayout>
    </motion.div>
  );
};

export default GlSnackbars;

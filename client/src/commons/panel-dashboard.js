import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-ui/core";
import { varfadeIn } from "../utilities";

function PanelDashBoard(props) {
  return (
    <motion.div variants={varfadeIn}>
      <Typography variant="h3" component="h1" paragraph>
        {props.txtHeading}
      </Typography>
      <Typography variant="body1" component="p" color="textSecondary">
        {props.numbLength} {props.txtSubHeading}
      </Typography>
    </motion.div>
  );
}

export default PanelDashBoard;

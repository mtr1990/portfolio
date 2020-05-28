import React from "react";
import { motion } from "framer-motion";
import { Box, makeStyles, Link } from "@material-ui/core";
import { GetApp } from "@material-ui/icons";
import { varfadeIn, varIcon } from "../utilities";
import { MoreIconButton, MoreTooltip } from "../theme/@material-ui-custom";

function BtnDownload() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={varfadeIn}
      >
        <motion.div whileTap="tap" whileHover="hover" variants={varIcon}>
          <Link href="https://www.dropbox.com/s/7medt713qxxbel0/CV_MAI_TRINH.pdf?dl=1">
            <MoreTooltip title="Download CV" arrow>
              <MoreIconButton aria-label="download" status="success">
                <GetApp />
              </MoreIconButton>
            </MoreTooltip>
          </Link>
        </motion.div>
      </motion.div>
    </Box>
  );
}

export default BtnDownload;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    right: theme.spacing(3),
    bottom: theme.spacing(3),
    zIndex: theme.zIndex.modal,
    [theme.breakpoints.up("md")]: {
      right: theme.spacing(6),
      bottom: theme.spacing(6),
    },
  },
}));

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Grid, Box, makeStyles } from "@material-ui/core";
import { varWrapBoth, varfadeIn, varIcon } from "../utilities";
import { BtnLightMode, BtnDownload } from "../commons";
import { CurriculumLeft, CurriculumMain } from "./curriculum";
import { IconButton } from "@material-ui/core";
import { path_CLIENT } from "../configs";
import { KeyboardBackspace } from "@material-ui/icons";
import { MoreTooltip } from "../theme/@material-ui-custom";

function CurriculumPage() {
  const classes = useStyles();

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={varWrapBoth}
    >
      <BtnLightMode />
      <BtnDownload />

      <Box className={classes.btn_back}>
        <Link to={path_CLIENT.about.root}>
          <motion.div whileTap="tap" whileHover="hover" variants={varIcon}>
            <MoreTooltip title="Back" placement="top" arrow>
              <IconButton aria-label="back">
                <KeyboardBackspace />
              </IconButton>
            </MoreTooltip>
          </motion.div>
        </Link>
      </Box>

      <Grid container className={classes.wrap}>
        {/********** LEFT ***********/}
        <Grid item xs={12} lg={3} className={classes.left_bar}>
          <CurriculumLeft />
        </Grid>

        {/********** MAIN ***********/}
        <Grid item xs={12} lg={9} className={classes.main_page_wrap}>
          <Box className={classes.main_page}>
            <motion.div variants={varfadeIn}>
              <CurriculumMain />
            </motion.div>
          </Box>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default CurriculumPage;

const useStyles = makeStyles((theme) => ({
  btn_back: {
    position: "fixed",
    left: theme.spacing(3),
    bottom: theme.spacing(9),
    zIndex: theme.zIndex.modal,
    [theme.breakpoints.up("md")]: {
      left: theme.spacing(6),
      bottom: theme.spacing(14),
    },
  },
  wrap: {
    height: "100vh",
  },
  left_bar: {
    padding: theme.spacing(8, 4),
  },
  main_page_wrap: {
    padding: theme.spacing(2),
  },
  main_page: {
    backgroundColor: theme.palette.background.area,
    height: "100%",
    padding: theme.spacing(6),
    borderRadius: theme.shape.borderRadiusLg,
  },
}));

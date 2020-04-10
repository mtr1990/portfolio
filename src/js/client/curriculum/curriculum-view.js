import React from "react";
import { motion } from "framer-motion";
import { varWrapEnter, varfadeInUp } from "../../utilities";
import { CurriculumHandle } from ".";
import {
  Box,
  Typography,
  IconButton,
  makeStyles,
  fade,
  Dialog,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  // root
  root: {
    "& .MuiBackdrop-root": {
      backgroundColor:
        theme.palette.type === "light"
          ? fade(theme.palette.contrast.higher, 0.88)
          : fade(theme.palette.contrast.lower, 0.88),
    },
    "& .MuiDialog-scrollPaper": {
      [theme.breakpoints.up("sm")]: {
        alignItems: "flex-start",
        justifyContent: "flex-end",
        marginTop: "12%",
        marginRight: "12%",
      },
    },
    "& .MuiDialog-paper": {
      overflow: "hidden",
      width: `calc(100% - 32px)`,
      margin: 0,
      animation: "$slit-in-vertical 0.45s ease-out both",
      padding: theme.spacing(3),
      borderRadius: theme.shape.borderRadiusLg,
      backgroundColor: theme.palette.background.card,
      boxShadow: theme.shadows[25].dialog,
      [theme.breakpoints.up("sm")]: {
        width: "480px",
      },
    },
  },

  // keyframes
  "@keyframes slit-in-vertical": {
    "0%": {
      WebkitTransform: "translateZ(-800px) rotateY(90deg)",
      transform: "translateZ(-800px) rotateY(90deg)",
      opacity: 0,
    },
    "50%": {
      WebkitTransform: "translateZ(-160px) rotateY(87deg)",
      transform: "translateZ(-160px) rotateY(87deg)",
      opacity: 1,
    },
    "100%": {
      WebkitTransform: "translateZ(0) rotateY(0)",
      transform: "translateZ(0) rotateY(0)",
    },
  },
}));

const CurriculumView = ({ onShow, onHide }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={onShow}
      onClose={onHide}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.root}
    >
      <motion.div variants={varWrapEnter}>
        <Box position="absolute" top={12} right={12}>
          <IconButton aria-label="close" size="small" onClick={onHide}>
            <Close />
          </IconButton>
        </Box>

        <Box mb={3}>
          {/********** Header ***********/}
          <motion.div variants={varfadeInUp}>
            <Typography variant="h2">Hello!</Typography>
          </motion.div>

          <motion.div variants={varfadeInUp}>
            <Typography variant="body1">Get my CV now.</Typography>
          </motion.div>
        </Box>

        {/********** Main ***********/}
        <CurriculumHandle closeModal={onHide} />
      </motion.div>
    </Dialog>
  );
};

export default CurriculumView;

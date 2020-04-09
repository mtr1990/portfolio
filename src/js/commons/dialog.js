import React from "react";
import { Dialog, makeStyles, fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // common
  common: {
    "& .MuiBackdrop-root": {
      backgroundColor:
        theme.palette.type === "light"
          ? fade(theme.palette.contrast.higher, 0.88)
          : fade(theme.palette.contrast.lower, 0.88),
    },
    "& .MuiDialog-paper": {
      backgroundColor: theme.palette.background.card,
    },
  },

  // small
  small: {
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
      borderRadius: theme.shape.borderRadiusLg,
      padding: theme.spacing(3),
      animation: "$slit-in-vertical 0.45s ease-out both",
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

export const ModalSmall = (props) => {
  const classes = useStyles();
  return (
    <Dialog className={`${classes.common} ${classes.small}`} {...props}>
      {props.children}
    </Dialog>
  );
};

import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Spinners } from "../commons";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
  },
  hero: {
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
}));

const Hero = ({ item }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box
        className={classes.hero}
        style={{
          backgroundImage: `
						 url(${item.hero})`,
        }}
      />
      <Spinners />
    </Box>
  );
};

export default Hero;

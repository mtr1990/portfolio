import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, makeStyles } from "@material-ui/core";
import { Logo, BtnLightMode } from ".";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: theme.spacing(8),
    width: "100%",
    zIndex: theme.zIndex.appBar,
    [theme.breakpoints.up("md")]: {
      top: theme.spacing(12),
    },
  },
}));

const HeaderClient = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Container>
          <Link to="/" style={{ display: "inline-block" }}>
            <Logo />
          </Link>
        </Container>
      </Box>

      {/********** BTN DARKMODE ***********/}
      <BtnLightMode />
    </>
  );
};

export default HeaderClient;

import React from "react";
import { Logo } from ".";
import { Container, Box, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  position: {
    position: "absolute",
    top: theme.spacing(8),
    width: "100%",
    zIndex: theme.zIndex.appBar,
    [theme.breakpoints.up("md")]: {
      top: theme.spacing(12),
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.position}>
      <Container>
        <Link to="/" style={{ display: "inline-block" }}>
          <Logo />
        </Link>
      </Container>
    </Box>
  );
};

export default Header;

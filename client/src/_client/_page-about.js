import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { path_CLIENT } from "../configs";
import { varWrapBoth, varfadeInRight } from "../utilities";
import {
  Box,
  Grid,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { HeaderClient, BgBody } from "../commons";
import { CurriculumView } from "./curriculum";

function AboutPage() {
  const classes = useStyles();

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={varWrapBoth}
    >
      {/********** COMMONS ***********/}
      <BgBody />
      <HeaderClient />

      <Box className={classes.root}>
        <Container>
          <Grid item md={7}>
            <motion.div variants={varfadeInRight}>
              <Box mb={4}>
                <Typography variant="h2" component="h1">
                  Hi there,
                  <br />
                  nice to meet you!
                </Typography>
              </Box>
            </motion.div>

            <motion.div variants={varfadeInRight}>
              <Typography variant="body1" gutterBottom>
                I'm a Full Stack Designer based in HCMC. For over five years
                I've been specializing in UI and UX design.
              </Typography>
            </motion.div>

            <motion.div variants={varfadeInRight}>
              <Typography variant="body1" gutterBottom>
                As a designer, I would like to balance between functionality and
                aesthetics, and at the same time explore the connections between
                users and products. To do that, I always wanted to learn new
                tools and techniques to improve my design process.
              </Typography>
            </motion.div>

            <motion.div variants={varfadeInRight}>
              <Typography variant="body1" color="textSecondary">
                To know more about me, you can view and download&nbsp;
                <Link to={path_CLIENT.about.curriculum}>
                  <Box color="primary.main" component="span">
                    my CV
                  </Box>
                </Link>
              </Typography>
            </motion.div>

            <Box className={classes.contacts}>
              <motion.div variants={varfadeInRight}>
                <Typography variant="body2" color="textSecondary">
                  Contact
                </Typography>
              </motion.div>

              <motion.div variants={varfadeInRight}>
                <a href="tel:+84 093 69 222 79">
                  <Box color="text.secondary" component="span">
                    +84 093 69 222 79
                  </Box>
                </a>
              </motion.div>

              <motion.div variants={varfadeInRight}>
                <a href="mailto:hello.mtr1990@gmail.com">
                  <Box color="text.secondary" component="span">
                    hello.mtr1990@gmail.com
                  </Box>
                </a>
              </motion.div>

              <motion.div variants={varfadeInRight}>
                <a
                  href="https://www.linkedin.com/in/mtr1990/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box color="text.secondary" component="span">
                    Linkedin
                  </Box>
                </a>
              </motion.div>

              <motion.div variants={varfadeInRight}>
                <a href="skype:lufydl1990?chat">
                  <Box color="text.secondary" component="span">
                    Skype
                  </Box>
                </a>
              </motion.div>
            </Box>

            <Box height={160} display={{ xs: "block", sm: "none" }} />
          </Grid>
        </Container>
      </Box>

      {/********** CURRICULUM VIEW ***********/}
      <CurriculumView />
    </motion.div>
  );
}

export default AboutPage;

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(20),
    [theme.breakpoints.up("md")]: {
      paddingTop: 0,
      height: "100vh",
      display: "flex",
      alignItems: "center",
    },
  },
  contacts: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(3),
    borderRadius: theme.shape.borderRadiusSm,
    border: `1px dashed ${theme.palette.divider}`,
    [theme.breakpoints.up("md")]: {
      position: "fixed",
      padding: 0,
      margin: 0,
      right: theme.spacing(8),
      bottom: theme.spacing(8),
      borderColor: "transparent",
    },
    "& > div": {
      marginBottom: theme.spacing(1),
      "&:last-child ": {
        marginBottom: 0,
      },
      [theme.breakpoints.up("md")]: {
        marginBottom: 0,
        marginLeft: theme.spacing(3),
        display: "inline-block",
      },
    },
  },
}));

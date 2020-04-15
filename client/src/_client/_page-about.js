import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Grid,
  Box,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";
import { varWrapBoth, varfadeInRight } from "../utilities";
import { HeaderClient, BtnDarkMode, BgBody } from "../commons";
import { CurriculumView } from ".";

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

const AboutPage = () => {
  const classes = useStyles();
  const childRefCurriculum = useRef();

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={varWrapBoth}
    >
      <BgBody />

      <BtnDarkMode />

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
                To know more about me, you can download&nbsp;
                <Link
                  onClick={() => childRefCurriculum.current.callbackOpenModal()}
                >
                  my CV
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
                <Link
                  href="tel:+84 093 69 222 79"
                  variant="body2"
                  color="textSecondary"
                >
                  +84 093 69 222 79
                </Link>
              </motion.div>

              <motion.div variants={varfadeInRight}>
                <Link
                  href="mailto:hello.mtr1990@gmail.com"
                  variant="body2"
                  color="textSecondary"
                >
                  hello.mtr1990@gmail.com
                </Link>
              </motion.div>

              <motion.div variants={varfadeInRight}>
                <Link
                  href="https://www.linkedin.com/in/mtr1990/"
                  variant="body2"
                  color="textSecondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </Link>
              </motion.div>

              <motion.div variants={varfadeInRight}>
                <Link
                  href="skype:lufydl1990?chat"
                  variant="body2"
                  color="textSecondary"
                >
                  Skype
                </Link>
              </motion.div>
            </Box>

            <Box height={160} display={{ xs: "block", sm: "none" }} />
          </Grid>
        </Container>
      </Box>

      {/********** CurriculumView ***********/}
      <CurriculumView ref={childRefCurriculum} />
    </motion.div>
  );
};

export default AboutPage;

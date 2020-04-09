import React from "react";
import { ScrollMagic } from "../../utilities";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Spinners } from "../../commons";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(20),
    backgroundColor: theme.palette.background.default,
  },
  list: {
    marginTop: theme.spacing(10),
    boxShadow: theme.shadows[25].image,
    [theme.breakpoints.up("md")]: {
      "& > *": {
        marginTop: theme.spacing(20),
      },
    },
  },
}));

const ProjectDetailsContent = ({ currentItem }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container>
        <Grid item md={7}>
          <ScrollMagic>
            <Box pt={20}>
              <Typography variant="h1" gutterBottom>
                {currentItem.name}
              </Typography>

              <Typography variant="body1">{currentItem.description}</Typography>
            </Box>
          </ScrollMagic>
        </Grid>

        <ScrollMagic>
          {currentItem.imglist.map((image, index) => (
            <Box key={index} position="relative" className={classes.list}>
              <img src={image} alt="item" />
              <Spinners />
            </Box>
          ))}
        </ScrollMagic>

        {currentItem.videolist.map((video, index) => (
          <ScrollMagic key={index}>
            <Box className={classes.list}>
              <video
                controls
                preload="metadata"
                poster={video.thumbnail}
                src={video.url}
                type="video/mp4"
              >
                Your browse rdoesn't support HTML5 videotag. Please view at:
                {video.url}
              </video>
            </Box>
          </ScrollMagic>
        ))}
      </Container>
    </Box>
  );
};

export default ProjectDetailsContent;

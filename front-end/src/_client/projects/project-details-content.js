import React from "react";
import { ScrollMagicFadeIn } from "../../utilities";
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
    paddingBottom: theme.spacing(32),
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
          <ScrollMagicFadeIn triggerHook={0.8} offset={160} duration={560}>
            <Box pt={20}>
              <Typography variant="h2" component="h1" gutterBottom>
                {currentItem.name}
              </Typography>

              <Typography variant="body1">{currentItem.description}</Typography>
            </Box>
          </ScrollMagicFadeIn>
        </Grid>

        {currentItem.imglist.map((image, index) => (
          <ScrollMagicFadeIn
            key={index}
            triggerHook={1}
            offset={160}
            duration={640}
          >
            <Box position="relative" className={classes.list}>
              <img src={image} alt={`img ${index + 1}`} />
              <Spinners />
            </Box>
          </ScrollMagicFadeIn>
        ))}

        {currentItem.videolist.map((video, index) => (
          <ScrollMagicFadeIn
            key={index}
            triggerHook={1}
            offset={160}
            duration={640}
          >
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
          </ScrollMagicFadeIn>
        ))}
      </Container>
    </Box>
  );
};

export default ProjectDetailsContent;

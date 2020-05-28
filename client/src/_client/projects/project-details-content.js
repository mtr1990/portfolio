import React from "react";
import { ScrollMagicFadeIn } from "../../utilities";
import { Box, Container, makeStyles } from "@material-ui/core";
import { Spinners } from "../../commons";

function ProjectDetailsContent(props) {
  const classes = useStyles();
  const { currentItem } = props;

  return (
    <Box className={classes.root}>
      <Container>
        {currentItem.imglist.map((image, index) => (
          <ScrollMagicFadeIn
            key={index}
            triggerHook={1}
            offset={160}
            duration={640}
          >
            <Box position="relative" className={classes.list}>
              <img src={image.url} alt={image.url} />
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
}

export default ProjectDetailsContent;

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

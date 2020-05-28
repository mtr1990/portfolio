import React from "react";
import { Box, makeStyles, Typography, Link } from "@material-ui/core";
import { motion } from "framer-motion";
import { Share, FormatQuote, AssignmentInd } from "@material-ui/icons";
import { ReactSVG } from "react-svg";
import { varfadeInUp, varIcon, varfadeIn } from "../../utilities";
import { infomation, socials } from ".";
import { iPicture, iShape } from "../../assets";

function CurriculumLeft() {
  const classes = useStyles();

  const informationList = infomation.map((item, index) => {
    return (
      <motion.div
        variants={varfadeInUp}
        key={index}
        className={classes.infomation_item}
      >
        <Typography variant="body2" color="textSecondary">
          {item.title}
        </Typography>
        <Typography variant="body1"> {item.description}</Typography>
      </motion.div>
    );
  });

  const socialList = socials.map((item, index) => {
    return (
      <motion.div variants={varfadeInUp} key={index}>
        <Link
          href={item.link}
          target={item.target}
          rel={item.rel}
          className={classes.social_icon}
        >
          <motion.div whileTap="tap" whileHover="hover" variants={varIcon}>
            <img src={item.icons} alt={item.link} />
          </motion.div>
        </Link>
      </motion.div>
    );
  });

  return (
    <>
      <ReactSVG src={iShape} className={classes.shape} />
      {/********** POSITION ***********/}
      <Box alignItems="center" className={classes.block}>
        <motion.div variants={varfadeIn} className={classes.avatar}>
          <img src={iPicture} alt={iPicture} />
        </motion.div>

        <Box>
          <motion.div variants={varfadeInUp}>
            <Typography variant="h4">Mai Trịnh</Typography>
          </motion.div>
          <motion.div variants={varfadeInUp}>
            <Typography color="textSecondary">Full Stack Designer</Typography>
          </motion.div>
        </Box>
      </Box>

      {/********** INTRODUCE ***********/}
      <Box className={classes.block}>
        <motion.div variants={varfadeInUp} className={classes.block_icon}>
          <FormatQuote color="action" fontSize="small" />
        </motion.div>
        <Box>
          <motion.div variants={varfadeInUp}>
            <Typography variant="subtitle1">My name is Trinh.</Typography>
          </motion.div>

          <motion.div variants={varfadeInUp}>
            <Typography>
              I'm a full stack designer based in HCMC. For over five years I've
              been specialising in UI and UX design.
              <br />
              <br />
              As a designer, I would like to balance between functionality and
              aesthetics, while exploring the connections between users and
              products. To do that, I always wanted to learn new tools and
              techniques to improve my design process.
            </Typography>
          </motion.div>
        </Box>
      </Box>

      {/********** INFORMATION ***********/}
      <Box className={classes.block}>
        <motion.div variants={varfadeInUp} className={classes.block_icon}>
          <AssignmentInd color="action" fontSize="small" />
        </motion.div>
        <Box>{informationList}</Box>
      </Box>

      {/********** SOCIALS ***********/}
      <Box className={classes.block}>
        <motion.div variants={varfadeInUp} className={classes.block_icon}>
          <Share color="action" fontSize="small" />
        </motion.div>
        <Box display="flex">{socialList}</Box>
      </Box>
    </>
  );
}

export default CurriculumLeft;

const useStyles = makeStyles((theme) => ({
  block: {
    display: "flex",
    marginBottom: theme.spacing(8),
    "&:last-child": {
      marginBottom: 0,
    },
  },
  block_icon: { marginRight: theme.spacing(4) },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginRight: theme.spacing(4),
  },

  infomation_item: {
    marginBottom: theme.spacing(2),
    "&:last-child": {
      marginBottom: 0,
    },
  },

  social_icon: {
    display: "flex",
    alignContent: "center",
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    justifyContent: "center",
    marginRight: theme.spacing(2),
  },
  shape: {
    top: 0,
    left: 0,
    zIndex: -1,
    position: "absolute",
    "& svg": {
      width: theme.spacing(14),
      height: theme.spacing(22),
      "& path": {
        fill: theme.palette.contrast.low,
      },
    },
  },
}));

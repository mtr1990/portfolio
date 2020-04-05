import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Grid, Box, makeStyles } from "@material-ui/core";
import {
  varItem,
  varImg,
  ScrollMagic,
  varZoomInOut,
  varTransition,
} from "../../utilities";
import { Spinners } from "../../commons";

const useStyles = makeStyles((theme) => ({
  item: {
    overflow: "hidden",
    position: "relative",
    paddingTop: "177.777777778%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: theme.shadows[24],
    borderRadius: theme.shape.borderRadiusLg,
  },
  thumbnail: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

const ProjectItem = ({ item }) => {
  const classes = useStyles();
  const itemName = item.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Grid item xs={6}>
      <motion.div variants={varZoomInOut}>
        <Link to={"/projects/" + itemName}>
          <ScrollMagic>
            <motion.div
              whileTap="tap"
              whileHover="hover"
              variants={varItem}
              transition={varTransition}
            >
              <Box className={classes.item}>
                <motion.img
                  src={item.thumbnail}
                  alt="thumbnail"
                  variants={varImg}
                  transition={varTransition}
                  className={classes.thumbnail}
                />

                <Spinners />
              </Box>
            </motion.div>
          </ScrollMagic>
        </Link>
      </motion.div>
    </Grid>
  );
};
export default ProjectItem;

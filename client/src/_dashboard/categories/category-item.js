import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, IconButton, makeStyles } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { path_DASHBOARD } from "../../configs";
import { varfadeInUp } from "../../utilities";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.background.card,
    boxShadow: theme.shadows[25].card.root,
    borderRadius: theme.shape.borderRadiusSm,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(2.5),
    "&:last-child": {
      marginBottom: 0,
    },
  },
}));

const CategoryItem = ({ item, deleteCategory }) => {
  const classes = useStyles();

  return (
    <motion.div variants={varfadeInUp} className={classes.root}>
      <Box flexGrow={1}>
        <Typography variant="subtitle1">{item.name}</Typography>
      </Box>

      <IconButton
        onClick={() => deleteCategory(item._id)}
        aria-label="delete category"
      >
        <Delete />
      </IconButton>

      <Box ml={1}>
        <IconButton
          component={Link}
          to={`${path_DASHBOARD.categories.link_edit}/${item._id}`}
          aria-label="edit project"
        >
          <Edit />
        </IconButton>
      </Box>
    </motion.div>
  );
};

export default CategoryItem;

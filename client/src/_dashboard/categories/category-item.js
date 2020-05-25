import React from "react";
import { motion } from "framer-motion";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import { path_DASHBOARD } from "../../configs";
import { varfadeInUp } from "../../utilities";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../redux";
import { Box, Typography, IconButton, makeStyles } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";

const CategoryItem = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { item } = props;

  return (
    <motion.div variants={varfadeInUp} className={classes.root}>
      <Box className={classes.thumb}>
        {item.imgCollection.map((item, index) => {
          return <img key={index} src={item.url} alt={item.url} />;
        })}
      </Box>

      <Box flexGrow={1}>
        <Typography variant="subtitle1">{item.name}</Typography>
      </Box>

      <IconButton
        onClick={() => dispatch(deleteCategory(item._id, enqueueSnackbar))}
        aria-label="delete category"
      >
        <Delete fontSize="small" />
      </IconButton>

      <Box ml={1}>
        <IconButton
          component={Link}
          to={`${path_DASHBOARD.categories.link_edit}/${item._id}`}
          aria-label="edit project"
        >
          <Edit fontSize="small" />
        </IconButton>
      </Box>
    </motion.div>
  );
};

export default CategoryItem;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(2.5),
    boxShadow: theme.shadows[25].card.root,
    borderRadius: theme.shape.borderRadiusSm,
    backgroundColor: theme.palette.background.card,
    "&:last-child": {
      marginBottom: 0,
    },
  },
  thumb: {
    overflow: "hidden",
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
}));

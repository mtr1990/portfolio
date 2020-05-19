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

  // const test = `https://mtr-portfolio.herokuapp.com/upload/${item.name}`;

  // console.log(
  //   "test",
  //   item.imgCollection.map((item, index) => {
  //     return `https://mtr-portfolio.herokuapp.com/upload/${item.name}`;
  //     // return (
  //     //   <img
  //     //     key={index}
  //     //     src={`https://mtr-portfolio.herokuapp.com/upload/${item.name}`}
  //     //     alt=""
  //     //   />
  //     // );
  //   })
  // );

  return (
    <motion.div variants={varfadeInUp} className={classes.root}>
      {/* <Box width={64} height={64} bgcolor="primary.main">
        {item.imgCollection &&
          item.imgCollection.map((item, index) => {
            return (
              <img
                key={index}
                src={`https://mtr-portfolio.herokuapp.com/upload/${item.name}`}
                alt=""
              />
            );
          })}
      </Box> */}
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

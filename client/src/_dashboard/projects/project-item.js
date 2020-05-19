import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { path_DASHBOARD } from "../../configs";
import { varfadeInUp } from "../../utilities";
import { useSelector, useDispatch } from "react-redux";
import { deleteProject } from "../../redux";
import { Delete, Edit } from "@material-ui/icons";
import { SnackAction } from "../../theme/@material-ui-custom";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  makeStyles,
} from "@material-ui/core";

function ProjectItem(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const toogleView = useSelector((state) => state.projects.toogleView);
  const { item, index } = props;

  const onDelete = () => {
    SnackAction(enqueueSnackbar, {
      message: `Are you sure you want to delete this project - ${item.name} ?`,
      funC: () => dispatch(deleteProject(item._id, enqueueSnackbar)),
      btnAction: "Delete",
    });
  };

  return (
    <Grid item xs={!toogleView ? 12 : 6} md={!toogleView ? 12 : 3}>
      <motion.div variants={varfadeInUp}>
        <Box
          className={`${!toogleView ? classes.list_root : classes.gird_root} ${
            classes.commons
          }`}
        >
          {/********** BADGE ***********/}
          <Box className="badge">
            <Typography variant="subtitle2"> {index}</Typography>
          </Box>

          <Box className="container">
            {/********** THUMBNAIL ***********/}
            <Box className="thumbnail">
              <img src={item.thumbnail} alt={`thumbnail ${item.name}`} />
            </Box>

            {/********** DESCRIPTION ***********/}
            <Box className="content">
              <Typography variant="caption" component="div" color="primary">
                {item.category}
              </Typography>

              <Typography
                variant={!toogleView ? "h6" : "subtitle1"}
                component="h6"
                gutterBottom={!toogleView && true}
                noWrap={toogleView && true}
              >
                {item.name}
              </Typography>

              <Box display={toogleView ? "none" : ""}>
                <Typography variant="body1" component="p" color="textSecondary">
                  {item.description}
                </Typography>
              </Box>
            </Box>

            {/********** CONTROLS ***********/}
            <Box className="controls">
              <IconButton aria-label="delete project" onClick={onDelete}>
                <Delete fontSize="small" />
              </IconButton>

              <Box ml={toogleView ? 1 : 0} mt={!toogleView ? 1 : 0}>
                <IconButton
                  component={Link}
                  to={`${path_DASHBOARD.projects.link_edit}/${item._id}`}
                  aria-label="edit project"
                >
                  <Edit fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Grid>
  );
}

export default ProjectItem;

const useStyles = makeStyles((theme) => ({
  // LIST
  list_root: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2.5),
    "& .thumbnail": {
      width: theme.spacing(12),
      borderRadius: theme.shape.borderRadiusSm,
    },
    "& .content": {
      padding: `0 ${theme.spacing(4)}px`,
    },
    "& .controls": {
      flexDirection: "column",
    },
  },
  // GIRD
  gird_root: {
    "& .container": { flexDirection: "column", alignItems: "flex-end" },
    "& .thumbnail": {
      height: theme.spacing(36),
      display: "flex",
      alignItems: "center",
      borderRadius: `${theme.shape.borderRadiusMd}px ${theme.shape.borderRadiusMd}px 0 0`,
    },
    "& .content": {
      padding: `${theme.spacing(2)}px ${theme.spacing(2)}px 0`,
    },
    "& .controls": {
      flexDirection: "row",
      padding: `0 ${theme.spacing(2)}px ${theme.spacing(2)}px`,
    },
  },
  // COMMONS
  commons: {
    position: "relative",
    borderRadius: theme.shape.borderRadiusMd,
    backgroundColor: theme.palette.background.card,
    boxShadow: theme.shadows[25].card.root,
    transition: `all  ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeIn}`,
    "&:hover": {
      boxShadow: theme.shadows[25].card.hover,
    },
    "& .container": {
      display: "flex",
    },
    "& .badge": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      borderRadius: "50%",
      top: theme.spacing(1.5),
      left: theme.spacing(-1.5),
      width: theme.spacing(3),
      height: theme.spacing(3),
      backgroundColor: theme.palette.contrast.low,
    },
    "& .thumbnail": {
      overflow: "hidden",
    },
    "& .content": {
      width: "100%",
    },
    "& .controls": {
      display: "flex",
    },
  },
}));

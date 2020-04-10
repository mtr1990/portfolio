import React from "react";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Box, Typography, IconButton, makeStyles } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { path_DASHBOARD } from "../config";
import { SnackAction } from "../@material-ui-custom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2.5),
    marginBottom: theme.spacing(2.5),
    position: "relative",
    borderRadius: theme.shape.borderRadiusMd,
    backgroundColor: theme.palette.background.card,
    boxShadow: theme.shadows[25].card,
    "&:last-child": {
      marginBottom: 0,
    },
  },
  badge: {
    top: theme.spacing(1.5),
    left: theme.spacing(-1.5),
    width: theme.spacing(3),
    height: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    borderRadius: "50%",
    backgroundColor: theme.palette.contrast.lower,
  },
  thumbnail: {
    overflow: "hidden",
    width: theme.spacing(12),
    borderRadius: theme.shape.borderRadiusSm,
  },
}));

const ProjectItem = ({ item, index, deleteProject }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = () => {
    SnackAction(enqueueSnackbar, {
      message: `Are you sure you want to delete this project - ${item.name} ?`,
      funC: () => deleteProject(item._id),
      btnAction: "Delete",
    });
  };

  return (
    <Box className={classes.root}>
      {/********** Badge ***********/}
      <Box className={classes.badge}>
        <Typography variant="subtitle2"> {index + 1}</Typography>
      </Box>

      <Box display="flex" alignItems="flex-start">
        {/********** Thumbnail ***********/}
        <Box className={classes.thumbnail}>
          <img src={item.thumbnail} alt="thumbnail" />
        </Box>

        {/********** Description ***********/}
        <Box width="100%" pl={3} pr={8}>
          <Typography
            variant="caption"
            component="div"
            color="primary"
            gutterBottom
          >
            {item.category}
          </Typography>
          <Typography variant="h6" component="h6" gutterBottom>
            {item.name}
          </Typography>
          <Box display={{ xs: "none", sm: "block" }}>
            <Typography variant="body1" component="p" color="textSecondary">
              {item.description}
            </Typography>
          </Box>
        </Box>

        {/********** Controls ***********/}
        <Box display="flex" flexDirection="column">
          <IconButton aria-label="delete project" onClick={handleDelete}>
            <Delete />
          </IconButton>

          <Box height={8} />

          <IconButton
            component={Link}
            to={`${path_DASHBOARD.projects.link_edit}/${item._id}`}
            aria-label="edit project"
          >
            <Edit />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectItem;

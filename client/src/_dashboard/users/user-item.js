import React from "react";
import { Box, Typography, IconButton, makeStyles } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

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

const UserItem = ({ item, deleteUser }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box flexGrow={1}>
        <Typography variant="subtitle1">
          <Typography
            variant="subtitle1"
            color="textSecondary"
            component="span"
          >
            Name:{" "}
          </Typography>
          {item.email}
        </Typography>
        <Typography variant="subtitle1">
          <Typography
            variant="subtitle1"
            color="textSecondary"
            component="span"
          >
            Password:{" "}
          </Typography>
          {item.password}
        </Typography>
      </Box>

      <IconButton onClick={() => deleteUser(item._id)} aria-label="delete user">
        <Delete />
      </IconButton>
    </Box>
  );
};

export default UserItem;

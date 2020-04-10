import React from "react";
import { Box, Typography, IconButton, makeStyles } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import Moment from "react-moment";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.background.card,
    boxShadow: theme.shadows[25].card,
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

const EmailItem = ({ item, deleteEmail }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box flexGrow={1}>
        <Typography variant="caption" color="textSecondary">
          <Moment fromNow parse="YYYY-MM-DD HH:mm:ss">
            {item.date}
          </Moment>
        </Typography>
        <Typography variant="subtitle1">{item.email}</Typography>
      </Box>

      <IconButton
        onClick={() => deleteEmail(item._id)}
        aria-label="edit project"
      >
        <Delete />
      </IconButton>
    </Box>
  );
};

export default EmailItem;

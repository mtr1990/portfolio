import React from "react";
import moment from "moment";
import { useSnackbar } from "notistack";
import { motion } from "framer-motion";
import { varfadeInUp } from "../../utilities";
import { Delete } from "@material-ui/icons";
import { Box, Typography, IconButton, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { deleteEmail } from "../../redux";
import PropTypes from "prop-types";

function EmailItem(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { item } = props;

  const onDelete = () => {
    return dispatch(deleteEmail(item._id, enqueueSnackbar));
  };

  return (
    <motion.div variants={varfadeInUp} className={classes.root}>
      <Box flexGrow={1}>
        <Typography variant="caption" color="textSecondary">
          {moment(item.date).fromNow()}
        </Typography>

        <Typography variant="subtitle1">{item.email}</Typography>
      </Box>

      <IconButton onClick={onDelete} aria-label="edit project">
        <Delete fontSize="small" />
      </IconButton>
    </motion.div>
  );
}

export default EmailItem;

EmailItem.propTypes = {
  item: PropTypes.object.isRequired,
};

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

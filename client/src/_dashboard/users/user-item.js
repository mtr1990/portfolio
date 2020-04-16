import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Typography,
  IconButton,
  makeStyles,
  Link,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
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

const UserItem = ({ item, deleteUser }) => {
  const classes = useStyles();
  const [hidden, setHidden] = useState(true);

  const showPassword = () => {
    setHidden(!hidden);
  };

  return (
    <motion.div variants={varfadeInUp} className={classes.root}>
      <Box flexGrow={1}>
        <Typography variant="subtitle2">
          <Typography
            variant="subtitle2"
            color="textSecondary"
            component="span"
          >
            Username:{" "}
          </Typography>
          {item.email}
        </Typography>
        <Typography variant="subtitle2">
          <Typography
            variant="subtitle2"
            color="textSecondary"
            component="span"
          >
            Password:{" "}
          </Typography>

          <span
            style={{
              color: hidden && "transparent",
              textShadow: hidden && " 0 0 5px rgba(0,0,0,0.5)",
            }}
          >
            {item.password}
          </span>
        </Typography>

        <Link underline="none" onClick={showPassword}>
          <Typography variant="caption">{hidden ? "Show" : "Hide"}</Typography>{" "}
        </Link>
      </Box>

      <IconButton onClick={() => deleteUser(item._id)} aria-label="delete user">
        <Delete />
      </IconButton>
    </motion.div>
  );
};

export default UserItem;

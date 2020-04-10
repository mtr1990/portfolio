import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    borderBottom: `${theme.palette.divider} dashed 1px`,
    "&:last-child": {
      marginBottom: 0,
      borderWidth: 0,
    },
  },
}));

const GlBlock = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} {...props}>
      {props.children}
    </Box>
  );
};

export default GlBlock;

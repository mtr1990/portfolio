import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	// info
	info: {
		color: theme.palette.info.main
	},
	// success
	success: {
		color: theme.palette.success.main
	},
	// warning
	warning: {
		color: theme.palette.warning.main
	}
}));

export const TypographyInfo = props => {
	const classes = useStyles();
	return (
		<Typography className={classes.info} {...props}>
			{props.children}
		</Typography>
	);
};

export const TypographySuccess = props => {
	const classes = useStyles();
	return (
		<Typography className={classes.success} {...props}>
			{props.children}
		</Typography>
	);
};

export const TypographyWarning = props => {
	const classes = useStyles();
	return (
		<Typography className={classes.warning} {...props}>
			{props.children}
		</Typography>
	);
};

import React from "react";
import { Radio, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	success: { color: theme.palette.success.main },
	info: { color: theme.palette.info.main },
	warning: { color: theme.palette.warning.main },
	error: { color: theme.palette.error.main }
}));

export const RadioInfo = props => {
	const classes = useStyles();
	return (
		<Radio classes={{ checked: classes.info }} color="default" {...props} />
	);
};

export const RadioSuccess = props => {
	const classes = useStyles();
	return (
		<Radio
			classes={{ checked: classes.success }}
			color="default"
			{...props}
		/>
	);
};

export const RadioWarning = props => {
	const classes = useStyles();
	return (
		<Radio
			classes={{ checked: classes.warning }}
			color="default"
			{...props}
		/>
	);
};

export const RadioError = props => {
	const classes = useStyles();
	return (
		<Radio
			classes={{ checked: classes.error }}
			color="default"
			{...props}
		/>
	);
};

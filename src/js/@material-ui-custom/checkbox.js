import React from "react";
import { Checkbox, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	// info
	info: { color: theme.palette.info.main },
	// success
	success: { color: theme.palette.success.main },
	// warning
	warning: { color: theme.palette.warning.main },
	// error
	error: { color: theme.palette.error.main }
}));

export const CheckboxInfo = props => {
	const classes = useStyles();
	return (
		<Checkbox
			classes={{ checked: classes.info }}
			color="default"
			{...props}
		/>
	);
};

export const CheckboxSuccess = props => {
	const classes = useStyles();
	return (
		<Checkbox
			classes={{ checked: classes.success }}
			color="default"
			{...props}
		/>
	);
};

export const CheckboxWarning = props => {
	const classes = useStyles();
	return (
		<Checkbox
			classes={{ checked: classes.warning }}
			color="default"
			{...props}
		/>
	);
};

export const CheckboxError = props => {
	const classes = useStyles();
	return (
		<Checkbox
			classes={{ checked: classes.error }}
			color="default"
			{...props}
		/>
	);
};

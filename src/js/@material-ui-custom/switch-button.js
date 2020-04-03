import React from "react";
import { Switch, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	info: {
		"&$checked": {
			color: theme.palette.info.main,
			"& + $track": {
				backgroundColor: theme.palette.info.main
			}
		}
	},
	success: {
		"&$checked": {
			color: theme.palette.success.main,
			"& + $track": {
				backgroundColor: theme.palette.success.main
			}
		}
	},
	warning: {
		"&$checked": {
			color: theme.palette.warning.main,
			"& + $track": {
				backgroundColor: theme.palette.warning.main
			}
		}
	},
	error: {
		"&$checked": {
			color: theme.palette.error.main,
			"& + $track": {
				backgroundColor: theme.palette.error.main
			}
		}
	},
	checked: {},
	track: {},
	disabled: {}
}));

export const SwitchInfo = props => {
	const classes = useStyles();
	return (
		<Switch
			classes={{
				switchBase: classes.info,
				checked: classes.checked,
				track: classes.track,
				disabled: classes.disabled
			}}
			color="default"
			{...props}
		/>
	);
};

export const SwitchSuccess = props => {
	const classes = useStyles();
	return (
		<Switch
			classes={{
				switchBase: classes.success,
				checked: classes.checked,
				track: classes.track,
				disabled: classes.disabled
			}}
			color="default"
			{...props}
		/>
	);
};

export const SwitchWarning = props => {
	const classes = useStyles();
	return (
		<Switch
			classes={{
				switchBase: classes.warning,
				checked: classes.checked,
				track: classes.track,
				disabled: classes.disabled
			}}
			color="default"
			{...props}
		/>
	);
};

export const SwitchError = props => {
	const classes = useStyles();
	return (
		<Switch
			classes={{
				switchBase: classes.error,
				checked: classes.checked,
				track: classes.track,
				disabled: classes.disabled
			}}
			color="default"
			{...props}
		/>
	);
};

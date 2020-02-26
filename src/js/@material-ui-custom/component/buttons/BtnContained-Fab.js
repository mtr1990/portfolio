import React from "react";
import { Button, Fab, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	// basic
	basic: {
		color: theme.palette.contrast.higher,
		backgroundColor: theme.palette.contrast.low,
		"&:hover": {
			backgroundColor: theme.palette.contrast.low,
			// Reset on touch devices, it doesn't add specificity
			"@media (hover: none)": {
				backgroundColor: theme.palette.contrast.low
			}
		},
		"&:disabled": {
			color: theme.palette.contrast.higher,
			backgroundColor: theme.palette.contrast.low
		}
	},
	// info
	info: {
		backgroundColor: theme.palette.info.main,
		"&:hover": {
			backgroundColor: theme.palette.info.dark,
			// Reset on touch devices, it doesn't add specificity
			"@media (hover: none)": {
				backgroundColor: theme.palette.info.main
			}
		},
		"&:disabled": {
			color: theme.palette.common.white,
			backgroundColor: theme.palette.info.main
		}
	},
	// success
	success: {
		backgroundColor: theme.palette.success.main,
		"&:hover": {
			backgroundColor: theme.palette.success.dark,
			// Reset on touch devices, it doesn't add specificity
			"@media (hover: none)": {
				backgroundColor: theme.palette.success.main
			}
		},
		"&:disabled": {
			color: theme.palette.common.white,
			backgroundColor: theme.palette.success.main
		}
	},
	// warning
	warning: {
		backgroundColor: theme.palette.warning.main,
		"&:hover": {
			backgroundColor: theme.palette.warning.dark,
			// Reset on touch devices, it doesn't add specificity
			"@media (hover: none)": {
				backgroundColor: theme.palette.warning.main
			}
		},
		"&:disabled": {
			color: theme.palette.common.white,
			backgroundColor: theme.palette.warning.main
		}
	},
	// error
	error: {
		backgroundColor: theme.palette.error.main,
		"&:hover": {
			backgroundColor: theme.palette.error.dark,
			// Reset on touch devices, it doesn't add specificity
			"@media (hover: none)": {
				backgroundColor: theme.palette.error.main
			}
		},
		"&:disabled": {
			color: theme.palette.common.white,
			backgroundColor: theme.palette.error.main
		}
	},
	// common
	common: {
		color: theme.palette.common.white
	}
}));

export const BtnContainedBasic = props => {
	const classes = useStyles();
	return (
		<Button
			classes={{ root: classes.basic }}
			variant="contained"
			{...props}
		>
			{props.children}
		</Button>
	);
};

export const BtnContainedInfo = props => {
	const classes = useStyles();
	return (
		<Button
			className={classes.common}
			classes={{ root: classes.info }}
			variant="contained"
			{...props}
		>
			{props.children}
		</Button>
	);
};

export const BtnContainedSuccess = props => {
	const classes = useStyles();
	return (
		<Button
			className={classes.common}
			classes={{ root: classes.success }}
			variant="contained"
			{...props}
		>
			{props.children}
		</Button>
	);
};

export const BtnContainedWarning = props => {
	const classes = useStyles();
	return (
		<Button
			className={classes.common}
			classes={{ root: classes.warning }}
			variant="contained"
			{...props}
		>
			{props.children}
		</Button>
	);
};

export const BtnContainedError = props => {
	const classes = useStyles();
	return (
		<Button
			className={classes.common}
			classes={{ root: classes.error }}
			variant="contained"
			{...props}
		>
			{props.children}
		</Button>
	);
};

// Fab
export const FabBasic = props => {
	const classes = useStyles();
	return (
		<Fab classes={{ root: classes.basic }} {...props}>
			{props.children}
		</Fab>
	);
};

export const FabInfo = props => {
	const classes = useStyles();
	return (
		<Fab
			className={classes.common}
			classes={{ root: classes.info }}
			{...props}
		>
			{props.children}
		</Fab>
	);
};

export const FabSuccess = props => {
	const classes = useStyles();
	return (
		<Fab
			className={classes.common}
			classes={{ root: classes.success }}
			{...props}
		>
			{props.children}
		</Fab>
	);
};

export const FabWarning = props => {
	const classes = useStyles();
	return (
		<Fab
			className={classes.common}
			classes={{ root: classes.warning }}
			{...props}
		>
			{props.children}
		</Fab>
	);
};

export const FabError = props => {
	const classes = useStyles();
	return (
		<Fab
			className={classes.common}
			classes={{ root: classes.error }}
			{...props}
		>
			{props.children}
		</Fab>
	);
};

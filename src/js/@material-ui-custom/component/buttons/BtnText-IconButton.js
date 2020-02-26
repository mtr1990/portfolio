import React from "react";
import { fade, Button, IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	// basic
	basic: {
		color: theme.palette.contrast.higher,
		"&:hover": {
			backgroundColor: fade(
				theme.palette.contrast.high,
				theme.palette.action.hoverOpacity
			),
			// Reset on touch devices, it doesn't add specificity
			"@media (hover: none)": {
				backgroundColor: "transparent"
			}
		},
		"&:disabled": {
			color: theme.palette.contrast.higher
		}
	},
	// info
	info: {
		color: theme.palette.info.main,
		"&:hover": {
			backgroundColor: fade(
				theme.palette.info.main,
				theme.palette.action.hoverOpacity
			),
			// Reset on touch devices, it doesn't add specificity
			"@media (hover: none)": {
				backgroundColor: "transparent"
			}
		},
		"&:disabled": {
			color: theme.palette.info.main
		}
	},
	// success
	success: {
		color: theme.palette.success.main,
		"&:hover": {
			backgroundColor: fade(
				theme.palette.success.main,
				theme.palette.action.hoverOpacity
			),
			// Reset on touch devices, it doesn't add specificity
			"@media (hover: none)": {
				backgroundColor: "transparent"
			}
		},
		"&:disabled": {
			color: theme.palette.success.main
		}
	},
	// warning
	warning: {
		color: theme.palette.warning.main,
		"&:hover": {
			backgroundColor: fade(
				theme.palette.warning.main,
				theme.palette.action.hoverOpacity
			),
			// Reset on touch devices, it doesn't add specificity
			"@media (hover: none)": {
				backgroundColor: "transparent"
			}
		},
		"&:disabled": {
			color: theme.palette.warning.main
		}
	},
	// error
	error: {
		color: theme.palette.error.main,
		"&:hover": {
			backgroundColor: fade(
				theme.palette.error.main,
				theme.palette.action.hoverOpacity
			),
			// Reset on touch devices, it doesn't add specificity
			"@media (hover: none)": {
				backgroundColor: "transparent"
			}
		},
		"&:disabled": {
			color: theme.palette.error.main
		}
	}
}));

export const BtnBasic = props => {
	const classes = useStyles();
	return (
		<Button classes={{ root: classes.basic }} {...props}>
			{props.children}
		</Button>
	);
};

export const BtnInfo = props => {
	const classes = useStyles();
	return (
		<Button classes={{ root: classes.info }} {...props}>
			{props.children}
		</Button>
	);
};

export const BtnSuccess = props => {
	const classes = useStyles();
	return (
		<Button classes={{ root: classes.success }} {...props}>
			{props.children}
		</Button>
	);
};

export const BtnWarning = props => {
	const classes = useStyles();
	return (
		<Button classes={{ root: classes.warning }} {...props}>
			{props.children}
		</Button>
	);
};

export const BtnError = props => {
	const classes = useStyles();
	return (
		<Button classes={{ root: classes.error }} {...props}>
			{props.children}
		</Button>
	);
};

// IconButton
export const IconButtonInfo = props => {
	const classes = useStyles();
	return (
		<IconButton classes={{ root: classes.info }} {...props}>
			{props.children}
		</IconButton>
	);
};

export const IconButtonSuccess = props => {
	const classes = useStyles();
	return (
		<IconButton classes={{ root: classes.success }} {...props}>
			{props.children}
		</IconButton>
	);
};

export const IconButtonWarning = props => {
	const classes = useStyles();
	return (
		<IconButton classes={{ root: classes.warning }} {...props}>
			{props.children}
		</IconButton>
	);
};

export const IconButtonError = props => {
	const classes = useStyles();
	return (
		<IconButton classes={{ root: classes.error }} {...props}>
			{props.children}
		</IconButton>
	);
};

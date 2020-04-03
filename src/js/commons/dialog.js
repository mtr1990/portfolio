import React from "react";
import { Dialog, makeStyles, fade } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	// common
	common: {
		"& .MuiBackdrop-root": {
			backgroundColor:
				theme.palette.type === "light"
					? fade(theme.palette.contrast.higher, 0.88)
					: fade(theme.palette.contrast.lower, 0.88)
		},
		"& .MuiDialog-paper": {
			backgroundColor: theme.palette.background.block
		}
	},

	// full
	full: {
		"& .MuiDialog-scrollPaper": {
			alignItems: "flex-start",
			justifyContent: "flex-end"
		},
		"& .MuiDialog-paper": {
			width: "100%",
			height: "100%",
			maxWidth: "100%",
			maxHeight: "100%",
			margin: 0,
			padding: theme.spacing(3),
			[theme.breakpoints.up("md")]: {
				width: "50%"
			}
		}
	},
	// small
	small: {
		"& .MuiDialog-scrollPaper": {
			[theme.breakpoints.up("sm")]: {
				alignItems: "flex-start",
				justifyContent: "flex-end",
				marginTop: "12%",
				marginRight: "12%"
			}
		},
		"& .MuiDialog-paper": {
			overflow: "hidden",
			width: `calc(100% - 32px)`,
			margin: 0,
			borderRadius: theme.shape.borderRadiusMd,
			padding: theme.spacing(3),
			animation: "slit-in-vertical 0.45s ease-out both",
			[theme.breakpoints.up("sm")]: {
				width: "480px"
			}
		}
	}
}));

export const ModalFull = props => {
	const classes = useStyles();
	return (
		<Dialog className={`${classes.common} ${classes.full}`} {...props}>
			{props.children}
		</Dialog>
	);
};

export const ModalSmall = props => {
	const classes = useStyles();
	return (
		<Dialog className={`${classes.common} ${classes.small}`} {...props}>
			{props.children}
		</Dialog>
	);
};

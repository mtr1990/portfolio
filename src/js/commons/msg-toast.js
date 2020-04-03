import React from "react";
import FeatherIcon from "feather-icons-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	Box,
	Typography,
	Button,
	IconButton,
	makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	container: {
		"& .Toastify__toast": {
			padding: 0,
			margin: 0,
			minHeight: "auto",
			backgroundColor: "transparent",
			boxShadow: "none"
		},
		"& .Toastify__close-button": {
			display: "none"
		},
		"&.Toastify__toast-container": {
			padding: 0,
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				width: "auto"
			},
			"&.Toastify__toast-container--bottom-center": {
				left: 0,
				marginLeft: 0,
				[theme.breakpoints.up("sm")]: {
					left: "50%",
					transform: "translateX(-50%)"
				}
			},
			"&.Toastify__toast-container--top-right": {
				top: 0,
				right: 0,
				[theme.breakpoints.up("sm")]: {
					top: theme.spacing(2),
					right: theme.spacing(2)
				}
			}
		}
	},
	common: {
		overflow: "hidden",
		padding: "12px 8px",
		marginBottom: theme.spacing(2),
		color: theme.palette.common.black,
		backgroundColor: theme.palette.common.white,
		display: "flex",
		alignItems: "center",
		[theme.breakpoints.up("sm")]: {
			borderRadius: theme.shape.borderRadiusXs,
			display: "inline-flex"
		}
	},
	info: {
		color: theme.palette.common.white,
		backgroundColor: theme.palette.info.dark
	},
	success: {
		color: theme.palette.common.white,
		backgroundColor: theme.palette.success.dark
	},
	warning: {
		color: theme.palette.common.white,
		backgroundColor: theme.palette.warning.dark
	},
	error: {
		color: theme.palette.common.white,
		backgroundColor: theme.palette.error.dark
	}
}));

export const MsgContainer = () => {
	const classes = useStyles();
	return (
		<ToastContainer
			position="top-right"
			autoClose={1600}
			hideProgressBar
			newestOnTop={false}
			closeOnClick={true}
			rtl={false}
			pauseOnVisibilityChange={false}
			draggable={false}
			className={classes.container}
		/>
	);
};

export const MsgDelete = ({ closeToast, delProject, nameProject }) => {
	const classes = useStyles();
	return (
		<Box className={classes.common}>
			<Typography variant="body1">
				Are you sure you want to delete this
				<Typography
					variant="subtitle1"
					component="span"
					color="textSecondary"
				>
					&nbsp; {nameProject}
				</Typography>
				?
			</Typography>

			<Box ml={2} mr={1}>
				<Button
					variant="contained"
					color="primary"
					onClick={delProject}
				>
					Delete
				</Button>
			</Box>

			<Button color="primary" onClick={closeToast}>
				Close
			</Button>
		</Box>
	);
};

export const MsgInfo = ({ closeToast, txtMsg }) => {
	const classes = useStyles();
	return (
		<Box className={`${classes.common} ${classes.info}`}>
			<FeatherIcon icon="check" />

			<Box width={240} pr={2} ml={1} flexGrow={1}>
				<Typography variant="subtitle1">{txtMsg}</Typography>
			</Box>
			<IconButton
				color="inherit"
				size="small"
				onClick={closeToast}
				aria-label="edit project"
			>
				<FeatherIcon icon="x" />
			</IconButton>
		</Box>
	);
};

export const MsgSuccess = ({ closeToast, txtMsg }) => {
	const classes = useStyles();
	return (
		<Box className={`${classes.common} ${classes.success}`}>
			<FeatherIcon icon="check" />

			<Box width={240} pr={2} ml={1} flexGrow={1}>
				<Typography variant="subtitle1">{txtMsg}</Typography>
			</Box>
			<IconButton
				color="inherit"
				size="small"
				onClick={closeToast}
				aria-label="edit project"
			>
				<FeatherIcon icon="x" />
			</IconButton>
		</Box>
	);
};

export const MsgWarning = ({ closeToast, txtMsg }) => {
	const classes = useStyles();
	return (
		<Box className={`${classes.common} ${classes.warning}`}>
			<FeatherIcon icon="alert-triangle" />

			<Box width={240} pr={2} ml={1} flexGrow={1}>
				<Typography variant="subtitle1">{txtMsg}</Typography>
			</Box>

			<IconButton
				color="inherit"
				size="small"
				onClick={closeToast}
				aria-label="edit project"
			>
				<FeatherIcon icon="x" />
			</IconButton>
		</Box>
	);
};

export const MsgError = ({ closeToast, txtMsg }) => {
	const classes = useStyles();
	return (
		<Box className={`${classes.common} ${classes.error}`}>
			<FeatherIcon icon="alert-triangle" />

			<Box width={240} pr={2} ml={1} flexGrow={1}>
				<Typography variant="subtitle1">{txtMsg}</Typography>
			</Box>

			<IconButton
				color="inherit"
				size="small"
				onClick={closeToast}
				aria-label="edit project"
			>
				<FeatherIcon icon="x" />
			</IconButton>
		</Box>
	);
};

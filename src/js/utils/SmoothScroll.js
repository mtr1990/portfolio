import React, { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		position: "fixed !important",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		"& .scroll-content": {
			minHeight: "100%"
		},
		"& .scrollbar-track": {
			background: "transparent"
		},
		"& .scrollbar-thumb-x ": {
			background: "transparent"
		},
		"& .scrollbar-thumb-y": {
			background: theme.palette.contrast.low,
			width: "2px"
		}
	}
}));

const SmoothScrollbar = props => {
	const classes = useStyles();

	useEffect(() => {
		Scrollbar.use(OverscrollPlugin);
		Scrollbar.init(document.querySelector(".myScrollbar"), {
			alwaysShowTracks: false,
			plugins: {
				overscroll: {
					damping: 0.2,
					effect: "glow",
					glowColor: "#ff4d00",
					maxOverscroll: 240
				}
			}
		});
	}, []);

	return (
		<Box className={`myScrollbar ${classes.root}`}>{props.children}</Box>
	);
};

export default SmoothScrollbar;

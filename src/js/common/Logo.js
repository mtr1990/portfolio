import React from "react";
import { motion } from "framer-motion";
import { varfadeIn, varPath } from "../utils";
import { Box, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	logo: {
		display: "table",
		position: "relative",
		width: theme.spacing(8),
		height: theme.spacing(8),
		"& > svg": {
			top: 0,
			left: 0,
			strokeWidth: 28,
			display: "block",
			position: "absolute",
			"&.logo-foreground": {
				stroke: theme.palette.primary.main
			},
			"&.logo-background": {
				stroke: "rgba(250, 250, 250, 0.04)"
			}
		}
	}
}));

const Logo = () => {
	const classes = useStyles();
	return (
		<Link to="/">
			<Box className={classes.logo}>
				<motion.svg
					viewBox="0 0 560 560"
					className="logo-foreground"
					variants={varfadeIn}
				>
					<defs>
						<linearGradient
							x1="100%"
							y1="0%"
							x2="50%"
							y2="0%"
							id="color-logo"
						>
							<stop stopColor="#FF4E00" offset="0%"></stop>
							<stop stopColor="#FE8800" offset="100%"></stop>
						</linearGradient>
					</defs>
					<motion.path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M68 476V68l424 424V68L284 268"
						variants={varPath}
						fill="none"
						fillRule="evenodd"
						stroke="url(#color-logo)"
						strokeWidth="inherit"
					/>
				</motion.svg>

				<svg viewBox="0 0 560 560" className="logo-background">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M68 476V68l424 424V68L284 268"
						fill="none"
						fillRule="evenodd"
						stroke="inherit"
						strokeWidth="inherit"
					/>
				</svg>
			</Box>
		</Link>
	);
};

export default Logo;

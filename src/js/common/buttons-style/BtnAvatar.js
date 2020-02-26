import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { iAvatar } from "../../../assets";
import { varfadeInUp, varIcon } from "../../utils";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	position: {
		[theme.breakpoints.up("md")]: {
			bottom: "48px",
			right: "48px"
		}
	},
	state: {
		filter: "grayscale(100%)",
		transition: "all ease 0.24s",
		"&:hover": {
			filter: "none"
		}
	}
}));

const BtnAvatar = () => {
	const classes = useStyles();
	return (
		<Link to="/about">
			<Box
				position="fixed"
				bottom={24}
				right={24}
				width={64}
				height={64}
				zIndex="mobileStepper"
				className={classes.position}
			>
				<motion.div variants={varfadeInUp}>
					<motion.div
						whileTap="tap"
						whileHover="hover"
						variants={varIcon}
					>
						<Box className={classes.state}>
							<img src={iAvatar} alt="Go to About me" />
						</Box>
					</motion.div>
				</motion.div>
			</Box>
		</Link>
	);
};

export default BtnAvatar;

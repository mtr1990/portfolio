import React from "react";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { varIcon } from "../../utils";
import { Box, IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	close: {
		[theme.breakpoints.up("md")]: {
			top: "24px",
			right: "24px"
		}
	},
	controls: {
		[theme.breakpoints.up("md")]: {
			right: "24px",
			bottom: "48px"
		}
	}
}));

const ProjectDetailsControls = ({ prevItem, nextItem }) => {
	const classes = useStyles();
	return (
		<>
			<Link to="/">
				<Box
					position="fixed"
					top={12}
					right={12}
					zIndex="mobileStepper"
					className={classes.close}
				>
					<motion.div
						whileTap="tap"
						whileHover="hover"
						variants={varIcon}
					>
						<IconButton color="primary">
							<FeatherIcon icon="x" />
						</IconButton>
					</motion.div>
				</Box>
			</Link>

			<Box
				position="fixed"
				bottom={24}
				right={12}
				zIndex="mobileStepper"
				display="flex"
				className={classes.controls}
			>
				<Box mr={2}>
					{prevItem === undefined ? null : (
						<Link to={"/projects/" + prevItem.id}>
							<motion.div
								whileTap="tap"
								whileHover="hover"
								variants={varIcon}
							>
								<IconButton color="primary">
									<FeatherIcon icon="arrow-left" />
								</IconButton>
							</motion.div>
						</Link>
					)}
				</Box>

				<Box>
					{nextItem === undefined ? null : (
						<Link to={"/projects/" + nextItem.id}>
							<motion.div
								whileTap="tap"
								whileHover="hover"
								variants={varIcon}
							>
								<IconButton color="primary">
									<FeatherIcon icon="arrow-right" />
								</IconButton>
							</motion.div>
						</Link>
					)}
				</Box>
			</Box>
		</>
	);
};

export default ProjectDetailsControls;

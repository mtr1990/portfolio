import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
	varItem,
	varImg,
	ScrollMagic,
	varZoomInOut,
	varTransition
} from "../../utils";
import { Spinners } from "../../common";
import { Grid, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	item: {
		borderRadius: theme.shape.borderRadiusSm,
		overflow: "hidden",
		position: "relative",
		paddingTop: "177.777777778%",
		boxShadow: theme.shadows[24]
	},
	img: {
		position: "absolute",
		top: 0,
		width: "100%",
		height: "100%",
		objectFit: "cover"
	}
}));

const ProjectItem = ({ item }) => {
	const classes = useStyles();
	return (
		<Grid item xs={6}>
			<motion.div variants={varZoomInOut}>
				<Link to={"/projects/" + item.id}>
					<ScrollMagic>
						<motion.div
							whileTap="tap"
							whileHover="hover"
							variants={varItem}
							transition={varTransition}
						>
							<Box className={classes.item}>
								<motion.img
									src={item.thumbnail}
									alt="thumbnail"
									variants={varImg}
									transition={varTransition}
									className={classes.img}
								/>
								<Spinners />
							</Box>
						</motion.div>
					</ScrollMagic>
				</Link>
			</motion.div>
		</Grid>
	);
};
export default ProjectItem;

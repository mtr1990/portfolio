import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { GlLayout, GlBlock } from ".";

const useStyles = makeStyles(theme => ({
	box: {
		width: theme.spacing(12),
		height: theme.spacing(12),
		backgroundColor: theme.palette.background.block,
		marginRight: theme.spacing(2),
		marginBottom: theme.spacing(2),
		borderRadius: theme.shape.borderRadius,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		"&:last-child": {
			marginRight: 0
		}
	},
	z_1: { boxShadow: theme.shadows[1] },
	z_2: { boxShadow: theme.shadows[2] },
	z_3: { boxShadow: theme.shadows[3] },
	z_4: { boxShadow: theme.shadows[4] },
	z_5: { boxShadow: theme.shadows[5] },
	z_6: { boxShadow: theme.shadows[6] },
	z_7: { boxShadow: theme.shadows[7] },
	z_8: { boxShadow: theme.shadows[8] },
	z_9: { boxShadow: theme.shadows[9] },
	z_10: { boxShadow: theme.shadows[10] },
	z_11: { boxShadow: theme.shadows[11] },
	z_12: { boxShadow: theme.shadows[12] },
	z_13: { boxShadow: theme.shadows[13] },
	z_14: { boxShadow: theme.shadows[14] },
	z_15: { boxShadow: theme.shadows[15] },
	z_16: { boxShadow: theme.shadows[16] },
	z_17: { boxShadow: theme.shadows[17] },
	z_18: { boxShadow: theme.shadows[18] },
	z_19: { boxShadow: theme.shadows[19] },
	z_20: { boxShadow: theme.shadows[20] },
	z_21: { boxShadow: theme.shadows[21] },
	z_22: { boxShadow: theme.shadows[22] },
	z_23: { boxShadow: theme.shadows[23] },
	z_24: { boxShadow: theme.shadows[24] }
}));

const GlShadows = () => {
	const classes = useStyles();
	return (
		<motion.div initial="initial" animate="enter" exit="exit">
			<GlLayout>
				<Typography variant="h2" color="textSecondary" gutterBottom>
					Shadows
				</Typography>

				<GlBlock display="flex" flexWrap="wrap">
					<Box className={`${classes.box} ${classes.z_1}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-1
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_2}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-2
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_3}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-3
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_4}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-4
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_5}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-5
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_6}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-6
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_7}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-7
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_8}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-8
						</Typography>
					</Box>
				</GlBlock>

				<GlBlock display="flex" flexWrap="wrap">
					<Box className={`${classes.box} ${classes.z_9}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-9
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_10}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-10
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_11}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-11
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_12}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-12
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_13}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-13
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_14}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-14
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_15}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-15
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_16}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-16
						</Typography>
					</Box>
				</GlBlock>

				<GlBlock display="flex" flexWrap="wrap">
					<Box className={`${classes.box} ${classes.z_17}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-17
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_18}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-18
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_19}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-19
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_20}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-20
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_21}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-21
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_22}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-22
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_23}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-23
						</Typography>
					</Box>

					<Box className={`${classes.box} ${classes.z_24}`}>
						<Typography variant="subtitle2" color="textSecondary">
							z-24
						</Typography>
					</Box>
				</GlBlock>
			</GlLayout>
		</motion.div>
	);
};

export default GlShadows;

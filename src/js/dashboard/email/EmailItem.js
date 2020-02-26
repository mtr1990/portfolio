import React from "react";
import FeatherIcon from "feather-icons-react";
import {
	Grid,
	Box,
	Typography,
	IconButton,
	makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.block,
		boxShadow: theme.shadows[12],
		borderRadius: theme.shape.borderRadiusSm,
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		marginBottom: theme.spacing(2)
	}
}));

const EmailItem = ({ item, delItem }) => {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Grid container alignItems="center">
				<Grid item xs={10}>
					<Grid container>
						<Grid item xs={12} md={6}>
							<Typography variant="subtitle1">
								{item.email}
							</Typography>
						</Grid>

						<Grid item xs={12} md={6}>
							<Typography variant="body1">{item.date}</Typography>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs>
					<Grid container justify="flex-end">
						<IconButton onClick={delItem} aria-label="edit project">
							<FeatherIcon icon="trash" />
						</IconButton>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default EmailItem;

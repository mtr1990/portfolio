import React from "react";
import FeatherIcon from "feather-icons-react";
import { toast } from "react-toastify";
import { MsgDelete } from "../../common";
import { Box, Typography, IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(2),
		marginBottom: theme.spacing(2),
		position: "relative",
		borderRadius: theme.shape.borderRadiusSm,
		backgroundColor: theme.palette.background.block,
		boxShadow: theme.shadows[12]
	},
	badge: {
		top: "12px",
		left: "-12px",
		width: "24px",
		height: "24px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		borderRadius: "50%",
		backgroundColor: theme.palette.contrast.low
	},
	thumbnail: {
		overflow: "hidden",
		width: "100px",
		borderRadius: theme.shape.borderRadiusXs
	}
}));

const ProjectItem = ({ project, index, delProject, editProject }) => {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			{/********** Badge ***********/}
			<Box className={classes.badge}>
				<Typography variant="subtitle2"> {index + 1}</Typography>
			</Box>

			<Box display="flex" alignItems="flex-start">
				{/********** Thumbnail ***********/}
				<Box className={classes.thumbnail}>
					<img src={project.thumbnail} alt="thumbnail" />
				</Box>

				{/********** Description ***********/}
				<Box width="100%" px={3}>
					<Typography variant="h4" gutterBottom>
						{project.name}
					</Typography>
					<Box display={{ xs: "none", sm: "block" }}>
						<Typography variant="body1">
							{project.description}
						</Typography>
					</Box>
				</Box>

				{/********** Controls ***********/}
				<Box display="flex" flexDirection="column">
					<IconButton
						aria-label="delete project"
						onClick={() =>
							toast(
								<MsgDelete
									delProject={delProject}
									nameProject={project.name}
								/>,
								{
									autoClose: false,
									position: toast.POSITION.BOTTOM_CENTER
								}
							)
						}
					>
						<FeatherIcon icon="trash" />
					</IconButton>

					<Box height={8} />

					<IconButton onClick={editProject} aria-label="edit project">
						<FeatherIcon icon="edit-3" />
					</IconButton>
				</Box>
			</Box>
		</Box>
	);
};

export default ProjectItem;

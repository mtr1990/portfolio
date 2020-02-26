import React from "react";
import { ProjectEditHandle } from ".";
import { Typography } from "@material-ui/core";
import { ModalFull } from "../../common";

const ProjectEditView = ({ onShow, onHide, onRefresh, itemId }) => (
	<ModalFull
		open={onShow}
		onClose={onHide}
		aria-labelledby="alert-dialog-title"
		aria-describedby="alert-dialog-description"
	>
		<Typography variant="h2" gutterBottom>
			Edit Project
		</Typography>

		<ProjectEditHandle
			itemId={itemId}
			onClose={onHide}
			onRefresh={onRefresh}
		/>
	</ModalFull>
);

export default ProjectEditView;

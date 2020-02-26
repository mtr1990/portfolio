import React from "react";
import { ProjectAddHandle } from ".";
import { Typography } from "@material-ui/core";
import { ModalFull } from "../../common";

const ProjectAddView = ({ onShow, onHide, onRefresh }) => (
	<ModalFull
		open={onShow}
		onClose={onHide}
		aria-labelledby="alert-dialog-title"
		aria-describedby="alert-dialog-description"
	>
		<Typography variant="h2" gutterBottom>
			Add Project
		</Typography>

		<ProjectAddHandle onClose={onHide} onRefresh={onRefresh} />
	</ModalFull>
);

export default ProjectAddView;

import React from "react";
import FeatherIcon from "feather-icons-react";
import { FormControlLabel, Checkbox, Box } from "@material-ui/core";

const ProjectControlReverse = ({ staReverse, reverseProject }) => (
	<Box width={140} ml={1} textAlign="center">
		<FormControlLabel
			control={
				<Checkbox
					color="primary"
					icon={<FeatherIcon icon="arrow-down" />}
					checkedIcon={<FeatherIcon icon="arrow-up" />}
					defaultChecked={staReverse}
					onChange={reverseProject}
				/>
			}
			label="Reverse"
		/>
	</Box>
);

export default ProjectControlReverse;

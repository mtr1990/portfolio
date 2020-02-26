import React from "react";
import { TextField } from "@material-ui/core";

const ProjectControlFilter = ({ staFilter, filterProject }) => {
	return (
		<TextField
			fullWidth
			variant="outlined"
			type="search"
			name="search"
			value={staFilter}
			onChange={filterProject}
			label="Search..."
		/>
	);
};

export default ProjectControlFilter;

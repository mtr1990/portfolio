import React from "react";
import { motion } from "framer-motion";
import { varfadeInUp } from "../../utils";
import { ProjectItem, ProjectControlFilter, ProjectControlReverse } from ".";
import { Box } from "@material-ui/core";

const ProjectItemList = ({
	staProject,
	staFilter,
	staReverse,
	filterProject,
	reverseProject,
	delProject,
	editProject
}) => {
	const filtered = staProject.filter(item => {
		return item.name.toLowerCase().indexOf(staFilter.toLowerCase()) !== -1;
	});

	const ProjectList = filtered.map((project, index) => (
		<motion.div key={project.id} variants={varfadeInUp}>
			<ProjectItem
				index={index}
				project={project}
				delProject={() => delProject(project.id)}
				editProject={() => editProject(project.id)}
			/>
		</motion.div>
	));

	return (
		<>
			<motion.div className="db-project-controls" variants={varfadeInUp}>
				<Box display="flex" alignItems="center" my={8}>
					{/********** Filter ***********/}

					<ProjectControlFilter
						staFilter={staFilter}
						filterProject={filterProject}
					/>

					{/********** Reverse ***********/}
					<ProjectControlReverse
						staReverse={staReverse}
						reverseProject={reverseProject}
					/>
				</Box>
			</motion.div>

			{/********** List ***********/}
			{ProjectList}
		</>
	);
};

export default ProjectItemList;

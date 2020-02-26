import React from "react";
import { Typography } from "@material-ui/core";
import { GlField, GlCheckbox, GlRadioButton, GlSwitch } from "./";
import { motion } from "framer-motion";
import { GlLayout } from "./";

const GlForms = () => (
	<motion.div initial="initial" animate="enter" exit="exit">
		<GlLayout>
			<Typography variant="h2" color="textSecondary" gutterBottom>
				Forms
			</Typography>
			{/********** Field ***********/}
			<GlField />

			{/********** Checkbox ***********/}
			<GlCheckbox />

			{/********** Radio Button ***********/}
			<GlRadioButton />

			{/********** Toggle Button ***********/}
			<GlSwitch />
		</GlLayout>
	</motion.div>
);

export default GlForms;

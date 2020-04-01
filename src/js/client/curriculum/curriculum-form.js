import React from "react";
import { motion } from "framer-motion";
import { Form } from "formik";
import { varfadeInUp } from "../../utils";
import { Box, Button, TextField, CircularProgress } from "@material-ui/core";

const CurriculumForm = ({
	values,
	isSubmitting,
	handleChange,
	touched,
	errors
}) => {
	return (
		<Form autoComplete="off" noValidate>
			{/********** Code ***********/}
			<motion.div variants={varfadeInUp}>
				<Box mb={2}>
					<TextField
						error={
							touched.confirmCode && errors.confirmCode
								? true
								: false
						}
						fullWidth
						variant="outlined"
						name="confirmCode"
						onChange={handleChange}
						label={`Enter ${values.setCode}`}
						helperText={
							touched.confirmCode ? errors.confirmCode : ""
						}
					/>
				</Box>
			</motion.div>

			{/********** Email ***********/}

			<motion.div variants={varfadeInUp}>
				<Box mb={2}>
					<TextField
						fullWidth
						variant="outlined"
						name="email"
						onChange={handleChange}
						label="Your Email"
						type="email"
						error={touched.email && errors.email ? true : false}
						helperText={touched.email ? errors.email : ""}
					/>
				</Box>
			</motion.div>

			{/********** Submit ***********/}
			<motion.div variants={varfadeInUp}>
				<Button
					fullWidth
					color="primary"
					type="submit"
					size="large"
					disabled={isSubmitting}
					startIcon={
						isSubmitting ? (
							<CircularProgress
								size={24}
								thickness={4}
								color="inherit"
							/>
						) : (
							""
						)
					}
				>
					{isSubmitting ? "Please wait..." : "Unlock"}
				</Button>
			</motion.div>
		</Form>
	);
};

export default CurriculumForm;

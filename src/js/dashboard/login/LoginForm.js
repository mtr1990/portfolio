import React from "react";
import { Form } from "formik";
import { motion } from "framer-motion";
import { varfadeInUp } from "../../utils";
import { Box, Button, TextField, CircularProgress } from "@material-ui/core";

const LoginForm = ({ isSubmitting, handleChange, touched, errors }) => {
	return (
		<Form autoComplete="off" noValidate>
			{/********** Password ***********/}
			<motion.div variants={varfadeInUp}>
				<Box mb={2}>
					<TextField
						fullWidth
						error={
							touched.adminPassword && errors.adminPassword
								? true
								: false
						}
						label="Enter Password"
						variant="outlined"
						type="password"
						name="adminPassword"
						onChange={handleChange}
						helperText={
							touched.adminPassword ? errors.adminPassword : ""
						}
					/>
				</Box>
			</motion.div>

			{/********** Submit ***********/}
			<motion.div variants={varfadeInUp}>
				<Button
					fullWidth
					color="primary"
					type="submit"
					variant="contained"
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
					{isSubmitting ? "Please wait..." : "Login"}
				</Button>
			</motion.div>
		</Form>
	);
};

export default LoginForm;

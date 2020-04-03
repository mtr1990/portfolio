import * as Yup from "yup";

/**
 * Get CV
 */
export const validationGetCV = Yup.object().shape({
	email: Yup.string()
		.email("Email must be a valid email address")
		.required("Email is required"),

	c_code: Yup.string()
		.oneOf([Yup.ref("s_code"), null], "The code must be Hello")
		.required("Enter CODE is required")
});

/**
 * Login
 */
export const validationLogin = Yup.object().shape({
	adminPassword: Yup.string()
		.oneOf([Yup.ref("setPassword"), null], "The password does not match")
		.required("Enter password is required")
});

/**
 * Add & Edit Project
 */
export const validationAddProject = Yup.object().shape({
	name: Yup.string().required("Name is required"),
	description: Yup.string().required("Description is required"),
	thumbnail: Yup.string().required("Thumbnail is required"),
	hero: Yup.string().required("Hero is required")
});

import * as Yup from "yup";

/**
 * CVFORM
 */
export const validationCVForm = Yup.object().shape({
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),
  c_code: Yup.string()
    .oneOf([Yup.ref("s_code"), null], "The code must be Hello")
    .required("Enter CODE is required"),
});

/**
 * LOGIN
 */
export const validationLogin = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

/**
 * PROJECT
 */
export const validationProjectForm = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  // thumbnail: Yup.string().required("Thumbnail is required"),
  // hero: Yup.string().required("Hero is required"),
  // category: Yup.string().required("Category is required").nullable(),
});

/**
 * CATEGORIES
 */
export const validationCategoryForm = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});

/**
 * USERS
 */
export const validationUserForm = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

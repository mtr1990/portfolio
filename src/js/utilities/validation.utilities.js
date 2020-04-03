import * as Yup from "yup";

export const validationCVForm = Yup.object().shape({
  email: Yup.string()
    .email("Email must be a valid email address")
    .required("Email is required"),

  c_code: Yup.string()
    .oneOf([Yup.ref("s_code"), null], "The code must be Hello")
    .required("Enter CODE is required")
});

import React, { useState } from "react";
import { Formik } from "formik";
import { validationLogin } from "../utilities";
import { history, path_DASHBOARD } from "../config";
import { LoginForm } from ".";

const LoginHandle = () => {
  const [s_password] = useState("maimai90");
  const [c_password] = useState("");

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      history.push(path_DASHBOARD.root);
      setSubmitting(false);
    }, 800);
  };

  return (
    <Formik
      initialValues={{
        s_password,
        c_password,
      }}
      validationSchema={validationLogin}
      onSubmit={handleSubmit}
      render={(props) => <LoginForm {...props} />}
    />
  );
};

export default LoginHandle;

import React, { useState } from "react";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import { API, urlCV } from "../../../config";
import { validationCVForm } from "../../utilities";
import { SnackStatus } from "../../@material-ui-custom";
import { CurriculumForm } from ".";

const CurriculumHandle = (props) => {
  const { enqueueSnackbar } = useSnackbar();

  const [email] = useState("");
  const [s_code] = useState("Hello");
  const [c_code] = useState("");

  // Get CV
  const getCV = async (email) => {
    const data = { email };
    await API.post(`emails/save`, data)
      .then((res) => {
        SnackStatus(enqueueSnackbar, {
          message: "Send request success!",
          variant: "success",
        });
      })
      .catch((err) => {
        SnackStatus(enqueueSnackbar, {
          message: "Cannot connect to the server!",
          variant: "error",
        });
      });
  };

  // Submit
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      props.closeModal();
      window.open(urlCV, "_blank", "noopener noreferrer");
      getCV(values.email);
      setSubmitting(false);
    }, 800); // Important setTimeOut < 1000  RESOLVE popup blocked
    // console.log(JSON.stringify(values, null, 2));
  };

  return (
    <Formik
      initialValues={{
        email,
        s_code,
        c_code,
      }}
      validationSchema={validationCVForm}
      onSubmit={handleSubmit}
      render={(props) => <CurriculumForm {...props} />}
    />
  );
};
export default CurriculumHandle;

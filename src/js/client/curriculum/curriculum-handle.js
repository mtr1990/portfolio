import React, { useState } from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { API, urlCV } from "../../../config";
import { validationGetCV } from "../../utilities";
import { MsgSuccess, MsgError } from "../../commons";
import { CurriculumForm } from ".";

const CurriculumHandle = props => {
  const [email] = useState("");
  const [s_code] = useState("Hello");
  const [c_code] = useState("");

  // Open Window
  const openWindow = () => {
    window.open(urlCV, "_blank", "noopener noreferrer");
  };

  // getCV
  const getCV = async email => {
    const data = { email };
    await API.post(`emails/save`, data)
      .then(res => {
        toast(<MsgSuccess txtMsg="Success!" />);
      })
      .catch(err => {
        toast(<MsgError txtMsg="Fail!" />);
      });
  };

  // Submit
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      props.closeModal();
      openWindow();
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
        c_code
      }}
      validationSchema={validationGetCV}
      onSubmit={handleSubmit}
      render={props => <CurriculumForm {...props} />}
    />
  );
};
export default CurriculumHandle;

import React from "react";

const style = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 9999999,
  margin: 0,
  color: "yellow",
  background: "rgba(0,0,0,0.88)",
  padding: "24px",
  fontSize: "13px",
  fontWeight: "500",
  width: "240px",
  overflow: "auto",
  // display: "none",
};

export const DisplayFormikState = (props) => (
  <pre style={style}>
    <code> {JSON.stringify(props.values, null, 2)}</code>
  </pre>
);

export const DebugForMik = (props) => {
  const { formik } = props;
  return (
    <pre style={style}>
      <code>{JSON.stringify(formik.values, null, 2)}</code>
      {"-----------------------------------------------------------"}
      <code>{JSON.stringify(formik.initialValues, null, 2)}</code>
    </pre>
  );
};

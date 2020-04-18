import React from "react";

const DisplayFormikState = (props) => (
  <div>
    <pre
      style={{
        margin: 0,
        color: "yellow",
        background: "#000000",
        padding: "16px",
        fontSize: "14px",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 9999999,
        maxWidth: "320px",
        overflow: "auto",
      }}
    >
      <code>values:</code> {JSON.stringify(props.values, null, 2)}
      {/* {JSON.stringify(props, null, 2)} */}
    </pre>
  </div>
);

export default DisplayFormikState;

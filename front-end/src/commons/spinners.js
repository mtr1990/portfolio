import React from "react";
import { CircularProgress } from "@material-ui/core";

function Spinners(props) {
  return (
    <CircularProgress
      {...props}
      size={32}
      thickness={3}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: "auto",
        zIndex: props.index === undefined ? -1 : 1,
      }}
    />
  );
}

export default Spinners;

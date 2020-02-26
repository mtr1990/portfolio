import React from "react";
import { CircularProgress } from "@material-ui/core";

const Spinners = () => (
	<CircularProgress
		size={32}
		thickness={3}
		style={{
			position: "absolute",
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			margin: "auto",
			zIndex: "-1"
		}}
	/>
);

export default Spinners;

import React from "react";

const DisplayFormikState = props => (
	<div>
		<pre
			style={{
				margin: "1em 0",
				background: "#000000",
				padding: ".5em",
				fontSize: "1em"
			}}
		>
			<code>values:</code> {JSON.stringify(props.values, null, 2)}
		</pre>
	</div>
);

export default DisplayFormikState;

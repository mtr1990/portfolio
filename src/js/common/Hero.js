import React from "react";
import { Box } from "@material-ui/core";
import { Spinners } from ".";

const Hero = ({ img }) => (
	<Box width="100%" height="100vh" position="fixed" top={0} left={0}>
		<Box
			width="100%"
			height="100vh"
			style={{
				backgroundImage: `
				url(${img.hero})`,
				backgroundSize: "cover",
				backgroundPosition: "center center"
			}}
		/>
		<Spinners />
	</Box>
);

export default Hero;

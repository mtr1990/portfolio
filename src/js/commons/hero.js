import React from "react";
import { Box } from "@material-ui/core";

const Hero = ({ item }) => {
  return (
    <Box width="100%" height="100vh" position="fixed" top={0} left={0}>
      <Box
        width="100%"
        height="100vh"
        style={{
          backgroundImage: `
						 url(${item.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />
    </Box>
  );
};

export default Hero;

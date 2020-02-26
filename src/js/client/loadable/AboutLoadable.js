import React from "react";
import loadable from '@loadable/component'

const About = loadable(() => import("../AboutPage"), {
	fallback: null
});

const AboutPage = () => <About />;
export default AboutPage;

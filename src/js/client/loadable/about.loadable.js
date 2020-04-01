import React from "react";
import loadable from '@loadable/component'

const About = loadable(() => import("../about.page"), {
	fallback: null
});

const AboutPage = () => <About />;
export default AboutPage;

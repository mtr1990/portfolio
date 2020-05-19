import React from "react";
import loadable from "@loadable/component";

const About = loadable(() => import("../_page-about"), {
  fallback: null,
});

const AboutPage = () => <About />;
export default AboutPage;

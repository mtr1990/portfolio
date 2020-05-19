import React from "react";
import loadable from "@loadable/component";

const Home = loadable(() => import("../_page_home"), {
  fallback: null,
});

const HomePage = () => <Home />;
export default HomePage;

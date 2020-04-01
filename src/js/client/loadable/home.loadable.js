import React from "react";
import loadable from '@loadable/component'

const Home = loadable(() => import("../home.page"), {
	fallback: null
});

const HomePage = () => <Home />;
export default HomePage;

import React from "react";
import loadable from '@loadable/component'

const Home = loadable(() => import("../HomePage"), {
	fallback: null
});

const HomePage = () => <Home />;
export default HomePage;

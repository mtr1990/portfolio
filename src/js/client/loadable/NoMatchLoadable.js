import React from "react";
import loadable from "@loadable/component";

const NoMatch = loadable(() => import("../NoMatchPage"), {
	fallback: null
});

const NoMatchPage = () => <NoMatch />;
export default NoMatchPage;

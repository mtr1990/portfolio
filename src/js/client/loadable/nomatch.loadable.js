import React from "react";
import loadable from "@loadable/component";

const NoMatch = loadable(() => import("../nomatch.page"), {
	fallback: null
});

const NoMatchPage = () => <NoMatch />;
export default NoMatchPage;

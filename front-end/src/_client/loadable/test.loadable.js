import React from "react";
import loadable from '@loadable/component'

const Test = loadable(() => import("../_page-test"), {
	fallback: null
});

const TestPage = () => <Test />;
export default TestPage;

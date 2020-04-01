import React from "react";
import loadable from '@loadable/component'

const Test = loadable(() => import("../test.page"), {
	fallback: null
});

const TestPage = () => <Test />;
export default TestPage;

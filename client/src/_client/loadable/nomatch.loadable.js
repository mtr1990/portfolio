import React from "react";
import loadable from "@loadable/component";

const NoMatch = loadable(() => import("../_page-nomatch"), {
  fallback: null,
});

const NoMatchPage = () => <NoMatch />;
export default NoMatchPage;

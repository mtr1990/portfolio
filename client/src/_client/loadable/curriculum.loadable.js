import React from "react";
import loadable from '@loadable/component'

const Curriculum = loadable(() => import("../_page-curriculum"), {
	fallback: null
});

const CurriculumPage = () => <Curriculum />;
export default CurriculumPage;

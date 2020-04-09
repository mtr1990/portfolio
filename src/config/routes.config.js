// Client
import {
  HomePage,
  AboutPage,
  ProjectDetailsPage,
  NoMatchPage,
  TestPage,
} from "../js/client";

// Guideline
import {
  GlColorPalettes,
  GlTypography,
  GlButtons,
  GlForms,
  GlSnackbars,
  GlShadows,
} from "../js/guideline";

import { path_ABOUT, path_PROJECT, path_GUIDELINE } from "./paths.config";

const routes = [
  // Client
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: path_ABOUT,
    component: AboutPage,
  },
  {
    path: path_PROJECT.id,
    component: ProjectDetailsPage,
  },
  {
    path: "/test",
    component: TestPage,
  },

  // Guideline
  {
    path: path_GUIDELINE.root,
    exact: true,
    component: GlColorPalettes,
  },
  {
    path: path_GUIDELINE.typography,
    component: GlTypography,
  },
  {
    path: path_GUIDELINE.buttons,
    component: GlButtons,
  },
  {
    path: path_GUIDELINE.forms,
    component: GlForms,
  },
  {
    path: path_GUIDELINE.toast,
    component: GlSnackbars,
  },
  {
    path: path_GUIDELINE.shadows,
    component: GlShadows,
  },

  // NoMatch
  {
    component: NoMatchPage,
  },
];

export default routes;

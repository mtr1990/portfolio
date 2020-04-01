// Client
import {
  HomePage,
  AboutPage,
  ProjectDetailsPage,
  NoMatchPage,
  TestPage
} from "../js/client";

// Guideline
import {
  GlColorPalettes,
  GlTypography,
  GlButtons,
  GlForms,
  GlToast,
  GlShadows
} from "../js/guideline";

const routes = [
  // Client
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/about",
    component: AboutPage
  },
  {
    path: "/test",
    component: TestPage
  },
  {
    path: "/projects/:id",
    component: ProjectDetailsPage
  },

  // Guideline
  {
    path: "/guideline",
    exact: true,
    component: GlColorPalettes
  },

  {
    path: "/guideline/typography",
    component: GlTypography
  },
  {
    path: "/guideline/buttons",
    component: GlButtons
  },
  {
    path: "/guideline/forms",
    component: GlForms
  },
  {
    path: "/guideline/toast",
    component: GlToast
  },
  {
    path: "/guideline/shadows",
    component: GlShadows
  },

  // NoMatch
  {
    component: NoMatchPage
  }
];

export default routes;

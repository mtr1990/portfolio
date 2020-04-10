// Import: Client
import {
  HomePage,
  AboutPage,
  ProjectDetailsPage,
  NoMatchPage,
  TestPage,
} from "../js/client";

// Import: Guideline
import {
  GlColorPalettes,
  GlTypography,
  GlButtons,
  GlForms,
  GlSnackbars,
  GlShadows,
} from "../js/guideline";

// Import: Dashboard
import {
  Dashboard,
  CreateProject,
  EditProject,
  LoginPage,
  EmailPage,
  CategoryPage,
  CreateCategory,
  EditCategory,
} from "../js/dashboard";

// Import: Path
import {
  path_ABOUT,
  path_PROJECT,
  path_GUIDELINE,
  path_DASHBOARD,
  path_EMAILS,
  path_CATEGORIES,
  path_LOGIN,
} from "./paths.config";

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

  // Dashboard
  {
    path: path_LOGIN.root, // Login
    component: LoginPage,
  },
  {
    path: path_DASHBOARD.root, // Projects
    exact: true,
    component: Dashboard,
  },
  {
    path: path_DASHBOARD.create,
    component: CreateProject,
  },
  {
    path: path_DASHBOARD.edit,
    component: EditProject,
  },
  {
    path: path_EMAILS.root, // Emails
    component: EmailPage,
  },
  {
    path: path_CATEGORIES.root, // Categories
    exact: true,
    component: CategoryPage,
  },
  {
    path: path_CATEGORIES.create,
    component: CreateCategory,
  },
  {
    path: path_CATEGORIES.edit,
    component: EditCategory,
  },

  // NoMatch
  {
    component: NoMatchPage,
  },
];

export default routes;

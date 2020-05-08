// PATHS
import { path_CLIENT, path_GUIDELINE, path_DASHBOARD } from "./paths";

// CLIENT
import { Page404 } from "../commons";

// CLIENT
import { HomePage, TestPage, AboutPage, ProjectDetailsPage } from "../_client";

// GUIDELINE
import {
  GlForms,
  GlButtons,
  GlShadows,
  GlSnackbars,
  GlTypography,
  GlColorPalettes,
} from "../_guideline";

// DASHBOARD
import {
  UserPage,
  LoginPage,
  EmailPage,
  UserCreate,
  ProjectEdit,
  CategoryPage,
  CategoryEdit,
  DashboardPage,
  ProjectCreate,
  CategoryCreate,
} from "../_dashboard";

const routes = [
  // Client
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: path_CLIENT.about,
    component: AboutPage,
  },
  {
    path: path_CLIENT.projects.byId,
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

  // DashboardPage
  {
    path: path_DASHBOARD.login, // Login
    component: LoginPage,
  },
  {
    path: path_DASHBOARD.root, // Projects
    exact: true,
    component: DashboardPage,
  },
  {
    path: path_DASHBOARD.projects.create,
    component: ProjectCreate,
  },
  {
    path: path_DASHBOARD.projects.edit,
    component: ProjectEdit,
  },
  {
    path: path_DASHBOARD.emails, // Emails
    component: EmailPage,
  },
  {
    path: path_DASHBOARD.categories.root, // Categories
    exact: true,
    component: CategoryPage,
  },
  {
    path: path_DASHBOARD.categories.create,
    component: CategoryCreate,
  },
  {
    path: path_DASHBOARD.categories.edit,
    component: CategoryEdit,
  },
  {
    path: path_DASHBOARD.users.root, // Users
    exact: true,
    component: UserPage,
  },
  {
    path: path_DASHBOARD.users.create,
    component: UserCreate,
  },

  // NoMatch
  {
    component: Page404,
  },
];

export default routes;

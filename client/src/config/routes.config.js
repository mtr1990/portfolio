// Import: Client
import {
  HomePage,
  AboutPage,
  ProjectDetailsPage,
  NoMatchPage,
  TestPage,
} from "../_client";

// Import: Guideline
import {
  GlColorPalettes,
  GlTypography,
  GlButtons,
  GlForms,
  GlSnackbars,
  GlShadows,
} from "../_guideline";

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
  UserPage,
  CreateUser,
} from "../_dashboard";

// Import: Path
import { path_CLIENT, path_GUIDELINE, path_DASHBOARD } from "./paths.config";

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

  // Dashboard
  {
    path: path_DASHBOARD.login, // Login
    component: LoginPage,
  },
  {
    path: path_DASHBOARD.root, // Projects
    exact: true,
    component: Dashboard,
  },
  {
    path: path_DASHBOARD.projects.create,
    component: CreateProject,
  },
  {
    path: path_DASHBOARD.projects.edit,
    component: EditProject,
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
    component: CreateCategory,
  },
  {
    path: path_DASHBOARD.categories.edit,
    component: EditCategory,
  },
  {
    path: path_DASHBOARD.users.root, // Users
    exact: true,
    component: UserPage,
  },
  {
    path: path_DASHBOARD.users.create,
    component: CreateUser,
  },

  // NoMatch
  {
    component: NoMatchPage,
  },
];

export default routes;

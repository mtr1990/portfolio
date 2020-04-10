/**
 * Client
 */
const root_ABOUT = "/about";
const root_PROJECT = "/projects";
const root_GUIDELINE = "/guideline";

export const path_ABOUT = root_ABOUT;

export const path_PROJECT = {
  root: `${root_PROJECT}/`,
  id: `${root_PROJECT}/:name`,
};

/**
 * Guideline
 */
export const path_GUIDELINE = {
  root: root_GUIDELINE,
  typography: `${root_GUIDELINE}/typography`,
  buttons: `${root_GUIDELINE}/buttons`,
  forms: `${root_GUIDELINE}/forms`,
  toast: `${root_GUIDELINE}/toast`,
  shadows: `${root_GUIDELINE}/shadows`,
};

/**
 * Dashboard
 */
const root_LOGIN = "/login";
const root_DASHBOARD = "/FMfcgxwGBwSfwRHVVzvtQQNZJSmdmBz";
const root_EMAILS = "/FMfcgxwGBwSfwRHVVzvtQQNZJSmdmBz/emails";
const root_CATEGORIES = "/FMfcgxwGBwSfwRHVVzvtQQNZJSmdmBz/categories";

export const path_LOGIN = {
  root: root_LOGIN,
};
export const path_DASHBOARD = {
  root: root_DASHBOARD,
  create: `${root_DASHBOARD}/create`,
  edit: `${root_DASHBOARD}/edit/:id`,
};
export const path_EMAILS = {
  root: root_EMAILS,
};
export const path_CATEGORIES = {
  root: root_CATEGORIES,
  create: `${root_CATEGORIES}/create`,
  edit: `${root_CATEGORIES}/edit/:id`,
};

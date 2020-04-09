const root_ABOUT = "/about";
const root_PROJECT = "/projects";
const root_GUIDELINE = "/guideline";

export const path_ABOUT = root_ABOUT;

export const path_PROJECT = {
  root: `${root_PROJECT}/`,
  id: `${root_PROJECT}/:name`,
};

export const path_GUIDELINE = {
  root: root_GUIDELINE,
  typography: `${root_GUIDELINE}/typography`,
  buttons: `${root_GUIDELINE}/buttons`,
  forms: `${root_GUIDELINE}/forms`,
  toast: `${root_GUIDELINE}/toast`,
  shadows: `${root_GUIDELINE}/shadows`,
};

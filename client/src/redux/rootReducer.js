import { combineReducers } from "redux";
import projectsReducer from "./projects-slice";
import categoriesReducer from "./categories-slice";
import usersReducer from "./users-slice";
import emailsReducer from "./emails-slice";
import lightModeReducer from "./controls-light-mode";
import { reducer as modal } from "redux-modal";

const rootReducer = combineReducers({
  projects: projectsReducer,
  categories: categoriesReducer,
  users: usersReducer,
  emails: emailsReducer,
  //
  lightMode: lightModeReducer,
  modal,
});

export default rootReducer;

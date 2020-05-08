import { combineReducers } from "redux";
import projectsReducer from "./projects/projects-reducer";
import categoriesReducer from "./categories/categories-reducer";
import usersReducer from "./users/users-reducer";
import emailsReducer from "./emails/emails-reducer";

const rootReducer = combineReducers({
  projects: projectsReducer,
  categories: categoriesReducer,
  users: usersReducer,
  emails: emailsReducer,
});

export default rootReducer;

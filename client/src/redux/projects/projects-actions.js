import { API, history, path_DASHBOARD } from "../../configs";
import { SnackStatus } from "../../theme/@material-ui-custom";
import {
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILURE,
  GET_PROJECT,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILURE,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  FILTER_PROJECT,
  TOOGLE_VIEW_PROJECT,
  TOOGLE_SORT_PROJECT,
} from "../actionTypes";

// GET PROJECTS
export const getProjectsRequest = () => {
  return {
    type: GET_PROJECTS_REQUEST,
  };
};
export const getProjectsSuccess = (data) => {
  return {
    type: GET_PROJECTS_SUCCESS,
    payload: data,
  };
};
export const getProjectsFailure = (error) => {
  return {
    type: GET_PROJECTS_FAILURE,
    payload: error,
  };
};

export const getProjects = () => {
  return async (dispatch) => {
    dispatch(getProjectsRequest());
    try {
      const response = await API.get(`projects`);
      dispatch(getProjectsSuccess(response.data));
    } catch (error) {
      dispatch(getProjectsFailure(error));
    }
  };
};

// GET PROJECT
export const getProjectSuccess = (id) => {
  return {
    type: GET_PROJECT,
    payload: id,
  };
};
export const getProject = (id, enqueueSnackbar) => {
  return async (dispatch) => {
    try {
      const response = await API.get(`projects/${id}`);
      dispatch(getProjectSuccess(response.data));
    } catch (error) {
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
};

// ADD PROJECT
export const addProjectRequest = () => {
  return {
    type: ADD_PROJECT_REQUEST,
  };
};
export const addProjectFailure = (error) => {
  return {
    type: ADD_PROJECT_FAILURE,
    payload: error,
  };
};
export const addProjectSuccess = (newProject) => {
  return {
    type: ADD_PROJECT_SUCCESS,
    payload: newProject,
  };
};
export const addProject = (newProject, enqueueSnackbar) => {
  return async (dispatch) => {
    dispatch(addProjectRequest());
    try {
      await API.post(`projects/save`, newProject);
      setTimeout(() => {
        history.push(path_DASHBOARD.root);
        SnackStatus(enqueueSnackbar, {
          message: "Add success!",
          variant: "success",
        });
      }, 1000);
      dispatch(addProjectSuccess(newProject));
    } catch (error) {
      dispatch(addProjectFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
};

// UPDATE PROJECT
export const updateProjectRequest = () => {
  return {
    type: UPDATE_PROJECT_REQUEST,
  };
};
export const updateProjectFailure = (error) => {
  return {
    type: UPDATE_PROJECT_FAILURE,
    payload: error,
  };
};
export const updateProjectSuccess = (project) => {
  return {
    type: UPDATE_PROJECT_SUCCESS,
    payload: project,
  };
};
export const updateProject = (project, enqueueSnackbar) => {
  return async (dispatch) => {
    dispatch(updateProjectRequest());
    try {
      await API.put(`projects/update/${project.id}`, project);
      setTimeout(() => {
        history.push(path_DASHBOARD.root);
        SnackStatus(enqueueSnackbar, {
          message: "Update success!",
          variant: "success",
        });
      }, 1000);
      dispatch(updateProjectSuccess(project));
    } catch (error) {
      dispatch(updateProjectFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
};

// DELETE PROJECT
export const deleteProjectRequest = () => {
  return {
    type: DELETE_PROJECT_REQUEST,
  };
};
export const deleteProjectFailure = (error) => {
  return {
    type: DELETE_PROJECT_FAILURE,
    payload: error,
  };
};
export const deleteProjectSuccess = (id) => {
  return {
    type: DELETE_PROJECT_SUCCESS,
    payload: id,
  };
};
export const deleteProject = (id, enqueueSnackbar) => {
  return async (dispatch) => {
    dispatch(deleteProjectRequest());
    try {
      await API.delete(`projects/${id}`);
      history.push(path_DASHBOARD.root);
      dispatch(deleteProjectSuccess(id));
      SnackStatus(enqueueSnackbar, {
        message: "Deleted success!",
        variant: "success",
      });
    } catch (error) {
      dispatch(deleteProjectFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
};

// FILTER PROJECT
export const filterProject = (filter) => {
  return {
    type: FILTER_PROJECT,
    payload: filter,
  };
};

// TOOGLE VIEW PROJECT
export const toogleViewProject = () => {
  return {
    type: TOOGLE_VIEW_PROJECT,
  };
};

// TOOGLE SORT PROJECT
export const toogleSortProject = () => {
  return {
    type: TOOGLE_SORT_PROJECT,
  };
};

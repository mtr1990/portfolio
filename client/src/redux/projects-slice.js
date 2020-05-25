import { createSlice } from "@reduxjs/toolkit";
import { API, history, path_DASHBOARD } from "../configs";
import { SnackStatus } from "../theme/@material-ui-custom";

const initialState = {
  loading: false,
  error: null,
  projects: [],
  project: {},
  filters: {
    filterName: "",
    filterCategory: "",
    filterCheckList: [],
  },
  toogleView: JSON.parse(localStorage.getItem("toogleView")) || false,
  toogleSort: JSON.parse(localStorage.getItem("toogleSort")) || false,
};

const slice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    // GET PROJECTS
    getProjectsRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getProjectsSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        projects: action.payload,
      };
    },
    getProjectsFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // GET PROJECT
    getProjectSuccess: (state, action) => {
      return {
        ...state,
        project: action.payload,
      };
    },

    // ADD PROJECT
    addProjectRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    addProjectSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        projects: [...state.projects, action.payload],
      };
    },
    addProjectFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // UPDATE PROJECT
    updateProjectRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    updateProjectSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        projects: [...state.projects, action.payload],
      };
    },
    updateProjectFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // DELETE PROJECT
    deleteProjectRequest: (state) => {
      return {
        ...state,
      };
    },
    deleteProjectSuccess: (state, action) => {
      return {
        ...state,
        projects: state.projects.filter((item) => item._id !== action.payload),
      };
    },
    deleteProjectFailure: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },

    // FILTER PROJECT
    filterProject: (state, action) => {
      return {
        ...state,
        filters: {
          filterName: action.payload.filterName,
          filterCategory: action.payload.filterCategory,
          filterCheckList: action.payload.filterCheckList,
        },
      };
    },

    // TOOGLE VIEW PROJECT
    toogleViewProject: (state) => {
      localStorage.setItem("toogleView", JSON.stringify(!state.toogleView));
      return {
        ...state,
        toogleView: !state.toogleView,
      };
    },

    // TOOGLE SORT PROJECT
    toogleSortProject: (state) => {
      localStorage.setItem("toogleSort", JSON.stringify(!state.toogleSort));
      return {
        ...state,
        toogleSort: !state.toogleSort,
      };
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { filterProject } = slice.actions;
export const { toogleViewProject } = slice.actions;
export const { toogleSortProject } = slice.actions;

// Async task
export function getProjects() {
  return async (dispatch) => {
    dispatch(slice.actions.getProjectsRequest());
    try {
      const response = await API.get(`projects`);
      dispatch(slice.actions.getProjectsSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.getProjectsFailure(error));
    }
  };
}

export function getProject(id, enqueueSnackbar) {
  return async (dispatch) => {
    try {
      const response = await API.get(`projects/${id}`);
      dispatch(slice.actions.getProjectSuccess(response.data));
    } catch (error) {
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
}

export function addProject(newProject, enqueueSnackbar) {
  return async (dispatch) => {
    dispatch(slice.actions.addProjectRequest());
    try {
      await API.post(`projects/save`, newProject);

      history.push(path_DASHBOARD.root);
      SnackStatus(enqueueSnackbar, {
        message: "Add success!",
        variant: "success",
      });

      dispatch(slice.actions.addProjectSuccess(newProject));
    } catch (error) {
      dispatch(slice.actions.addProjectFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
}

export function updateProject(upProject, enqueueSnackbar) {
  return async (dispatch) => {
    dispatch(slice.actions.updateProjectRequest());
    try {
      await API.put(`projects/update/${upProject.id}`, upProject);

      setTimeout(() => {
        history.push(path_DASHBOARD.root);
        SnackStatus(enqueueSnackbar, {
          message: "Update success!",
          variant: "success",
        });
      }, 1000);

      dispatch(slice.actions.updateProjectSuccess(upProject));
    } catch (error) {
      dispatch(slice.actions.updateProjectFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
}

export function deleteProject(id, enqueueSnackbar) {
  return async (dispatch) => {
    dispatch(slice.actions.deleteProjectRequest());
    try {
      await API.delete(`projects/${id}`);
      SnackStatus(enqueueSnackbar, {
        message: "Deleted success!",
        variant: "success",
      });

      dispatch(slice.actions.deleteProjectSuccess(id));
    } catch (error) {
      dispatch(slice.actions.deleteProjectFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
}

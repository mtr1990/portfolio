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

const initialState = {
  loading: false,
  error: null,
  projects: [],
  project: {},
  filters: {
    byName: "",
    byCategory: "",
    checkList: [],
  },
  toogleView: JSON.parse(localStorage.getItem("toogleView")) || false,
  toogleSort: JSON.parse(localStorage.getItem("toogleSort")) || false,
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET PROJECTS
    case GET_PROJECTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: action.payload,
        error: null,
      };
    case GET_PROJECTS_FAILURE:
      return {
        ...state,
        loading: false,
        projects: [],
        error: action.payload,
      };

    // GET PROJECT
    case GET_PROJECT:
      return {
        ...state,
        project: action.payload,
      };

    // ADD PROJECT
    case ADD_PROJECT_REQUEST:
      return {
        ...state,
      };
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case ADD_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    // UPDATE PROJECT
    case UPDATE_PROJECT_REQUEST:
      return {
        ...state,
      };
    case UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case UPDATE_PROJECT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    // DELETE PROJECT
    case DELETE_PROJECT_REQUEST:
      return {
        ...state,
      };
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        projects: state.projects.filter((item) => item._id !== action.payload),
      };
    case DELETE_PROJECT_FAILURE:
      return {
        ...state,
      };

    // FILTER PROJECT
    case FILTER_PROJECT:
      return {
        ...state,
        filters: {
          byName: action.payload.byName,
          byCategory: action.payload.byCategory,
          checkList: action.payload.checkList,
        },
      };

    // TOOGLE VIEW PROJECT
    case TOOGLE_VIEW_PROJECT:
      localStorage.setItem("toogleView", JSON.stringify(!state.toogleView));
      return {
        ...state,
        toogleView: !state.toogleView,
      };

    // TOOGLE SORT PROJECT
    case TOOGLE_SORT_PROJECT:
      localStorage.setItem("toogleSort", JSON.stringify(!state.toogleSort));
      return {
        ...state,
        toogleSort: !state.toogleSort,
      };

    default:
      return state;
  }
};

export default projectsReducer;

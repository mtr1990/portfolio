import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET USERS
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        users: [],
      };
    case GET_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: action.payload,
      };
    case GET_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    // ADD USER
    case ADD_USER_REQUEST:
      return {
        ...state,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case ADD_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    // LOGIN USER
    case LOGIN_USER_REQUEST:
      return {
        ...state,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    // DELETE USER
    case DELETE_USER_REQUEST:
      return {
        ...state,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((item) => item._id !== action.payload),
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default usersReducer;

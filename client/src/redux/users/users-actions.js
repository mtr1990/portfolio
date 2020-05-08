import { API, history, path_DASHBOARD } from "../../configs";
import { SnackStatus } from "../../theme/@material-ui-custom";
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

// GET USERS
export const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST,
  };
};
export const getUsersFailure = (error) => {
  return {
    type: GET_USERS_FAILURE,
    payload: error,
  };
};
export const getUsersSuccess = (data) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: data,
  };
};
export const getUsers = () => {
  return async (dispatch) => {
    dispatch(getUsersRequest());
    try {
      const response = await API.get(`users`);
      dispatch(getUsersSuccess(response.data));
    } catch (error) {
      dispatch(getUsersFailure(error));
    }
  };
};

// ADD USER
export const addUserRequest = () => {
  return {
    type: ADD_USER_REQUEST,
  };
};
export const addUserFailure = (error) => {
  return {
    type: ADD_USER_FAILURE,
    payload: error,
  };
};
export const addUserSuccess = (newUser) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: newUser,
  };
};
export const addUser = (newUser, enqueueSnackbar) => {
  return async (dispatch) => {
    dispatch(addUserRequest());
    try {
      const response = await API.post(`users/register`, newUser);
      if (response.data.errors)
        return dispatch(addUserFailure(response.data.errors));
      else {
        setTimeout(() => {
          history.push(path_DASHBOARD.users.root);
          SnackStatus(enqueueSnackbar, {
            message: "Add success!",
            variant: "success",
          });
        }, 1000);
        dispatch(addUserSuccess(newUser));
      }
    } catch (error) {
      dispatch(addUserFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
};

// LOGIN USER
export const LoginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST,
  };
};
export const LoginUserFailure = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error,
  };
};
export const LoginUserSuccess = (newLogin) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: newLogin,
  };
};
export const LoginUser = (newLogin, enqueueSnackbar) => {
  return async (dispatch) => {
    dispatch(LoginUserRequest());
    try {
      const response = await API.post(`users/login`, newLogin);
      if (response.data.error)
        return dispatch(LoginUserFailure(response.data.message));
      else {
        setTimeout(() => {
          history.push(path_DASHBOARD.root);
          history.go(0);
          SnackStatus(enqueueSnackbar, {
            message: "Login success!",
            variant: "success",
          });
        }, 1000);
        dispatch(LoginUserSuccess(newLogin));
      }
    } catch (error) {
      dispatch(LoginUserFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
};

// DELETE USER
export const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};
export const deleteUserFailure = (error) => {
  return {
    type: DELETE_USER_FAILURE,
    payload: error,
  };
};
export const deleteUserSuccess = (id) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: id,
  };
};
export const deleteUser = (id, enqueueSnackbar) => {
  return async (dispatch) => {
    dispatch(deleteUserRequest());
    try {
      await API.delete(`users/${id}`);
      dispatch(deleteUserSuccess(id));
      SnackStatus(enqueueSnackbar, {
        message: "Deleted success!",
        variant: "success",
      });
    } catch (error) {
      dispatch(deleteUserFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
};

import { createSlice } from "@reduxjs/toolkit";
import { API, history, path_DASHBOARD } from "../configs";
import { SnackStatus } from "../theme/@material-ui-custom";

const initialState = {
  loading: false,
  error: null,
  users: [],
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // GET USERS
    getUsersRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getUsersSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        users: action.payload,
      };
    },
    getUsersFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // ADD USER
    addUserRequest: (state) => {
      return {
        ...state,
      };
    },
    addUserSuccess: (state, action) => {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    },
    addUserFailure: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },

    // LOGIN USER
    LoginUserRequest: (state) => {
      return {
        ...state,
      };
    },
    LoginUserSuccess: (state, action) => {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    },
    LoginUserFailure: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },

    // DELETE USER
    deleteUserRequest: (state) => {
      return {
        ...state,
      };
    },
    deleteUserSuccess: (state, action) => {
      return {
        ...state,
        users: state.users.filter((item) => item._id !== action.payload),
      };
    },
    deleteUserFailure: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
  },
});

// Reducer
export default slice.reducer;

// Async task
export function getUsers() {
  return async (dispatch) => {
    dispatch(slice.actions.getUsersRequest());
    try {
      const response = await API.get(`users`);
      dispatch(slice.actions.getUsersSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.getUsersFailure(error));
    }
  };
}

export function addUser(newUser, enqueueSnackbar) {
  return async (dispatch) => {
    dispatch(slice.actions.addUserRequest());
    try {
      const response = await API.post(`users/register`, newUser);
      if (response.data.errors)
        return dispatch(
          slice.actions.addUserFailure(response.data.errors.email.msg)
        );
      else {
        setTimeout(() => {
          history.push(path_DASHBOARD.users.root);
          SnackStatus(enqueueSnackbar, {
            message: "Add success!",
            variant: "success",
          });
        }, 1000);
        dispatch(slice.actions.addUserSuccess(newUser));
      }
    } catch (error) {
      dispatch(slice.actions.addUserFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
}

export function LoginUser(newLogin, enqueueSnackbar) {
  return async (dispatch) => {
    dispatch(slice.actions.LoginUserRequest());
    try {
      const response = await API.post(`users/login`, newLogin);
      if (response.data.error)
        return dispatch(slice.actions.LoginUserFailure(response.data.message));
      else {
        setTimeout(() => {
          history.push(path_DASHBOARD.root);
          history.go(0);
          SnackStatus(enqueueSnackbar, {
            message: "Login success!",
            variant: "success",
          });
        }, 1000);
        dispatch(slice.actions.LoginUserSuccess(newLogin));
      }
    } catch (error) {
      dispatch(slice.actions.LoginUserFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
}

export function deleteUser(id, enqueueSnackbar) {
  return async (dispatch) => {
    dispatch(slice.actions.deleteUserRequest());
    try {
      await API.delete(`users/${id}`);
      dispatch(slice.actions.deleteUserSuccess(id));
      SnackStatus(enqueueSnackbar, {
        message: "Deleted success!",
        variant: "success",
      });
    } catch (error) {
      dispatch(slice.actions.deleteUserFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
}

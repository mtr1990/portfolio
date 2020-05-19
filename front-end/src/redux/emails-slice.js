import { createSlice } from "@reduxjs/toolkit";
import { API } from "../configs";
import { SnackStatus } from "../theme/@material-ui-custom";

const initialState = {
  loading: false,
  error: "",
  emails: [],
};

const slice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    // GET EMAILS
    getEmailsRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getEmailsSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        emails: action.payload,
      };
    },
    getEmailsFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // ADD EMAIL
    addEmailRequest: (state) => {
      return {
        ...state,
      };
    },
    addEmailSuccess: (state, action) => {
      return {
        ...state,
        emails: [...state.emails, action.payload],
      };
    },
    addEmailFailure: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },

    // DELETE EMAIL
    deleteEmailRequest: (state) => {
      return {
        ...state,
      };
    },
    deleteEmailSuccess: (state, action) => {
      return {
        ...state,
        emails: state.emails.filter((item) => item._id !== action.payload),
      };
    },
    deleteEmailFailure: (state, action) => {
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
export function getEmails() {
  return async (dispatch) => {
    dispatch(slice.actions.getEmailsRequest());
    try {
      const response = await API.get("emails");
      dispatch(slice.actions.getEmailsSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.getEmailsFailure(error));
    }
  };
}

// ADD EMAIL
export function addEmail(newEmail, enqueueSnackbar) {
  return async (dispatch) => {
    dispatch(slice.actions.addEmailRequest());
    try {
      await API.post(`emails/save`, newEmail);
      dispatch(slice.actions.addEmailSuccess(newEmail));
      SnackStatus(enqueueSnackbar, {
        message: "Request success!",
        variant: "success",
      });
    } catch (error) {
      dispatch(slice.actions.addEmailFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
}

export function deleteEmail(id, enqueueSnackbar) {
  return async (dispatch) => {
    dispatch(slice.actions.deleteEmailRequest());
    try {
      await API.delete(`emails/${id}`);
      dispatch(slice.actions.deleteEmailSuccess(id));
      SnackStatus(enqueueSnackbar, {
        message: "Delete success!",
        variant: "success",
      });
    } catch (error) {
      dispatch(slice.actions.deleteEmailFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
}

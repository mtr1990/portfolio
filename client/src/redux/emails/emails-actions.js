import { API } from "../../configs";
import { SnackStatus } from "../../theme/@material-ui-custom";
import {
  GET_EMAILS_REQUEST,
  GET_EMAILS_SUCCESS,
  GET_EMAILS_FAILURE,
  ADD_EMAIL_REQUEST,
  ADD_EMAIL_SUCCESS,
  ADD_EMAIL_FAILURE,
  DELETE_EMAIL_REQUEST,
  DELETE_EMAIL_SUCCESS,
  DELETE_EMAIL_FAILURE,
} from "../actionTypes";

// GET EMAILS
export const getEmailsRequest = () => {
  return {
    type: GET_EMAILS_REQUEST,
  };
};
export const getEmailsFailure = (error) => {
  return {
    type: GET_EMAILS_FAILURE,
    payload: error,
  };
};
export const getEmailsSuccess = (data) => {
  return {
    type: GET_EMAILS_SUCCESS,
    payload: data,
  };
};
export const getEmails = () => {
  return async (dispatch) => {
    dispatch(getEmailsRequest());
    try {
      const response = await API.get("emails");
      dispatch(getEmailsSuccess(response.data));
    } catch (error) {
      dispatch(getEmailsFailure(error));
    }
  };
};

// ADD EMAIL
export const addEmailRequest = () => {
  return {
    type: ADD_EMAIL_REQUEST,
  };
};
export const addEmailFailure = (error) => {
  return {
    type: ADD_EMAIL_FAILURE,
    payload: error,
  };
};
export const addEmailSuccess = (newEmail) => {
  return {
    type: ADD_EMAIL_SUCCESS,
    payload: newEmail,
  };
};
export const addEmail = (newEmail, enqueueSnackbar) => {
  return async (dispatch) => {
    dispatch(addEmailRequest());
    try {
      await API.post(`emails/save`, newEmail);
      dispatch(addEmailSuccess(newEmail));
      SnackStatus(enqueueSnackbar, {
        message: "Request success!",
        variant: "success",
      });
    } catch (error) {
      dispatch(addEmailFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
};

// DELETE EMAIL
export const deleteEmailRequest = () => {
  return {
    type: DELETE_EMAIL_REQUEST,
  };
};
export const deleteEmailFailure = (error) => {
  return {
    type: DELETE_EMAIL_FAILURE,
    payload: error,
  };
};
export const deleteEmailSuccess = (id) => {
  return {
    type: DELETE_EMAIL_SUCCESS,
    payload: id,
  };
};
export const deleteEmail = (id, enqueueSnackbar) => {
  return async (dispatch) => {
    dispatch(deleteEmailRequest());
    try {
      await API.delete(`emails/${id}`);
      dispatch(deleteEmailSuccess(id));
      SnackStatus(enqueueSnackbar, {
        message: "Delete success!",
        variant: "success",
      });
    } catch (error) {
      dispatch(deleteEmailFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
};

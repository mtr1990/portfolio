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

const initialState = {
  loading: false,
  error: "",
  emails: [],
};

const emailsReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET EMAILS
    case GET_EMAILS_REQUEST:
      return {
        ...state,
        loading: true,
        emails: [],
      };
    case GET_EMAILS_SUCCESS:
      return {
        loading: false,
        emails: action.payload,
        error: action.payload,
      };
    case GET_EMAILS_FAILURE:
      return {
        loading: false,
        emails: [],
        error: action.payload,
      };

    // ADD EMAIL
    case ADD_EMAIL_REQUEST:
      return {
        ...state,
      };
    case ADD_EMAIL_SUCCESS:
      return {
        ...state,
        emails: [...state.emails, action.payload],
      };
    case ADD_EMAIL_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    // DELETE EMAIL
    case DELETE_EMAIL_REQUEST:
      return {
        ...state,
      };
    case DELETE_EMAIL_SUCCESS:
      return {
        ...state,
        emails: state.emails.filter((item) => item._id !== action.payload),
      };
    case DELETE_EMAIL_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default emailsReducer;

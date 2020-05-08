import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORY,
  //
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  //
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILURE,
  //
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
  categories: [],
  category: {},
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET CATEGORIES
    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        loading: false,
        categories: action.payload,
        error: action.payload,
      };
    case GET_CATEGORIES_FAILURE:
      return {
        loading: false,
        categories: [],
        error: action.payload,
      };

    // GET CATEGORY
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    // ADD CATEGORY
    case ADD_CATEGORY_REQUEST:
      return {
        ...state,
      };
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case ADD_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    // UPDATE CATEGORY
    case UPDATE_CATEGORY_REQUEST:
      return {
        ...state,
      };
    case UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case UPDATE_CATEGORY_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    // DELETE CATEGORY
    case DELETE_CATEGORY_REQUEST:
      return {
        ...state,
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state.categories.filter(
          (item) => item._id !== action.payload
        ),
      };
    case DELETE_CATEGORY_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default categoriesReducer;

import { API, history, path_DASHBOARD } from "../../configs";
import { SnackStatus } from "../../theme/@material-ui-custom";
import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORY,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILURE,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,
} from "../actionTypes";

// GET CATEGORIES
export const getCategoriesRequest = () => {
  return {
    type: GET_CATEGORIES_REQUEST,
  };
};
export const getCategoriesFailure = (error) => {
  return {
    type: GET_CATEGORIES_FAILURE,
    payload: error,
  };
};
export const getCategoriesSuccess = (data) => {
  return {
    type: GET_CATEGORIES_SUCCESS,
    payload: data,
  };
};
export const getCategories = () => {
  return async (dispatch) => {
    dispatch(getCategoriesRequest());
    try {
      const response = await API.get(`categories`);
      dispatch(getCategoriesSuccess(response.data));
    } catch (error) {
      dispatch(getCategoriesFailure(error));
    }
  };
};

// GET CATEGORY
export const getCategorySuccess = (id) => {
  return {
    type: GET_CATEGORY,
    payload: id,
  };
};
export const getCategory = (id, enqueueSnackbar) => {
  return async (dispatch) => {
    try {
      const response = await API.get(`categories/${id}`);
      dispatch(getCategorySuccess(response.data));
    } catch (error) {
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
};

// ADD CATEGORY
export const addCategoryRequest = () => {
  return {
    type: ADD_CATEGORY_REQUEST,
  };
};
export const addCategoryFailure = (error) => {
  return {
    type: ADD_CATEGORY_FAILURE,
    payload: error,
  };
};
export const addCategorySuccess = (newCategory) => {
  return {
    type: ADD_CATEGORY_SUCCESS,
    payload: newCategory,
  };
};

export const addCategory = (newCategory, enqueueSnackbar) => {
  return async (dispatch) => {
    dispatch(addCategoryRequest());
    try {
      await API.post(`categories/save`, newCategory);
      setTimeout(() => {
        history.push(path_DASHBOARD.categories.root);
        SnackStatus(enqueueSnackbar, {
          message: "Add success!",
          variant: "success",
        });
      }, 1000);
      dispatch(addCategorySuccess(newCategory));
    } catch (error) {
      dispatch(addCategoryFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
};

// UPDATE CATEGORY
export const updateCategoryRequest = () => {
  return {
    type: UPDATE_CATEGORY_REQUEST,
  };
};
export const updateCategoryFailure = (error) => {
  return {
    type: UPDATE_CATEGORY_FAILURE,
    payload: error,
  };
};
export const updateCategorySuccess = (category) => {
  return {
    type: UPDATE_CATEGORY_SUCCESS,
    payload: category,
  };
};

export const updateCategory = (category, enqueueSnackbar) => {
  return async (dispatch) => {
    dispatch(updateCategoryRequest());
    try {
      await API.put(`categories/update/${category.id}`, category);
      setTimeout(() => {
        history.push(path_DASHBOARD.categories.root);
        SnackStatus(enqueueSnackbar, {
          message: "Update success!",
          variant: "success",
        });
      }, 1000);
      dispatch(updateCategorySuccess(category));
    } catch (error) {
      dispatch(updateCategoryFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
};

// DELETE CATEGORY
export const deleteCategoryRequest = () => {
  return {
    type: DELETE_CATEGORY_REQUEST,
  };
};
export const deleteCategoryFailure = (error) => {
  return {
    type: DELETE_CATEGORY_FAILURE,
    payload: error,
  };
};
export const deleteCategorySuccess = (id) => {
  return {
    type: DELETE_CATEGORY_SUCCESS,
    payload: id,
  };
};
export const deleteCategory = (id, enqueueSnackbar) => {
  return async (dispatch) => {
    dispatch(deleteCategoryRequest());
    try {
      await API.delete(`categories/${id}`);
      dispatch(deleteCategorySuccess(id));
      SnackStatus(enqueueSnackbar, {
        message: "Deleted success!",
        variant: "success",
      });
    } catch (error) {
      dispatch(deleteCategoryFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
};

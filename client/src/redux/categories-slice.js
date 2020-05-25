import { createSlice } from "@reduxjs/toolkit";
import { API, history, path_DASHBOARD } from "../configs";
import { SnackStatus } from "../theme/@material-ui-custom";

const initialState = {
  loading: false,
  error: "",
  categories: [],
  category: {},
};

const slice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // GET CATEGORIES
    getCategoriesRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    getCategoriesSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    },
    getCategoriesFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // GET CATEGORY
    getCategorySuccess: (state, action) => {
      return {
        ...state,
        category: action.payload,
      };
    },

    // ADD CATEGORY
    addCategoryRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    addCategorySuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        categories: [...state.categories, action.payload],
      };
    },
    addCategoryFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // UPDATE CATEGORY
    updateCategoryRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    updateCategorySuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        categories: [...state.categories, action.payload],
      };
    },
    updateCategoryFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },

    // DELETE CATEGORY
    deleteCategoryRequest: (state) => {
      return {
        ...state,
      };
    },
    deleteCategorySuccess: (state, action) => {
      return {
        ...state,
        categories: state.categories.filter(
          (item) => item._id !== action.payload
        ),
      };
    },
    deleteCategoryFailure: (state, action) => {
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
export function getCategories() {
  return async (dispatch) => {
    dispatch(slice.actions.getCategoriesRequest());
    try {
      const response = await API.get(`categories`);
      dispatch(slice.actions.getCategoriesSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.getCategoriesFailure(error));
    }
  };
}

export function getCategory(id, enqueueSnackbar) {
  return async (dispatch) => {
    try {
      const response = await API.get(`categories/${id}`);
      dispatch(slice.actions.getCategorySuccess(response.data));
    } catch (error) {
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
}

export function addCategory(newCategory, enqueueSnackbar) {
  return async (dispatch) => {
    dispatch(slice.actions.addCategoryRequest());
    try {
      await API.post(`categories/save`, newCategory);

      history.push(path_DASHBOARD.categories.root);
      SnackStatus(enqueueSnackbar, {
        message: "Add success!",
        variant: "success",
      });

      dispatch(slice.actions.addCategorySuccess(newCategory));
    } catch (error) {
      dispatch(slice.actions.addCategoryFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
}

export function updateCategory(upCategory, enqueueSnackbar) {
  return async (dispatch) => {
    dispatch(slice.actions.updateCategoryRequest());
    try {
      await API.put(`categories/update/${upCategory.id}`, upCategory);

      history.push(path_DASHBOARD.categories.root);
      SnackStatus(enqueueSnackbar, {
        message: "Update success!",
        variant: "success",
      });

      dispatch(slice.actions.updateCategorySuccess(upCategory));
    } catch (error) {
      dispatch(slice.actions.updateCategoryFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
}

export function deleteCategory(id, enqueueSnackbar) {
  return async (dispatch) => {
    dispatch(slice.actions.deleteCategoryRequest());
    try {
      await API.delete(`categories/${id}`);
      SnackStatus(enqueueSnackbar, {
        message: "Deleted success!",
        variant: "success",
      });

      dispatch(slice.actions.deleteCategorySuccess(id));
    } catch (error) {
      dispatch(slice.actions.deleteCategoryFailure(error));
      SnackStatus(enqueueSnackbar, {
        message: error.message,
        variant: "error",
      });
    }
  };
}

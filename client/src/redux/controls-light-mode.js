import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lightMode: JSON.parse(localStorage.getItem("lightMode")) || false,
};

const slice = createSlice({
  name: "lightMode",
  initialState,
  reducers: {
    toogleLightMode: (state) => {
      localStorage.setItem("lightMode", JSON.stringify(!state.lightMode));
      return {
        ...state,
        lightMode: !state.lightMode,
      };
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { toogleLightMode } = slice.actions;

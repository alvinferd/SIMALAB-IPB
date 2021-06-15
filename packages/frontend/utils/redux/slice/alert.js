import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    error: false,
    success: false,
    message: "",
  },
  reducers: {
    alertSetError: (state, action) => ({
      ...state,
      error: action.payload ?? false,
    }),
    alertSetSuccess: (state, action) => ({
      ...state,
      success: action.payload ?? false,
    }),
    alertSetMessage: (state, action) => ({
      ...state,
      message: action.payload ?? "",
    }),
  },
});

export const { alertSetError, alertSetSuccess, alertSetMessage } =
  alertSlice.actions;
export default alertSlice.reducer;

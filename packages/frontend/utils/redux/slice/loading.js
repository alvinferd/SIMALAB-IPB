import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    loadingSet: (_state, action) => {
      return action.payload;
    },
  },
});

export const { loadingSet } = loadingSlice.actions;
export default loadingSlice.reducer;

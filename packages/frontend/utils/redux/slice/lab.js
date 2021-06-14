import baseApi from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadingSet } from "./loading";

const labSlice = createSlice({
  name: "lab",
  initialState: {
    data: [],
  },
  reducers: {
    labSet: (state, action) => ({
      ...state,
      data: action.payload ?? [],
    }),
  },
});

export const { labSet } = labSlice.actions;

export const labGet = createAsyncThunk("lab/fetch", async (_, { dispatch }) => {
  dispatch(loadingSet(true));
  return baseApi
    .get("/lab")
    .then((data) => {
      console.log("lab", data);
      dispatch(labSet(data));
    })
    .catch((err) => {
      console.log(err.message);
    })
    .finally(() => dispatch(loadingSet(false)));
});

export default labSlice.reducer;

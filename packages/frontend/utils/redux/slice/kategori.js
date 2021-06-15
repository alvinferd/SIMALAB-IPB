import baseApi from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadingSet } from "@/utils/redux/slice/loading";

const kategoriSlice = createSlice({
  name: "kategori",
  initialState: {
    data: [],
  },
  reducers: {
    kategoritSet: (state, action) => ({
      ...state,
      data: action.payload ?? [],
    }),
  },
});

export const { kategoritSet } = kategoriSlice.actions;

export const kategoriGet = createAsyncThunk(
  "kategori/fetch",
  async (_, { dispatch }) => {
    dispatch(loadingSet(true));
    return baseApi
      .get("/kategoriAlat")
      .then((data) => {
        console.log(data);
        dispatch(kategoritSet(data));
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => dispatch(loadingSet(false)));
  }
);

export default kategoriSlice.reducer;

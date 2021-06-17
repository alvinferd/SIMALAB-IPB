import baseApi from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadingSet } from "@/utils/redux/slice/loading";
import {
  alertSetError,
  alertSetSuccess,
  alertSetMessage,
} from "@/utils/redux/slice/alert";

const peminjamanSlice = createSlice({
  name: "peminjaman",
  initialState: {
    data: [],
  },
  reducers: {
    peminjamanSet: (state, action) => ({
      ...state,
      data: action.payload ?? [],
    }),
  },
});

export const { peminjamanSet } = peminjamanSlice.actions;
export default peminjamanSlice.reducer;

export const peminjamanGet = createAsyncThunk(
  "peminjaman/fetch",
  async (_, { dispatch }) => {
    dispatch(loadingSet(true));
    return baseApi
      .get("/jadwalPeminjaman/")
      .then((data) => {
        console.log("dataPeminjaman:", data);
        dispatch(peminjamanSet(data));
      })
      .catch((err) => {
        dispatch(alertSetMessage(err.message));
        dispatch(alertSetError(true));
        dispatch(loadingSet(false));
      })
      .finally(() => {
        dispatch(loadingSet(false));
      });
  }
);

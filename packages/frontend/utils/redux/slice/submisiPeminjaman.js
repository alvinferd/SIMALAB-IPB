import baseApi from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadingSet } from "@/utils/redux/slice/loading";
import {
  alertSetError,
  alertSetSuccess,
  alertSetMessage,
} from "@/utils/redux/slice/alert";

const submisiSlice = createSlice({
  name: "submisi",
  initialState: {
    data: [],
  },
  reducers: {
    submisiSet: (state, action) => ({
      ...state,
      data: action.payload ?? [],
    }),
  },
});

export const { submisiSet } = submisiSlice.actions;
export default submisiSlice.reducer;

export const submisiGet = createAsyncThunk(
  "submisi/fetch",
  async (_, { dispatch }) => {
    dispatch(loadingSet(true));
    return baseApi
      .get("/submisiPeminjaman/")
      .then((data) => {
        console.log("dataSubmisi:", data);
        dispatch(submisiSet(data));
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

export const submisiEdit = createAsyncThunk(
  "submisi/fetch",
  async ({ id, data }, { dispatch }) => {
    dispatch(loadingSet(true));
    console.log("id,data", id, data);
    return baseApi
      .patch(`/CUDsubmisiPeminjaman/${id}/`, data)
      .then((res) => {
        dispatch(alertSetMessage(res.message));
        dispatch(alertSetSuccess(true));
      })
      .catch((err) => {
        dispatch(alertSetMessage(err.message));
        dispatch(alertSetError(true));
      })
      .finally(() => {
        dispatch(loadingSet(false));
      });
  }
);

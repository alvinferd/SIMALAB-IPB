import baseApi from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadingSet } from "./loading";

const inventarisSlice = createSlice({
  name: "inventaris",
  initialState: {
    data: [],
    byId: [],
  },
  reducers: {
    inventaristSet: (state, action) => ({
      ...state,
      data: action.payload ?? [],
    }),
    inventarisByIdSet: (state, action) => ({
      ...state,
      byId: action.payload ?? [],
    }),
  },
});

export const { inventaristSet, inventarisByIdSet } = inventarisSlice.actions;

export const inventarisGet = createAsyncThunk(
  "inventaris/fetch",
  async (_, { dispatch }) => {
    dispatch(loadingSet(true));
    return baseApi
      .get("/alat")
      .then((data) => {
        console.log(data);
        dispatch(inventaristSet(data));
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => dispatch(loadingSet(false)));
  }
);

export const inventarisByIdGet = createAsyncThunk(
  "inventarisById/fetch",
  async (id, { dispatch }) => {
    console.log(id);
    dispatch(loadingSet(true));
    return baseApi
      .get(`/alat/${id}`)
      .then((data) => {
        console.log(data);
        dispatch(inventarisByIdSet(data));
        dispatch(loadingSet(false));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
);

export const inventarisByIdEdit = createAsyncThunk(
  "inventarisByIdEdit/update",
  async ({ data, id }, { dispatch }) => {
    console.log(id);
    dispatch(loadingSet(true));
    return baseApi
      .patch(`/alat/${id}`, data)
      .then((res) => {
        dispatch(loadingSet(false));
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
);

export const inventarisPost = createAsyncThunk(
  "inventarisPost/add",
  async (data, { dispatch }) => {
    console.log("data:", data);
    dispatch(loadingSet(true));
    return baseApi
      .post(`/CUDalat/`, data)
      .then((res) => {
        dispatch(loadingSet(false));
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
);

export const inventarisDelete = createAsyncThunk(
  "inventarisPost/delete",
  async (id, { dispatch }) => {
    console.log("id", id);
    dispatch(loadingSet(true));
    return baseApi
      .delete(`/CUDalat/${id}`)
      .then((res) => {
        dispatch(loadingSet(false));
        dispatch(inventarisGet());
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
);

export default inventarisSlice.reducer;

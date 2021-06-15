import baseApi from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadingSet } from "@/utils/redux/slice/loading";
import {
  alertSetError,
  alertSetSuccess,
  alertSetMessage,
} from "@/utils/redux/slice/alert";

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
        // console.log(data);
        dispatch(inventaristSet(data));
      })
      .catch((err) => {
        // console.log(err.message);
        dispatch(alertSetMessage(err.message));
        dispatch(alertSetError(true));
        dispatch(loadingSet(false));
      })
      .finally(() => {
        dispatch(loadingSet(false));
      });
  }
);

export const inventarisByIdGet = createAsyncThunk(
  "inventarisById/fetch",
  async (id, { dispatch }) => {
    // console.log(id);
    dispatch(loadingSet(true));
    return baseApi
      .get(`/alat/${id}`)
      .then((data) => {
        // console.log(data);
        dispatch(inventarisByIdSet(data));
        dispatch(loadingSet(false));
      })
      .catch((err) => {
        // console.log(err.message);
        dispatch(alertSetMessage(err.message));
        dispatch(alertSetError(true));
        dispatch(loadingSet(false));
      });
  }
);

export const inventarisByIdEdit = createAsyncThunk(
  "inventarisByIdEdit/update",
  async (data, { dispatch }) => {
    // console.log("id:", data.id_alat);
    const fd = new FormData();
    for (var key in data) {
      fd.append(key, data[key]); // formdata doesn't take objects
    }
    dispatch(loadingSet(true));
    return baseApi
      .patch(`/CUDalat/${data.id_alat}/`, fd)
      .then((res) => {
        dispatch(loadingSet(false));
        dispatch(alertSetMessage("Mengedit inventaris telah berhasil"));
        dispatch(alertSetSuccess(true));
        // console.log(res);
      })
      .catch((err) => {
        // console.log(err.message);
        dispatch(alertSetMessage(err.message));
        dispatch(alertSetError(true));
        dispatch(loadingSet(false));
      });
  }
);

export const inventarisPost = createAsyncThunk(
  "inventarisPost/add",
  async (data, { dispatch }) => {
    dispatch(loadingSet(true));
    const fd = new FormData();
    for (var key in data) {
      fd.append(key, data[key]); // formdata doesn't take objects
    }
    console.log("data:", fd);
    return baseApi
      .post(`/CUDalat/`, fd)
      .then((res) => {
        dispatch(loadingSet(false));
        dispatch(alertSetMessage("Menambahkan inventaris telah berhasil"));
        dispatch(alertSetSuccess(true));
        // console.log(res);
      })
      .catch((err) => {
        // console.log(err.message);
        dispatch(alertSetMessage(err.message));
        dispatch(alertSetError(true));
        dispatch(loadingSet(false));
      });
  }
);

export const inventarisDelete = createAsyncThunk(
  "inventarisPost/delete",
  async (id, { dispatch }) => {
    // console.log("id", id);
    dispatch(loadingSet(true));
    return baseApi
      .delete(`/CUDalat/${id}`)
      .then((res) => {
        dispatch(loadingSet(false));
        dispatch(inventarisGet());
        // console.log(res);
        dispatch(alertSetMessage("Menghapus inventaris telah berhasil"));
        dispatch(alertSetSuccess(true));
        window.location.reload();
      })
      .catch((err) => {
        // console.log(err.message);
        dispatch(alertSetMessage(err.message));
        dispatch(alertSetError(true));
        dispatch(loadingSet(false));
      });
  }
);

export default inventarisSlice.reducer;

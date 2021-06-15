import { useRouter } from "next/router";

import Cookie from "js-cookie";
import baseApi, { TOKEN_KEY } from "@/utils/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadingSet } from "./loading";

const userSlice = createSlice({
  name: "user",
  initialState: {
    authenticated: false,
    current: {
      nama: "",
      is_mahasiswa: false,
      is_adminLab: false,
    },
  },
  reducers: {
    userLoggedIn: (state, action) => {
      Cookie.set(TOKEN_KEY, action.payload);
      return {
        ...state,
        authenticated: true,
      };
    },
    userLoggedOut: (state, _action) => {
      Cookie.remove(TOKEN_KEY);
      return {
        ...state,
        authenticated: false,
        current: {
          nama: "",
          is_mahasiswa: false,
          is_adminLab: false,
        },
      };
    },
    userCurrent: (state, action) => ({
      ...state,
      current: action.payload ?? {},
    }),
  },
});

export const { userLoggedIn, userLoggedOut, userCurrent } = userSlice.actions;
export default userSlice.reducer;

export const userGetData = createAsyncThunk(
  "user/userGetData",
  async (username, { dispatch }) => {
    dispatch(loadingSet(true));
    return baseApi
      .get("/orang/")
      .then((res) => {
        dispatch(
          userCurrent(res.filter((item) => item.username === username)[0])
        );
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => dispatch(loadingSet(false)));
  }
);

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (data, { dispatch }) => {
    dispatch(loadingSet(true));
    return baseApi
      .post("/api-token-auth/", data)
      .then((res) => {
        dispatch(userLoggedIn(res.token));
      })
      .catch((err) => {
        dispatch(alertError(err.message));
      })
      .finally(() => {
        dispatch(loadingSet(false));
        dispatch(userGetData(data.username));
      });
  }
);

export const userLogout = createAsyncThunk(
  "user/userLogin",
  async (data, { dispatch }) => {
    dispatch(loadingSet(true));
    dispatch(userLoggedOut());
    dispatch(loadingSet(false));
  }
);

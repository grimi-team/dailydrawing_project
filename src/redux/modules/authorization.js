import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "./diarySlice";

export const __postLogin = createAsyncThunk("postLogin", async (payload) => {
  try {
    const res = await instance.post("/api/user/login", {
      address: "test123",
      password: "Test123!",
    });
    document.cookie = `accessToken=${res.headers.AccessToken}; path=/;`;
    return;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

export const __postCheckId = createAsyncThunk(
  "postCheckId",
  async (payload) => {
    try {
      const res = await instance.post("/api/auth/checkId", {
        username: "username",
      });
      document.cookie = `accessToken=${res.headers.AccessToken}; path=/;`;
      return;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
);

export const __postRegister = createAsyncThunk(
  "postRegister",
  async (payload) => {
    try {
      const res = await instance.post("/api/auth/signup", {
        username: "jung",
        password: "hwan12345",
      });

      document.cookie = `accessToken=${res.headers.AccessToken}`;
      return;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
);

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
};

const authorization = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(__postLogin.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__postLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__postLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })

      .addCase(__postRegister.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__postRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__postRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export default authorization.reducer;

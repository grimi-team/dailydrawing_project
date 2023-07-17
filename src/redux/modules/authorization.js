import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __postLogin = createAsyncThunk("postLogin", async (payload) => {
  try {
    const res = await axios.post("http://1.244.223.183/api/user/login", {
      address: "test12345",
      password: "test12345",
    });
    document.cookie = `accessToken=${res.headers.AccessToken}; path=/;`;
    return;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

export const __postRegister = createAsyncThunk(
  "postRegister",
  async (payload) => {
    try {
      const res = await axios.post("http:/localhost:4000/api/auth/signup", {
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

// 댓글 삭제할 때, commentList 리덕스에 저장하고 전역에서 꺼내준다.
export const __deleteComment = createAsyncThunk("");

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
  // extraReducers: {
  //   //__postLogin promise
  //   [__postLogin.pending]: (state) => {
  //     state.isLoading = true;
  //     state.isError = false;
  //   },
  //   [__postLogin.fulfilled]: (state) => {
  //     state.isLoading = false;
  //     state.isError = false;
  //   },
  //   [__postLogin.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.isError = true;
  //     state.error = action.payload;
  //   },

  //   //__postRegister promise
  //   [__postRegister.pending]: (state) => {
  //     state.isLoading = true;
  //     state.isError = false;
  //   },
  //   [__postRegister.fulfilled]: (state) => {
  //     state.isLoading = false;
  //     state.isError = false;
  //   },
  //   [__postRegister.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.isError = true;
  //     state.error = action.payload;
  //   },
  // },
});

export default authorization.reducer;

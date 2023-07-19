import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.34.144.94:8080",
});

instance.interceptors.request.use((config) => {
  // 쿠키에 저장된 토큰을 꺼내는 것
  const accessToken = document.cookie
    .split(";")
    .filter((cookies) => cookies.includes("accessToken"))[0]
    ?.split("=")[1];
  //헤더에 토큰 담아서 보내기
  if (accessToken) config.headers.authorization = accessToken;
  return config;
});

instance.interceptors.response.use((config) => {
  config.headers.authorization &&
    (document.cookie = `accessToken=${config.headers.authorization}; path=/;`);
  return config;
});

// Diary (1) GET
export const __getDiaryList = createAsyncThunk("getDiaryList", async () => {
  try {
    let res = await instance.get("/api/post", {
      sort: "",
      page: 1,
      size: 5,
    }); // 서버 건들고
    return res.data.data;
  } catch (error) {
    console.log(error.message);
  }
});

// Diary (2) post
export const __postDiaryList = createAsyncThunk(
  "postDiaryList",
  async (payload) => {
    try {
      const res = await instance.post("/api/post", {
        title: "title",
        content: "content",
      });
      return;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
);

// Diary (3) Delete
export const __deleteDiaryList = createAsyncThunk(
  "deleteDiaryList",
  async (postId) => {
    try {
      const res = await axios.delete(`/api/post/${postId}`);
      return;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
);

// Diary (4) Patch
export const __editDiaryList = createAsyncThunk(
  "editDiaryList",
  async (postId) => {
    try {
      const res = await axios.put(`/api/${postId}`, {
        title: "제목1 삭제 제목2 수정",
        content: "내용1 삭제 내용2 수정",
        mood: "기분 수정",
        weather: "날씨 수정",
      });
      return;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
);

const initialState = {
  diaryList: [],
  isLoading: false,
  isError: false,
  error: null,
};

const DiaryListSlice = createSlice({
  name: "diaryList",
  initialState,
  extraReducers: (builder) => {
    builder
      // Diary (1) GET
      .addCase(__getDiaryList.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__getDiaryList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false; // 리렌더링을 하고
        state.diaryList = [...action.payload];
      })
      .addCase(__getDiaryList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })

      // Diary (2) POST
      .addCase(__postDiaryList.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__postDiaryList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__postDiaryList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })

      // Diary (3) Delete
      .addCase(__deleteDiaryList.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__deleteDiaryList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__deleteDiaryList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })

      // Diary (4) Patch
      .addCase(__editDiaryList.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__editDiaryList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__editDiaryList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export default DiaryListSlice.reducer;
export const selectDiary = (state) => state.DiaryListSlice;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 댓글달때 , commentList 리덕스에 저장하고 전역에서 꺼내준다.

export const __postComment = createAsyncThunk("postComment", async (postId) => {
  try {
    const res = await axios.post(
      `http://3.34.144.94:8080/api/post/${postId}/comments`,
      {
        content: "댓글1",
      }
    );
    return;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

export const __deleteComment = createAsyncThunk(
  "deleteComment",
  async (payload) => {
    try {
      const res = await axios.post("http://3.34.144.94:8080/api/user/login", {
        content: "댓글1",
      });
      return;
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }
);
export const __editComment = createAsyncThunk(
  "editComment",
  async ({ postId, commentId }) => {
    try {
      const res = await axios.post(
        `http://3.34.144.94:8080/api/${postId}/comments/${commentId}`,
        {
          content: "댓글1",
        }
      );
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

const CommentListSlice = createSlice({
  name: "commentList",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(__postComment.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__postComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__postComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(__deleteComment.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__deleteComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__deleteComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(__editComment.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__editComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(__editComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
  //  {
  //     addComment: (state, action) => {
  //       return [...state, action.payload];
  //     },
  //     deleteComment: (state, action) => {
  //       return state.filter((item) => item.id !== action.payload);
  //     },
  //   },
});

export const { addComment, deleteComment } = CommentListSlice.actions;
export default CommentListSlice.reducer;

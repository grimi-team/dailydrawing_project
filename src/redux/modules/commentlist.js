import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "./diarySlice";

// 댓글달때 , commentList 리덕스에 저장하고 전역에서 꺼내준다.

export const __setPostComment = createAsyncThunk(
  "setPostComment",
  async (commentList) => {
    console.log(commentList);
    return commentList;
  }
);

export const __postComment = createAsyncThunk(
  "postComment",
  async (payload) => {
    try {
      const res = await instance.post(`/api/post/${payload.postId}/comments`, {
        content: payload.content,
      });
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error.message);
      return Promise.reject(error.message);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "deleteComment",
  async (payload) => {
    try {
      const res = await instance.delete(
        `/api/post/${payload.postId}/comments/${payload.commentId}`
      );
      console.log("삭제아이디", payload.commentId);
      console.log("댓글삭제", res);
      return;
    } catch (error) {
      console.log(error.message);
      return Promise.reject(error.message);
    }
  }
);
// 수정
export const __editComment = createAsyncThunk(
  "editComment",
  async (payload) => {
    try {
      const res = await instance.put(
        `/api/post/${payload.postId}/comments/${payload.commentId}`,
        {
          content: payload.content,
        }
      );
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
      return Promise.reject(error.message);
    }
  }
);

const initialState = {
  commentList: [],
  isLoading: false,
  isError: false,
  error: null,
};

const CommentListSlice = createSlice({
  name: "commentList",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(__setPostComment.pending, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.commentList = [...action.meta.arg];
      })

      .addCase(__postComment.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__postComment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.commentList = [action.payload, ...state.commentList];
      })
      .addCase(__postComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
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
        const ch = [...state.commentList];
        console.log(ch);
        ch.forEach((e) => {
          if (e.id === action.meta.arg.commentId)
            e.content = action.meta.arg.content;
        });
        state.commentList = ch;
      })
      .addCase(__editComment.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default CommentListSlice.reducer;
export const selectCommentList = (state) => state.CommentListSlice;

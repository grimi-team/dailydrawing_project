import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "./diarySlice";

export const __postLike = createAsyncThunk("postLike", async (postId) => {
  try {
    const res = await instance.post(`/api/post/${postId}/likes`, {
      postId: 0,
    });
    return;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

export const __deleteLike = createAsyncThunk("deleteLike", async (postId) => {
  try {
    const res = await instance.post(`/api/post/${postId}/likes`);
    return;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

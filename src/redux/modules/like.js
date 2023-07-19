import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __postLike = createAsyncThunk("postLike", async (postId) => {
  try {
    const res = await axios.post(
      `http://3.34.144.94:8080/api/post/${postId}/likes`,
      {
        address: "test12345",
        password: "test12345",
      }
    );
    return;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

export const __deleteLike = createAsyncThunk("deleteLike", async (postId) => {
  try {
    const res = await axios.post(
      `http://3.34.144.94:8080/api/post/${postId}/likes`
    );
    return;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    comment: "댓글1",
    username: "username",
  },
  {
    id: 1,
    comment: "댓글1",
    username: "username",
  },
];

const CommentListSlice = createSlice({
  name: "commentList",
  initialState,
  reducers: {
    addComment: (state, action) => {
      return [...state, action.payload];
    },
    deleteComment: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addComment, deleteComment } = CommentListSlice.actions;
export default CommentListSlice.reducer;

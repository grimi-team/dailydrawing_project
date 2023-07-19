import { configureStore } from "@reduxjs/toolkit";
import authorization from "../modules/authorization";
import DiaryListSlice from "../modules/diarySlice";
import CommentListSlice from "../modules/commentlist";

const store = configureStore({
  reducer: {
    authorization,
    DiaryListSlice,
    CommentListSlice,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import authorization from "../modules/authorization";
import DiaryListSlice from "../modules/diarylist";
import CommentListSlice from "../modules/commentlist";

const store = configureStore({
  reducer: {
    authorization: authorization,
    DiaryListSlice: DiaryListSlice,
    CommentListSlice: CommentListSlice,
  },
});

export default store;
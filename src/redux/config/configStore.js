import { configureStore } from "@reduxjs/toolkit";
import authorization from "../modules/authorization";
import CommentList from "./../../components/detailpage/CommentList";
import Diaryinput from "./../../components/writingpage/Diaryinput";

const store = configureStore({
  reducer: { authorization, CommentList, diaryList },
});

export default store;

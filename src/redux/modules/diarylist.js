import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "제목1",
    image: "image_path",
    username: "jung",
    commentcount: "2",
    likecount: "3",
    isliked: true,
  },
  {
    id: 2,
    title: "제목1",
    image: "image_path",
    username: "myeongjin",
    commentcount: "30",
    likecount: "40",
    isliked: true,
  },
];

const DiaryListSlice = createSlice({
  name: "diaryList",
  initialState,
  reducers: {
    addDiary: (state, action) => {
      return [...state, action.payload];
    },
    deleteDiary: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addDiary, deleteDiary } = DiaryListSlice.actions;
export default DiaryListSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      userName: "",
      password: "",
    },
  ],
};

export const LoggedState = createSlice({
  name: "login",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.userName = action.payload;
      state.password = action.payload;
    },
  },
});

export const { logIn } = LoggedState.actions;
export default LoggedState.reducer;

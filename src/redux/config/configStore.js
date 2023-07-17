import { configureStore } from "@reduxjs/toolkit";
import authorization from "../modules/authorization";

const store = configureStore({
  reducer: { authorization },
});

export default store;

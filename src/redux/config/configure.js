import { configureStore } from "@reduxjs/toolkit";
import { LoggedState } from "./modules/login";

const store = configureStore({
  reducer: LoggedState,
});

export default store;

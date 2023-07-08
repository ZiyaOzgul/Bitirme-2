import { configureStore } from "@reduxjs/toolkit";
import ReduxReducer from "./slice/ReduxSlice";

export const store = configureStore({
  reducer: {
    store: ReduxReducer,
  },
});

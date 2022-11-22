import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

export type ApplicationDispatch = typeof store.dispatch;

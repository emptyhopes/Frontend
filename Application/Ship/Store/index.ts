import { configureStore } from "@reduxjs/toolkit";

import { reducers } from "@/Application/Ship/Store/Reducers/index";

export const store = configureStore({
  reducer: reducers,
});

export type ApplicationDispatch = typeof store.dispatch;

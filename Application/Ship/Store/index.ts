import { configureStore } from "@reduxjs/toolkit";

import { reducers } from "@/Application/Ship/Store/Reducers/index";

import { UsersAPI } from "@/Application/Containers/Middlewares/Users/UsersMiddleware";

export const store = configureStore({
  reducer: reducers,

  middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(UsersAPI.middleware),
});

export type ApplicationDispatch = typeof store.dispatch;

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { reducers } from "@/Application/Ship/Store/Reducers/index";

import { UsersMiddleware } from "@/Application/Containers/Middlewares/Users/UsersMiddleware";
import { AuthenticationMiddleware } from "@/Application/Containers/Middlewares/Authentication/AuthenticationMiddleware";

export const store = configureStore({
  reducer: reducers,

  middleware: [...getDefaultMiddleware(), UsersMiddleware.middleware, AuthenticationMiddleware.middleware],
});

export type ApplicationDispatch = typeof store.dispatch;

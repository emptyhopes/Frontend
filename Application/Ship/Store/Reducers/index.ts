import { combineReducers } from "@reduxjs/toolkit";

import { UsersMiddleware } from "@/Application/Containers/Middlewares/Users/UsersMiddleware";
import { AuthenticationMiddleware } from "@/Application/Containers/Middlewares/Authentication/AuthenticationMiddleware";

import { AuthenticationReducer } from "@/Application/Containers/Store/Authentication/Slices/Slice";
import { ThemeReducer } from "@/Application/Containers/Store/Theme/Slices/Slice";

const reducers = combineReducers({
  [UsersMiddleware.reducerPath]: UsersMiddleware.reducer,
  [AuthenticationMiddleware.reducerPath]: AuthenticationMiddleware.reducer,

  AuthenticationReducer,
  ThemeReducer,
});

export type RootState = ReturnType<typeof reducers>;

export { reducers };

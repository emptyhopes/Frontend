import { combineReducers } from "@reduxjs/toolkit";

import { UsersMiddleware } from "@/Application/Containers/Middlewares/UsersMiddlewares/UsersMiddleware";
import { AuthenticationMiddleware } from "@/Application/Containers/Middlewares/AuthenticationMiddlewares/AuthenticationMiddleware";

import { AuthenticationReducer } from "@/Application/Containers/Store/Authentication/Slices/Slice";

const reducers = combineReducers({
  [UsersMiddleware.reducerPath]: UsersMiddleware.reducer,
  [AuthenticationMiddleware.reducerPath]: AuthenticationMiddleware.reducer,

  AuthenticationReducer,
});

export type RootState = ReturnType<typeof reducers>;

export { reducers };

import { combineReducers } from "@reduxjs/toolkit";

import { UsersAPI } from "@/Application/Containers/Middlewares/Users/UsersMiddleware";

import { UsersReducer } from "@/Application/Containers/Users/Store/Reducers/Reducer";

const reducers = combineReducers({
  [UsersAPI.reducerPath]: UsersAPI.reducer,

  UsersReducer,
});

export type RootState = ReturnType<typeof reducers>;

export { reducers };

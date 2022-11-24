import { combineReducers } from "@reduxjs/toolkit";

import { MainReducers } from "@/Application/Containers/Main/Store/Main";

const reducers = combineReducers({
  MainReducers,
});

export type RootState = ReturnType<typeof reducers>;

export { reducers };

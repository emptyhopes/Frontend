import { createSlice } from "@reduxjs/toolkit";

import { State } from "@/Application/Containers/Users/Store/States/State";

const { reducer, actions } = createSlice({
  name: "Users",
  initialState: State,
  reducers: {},
});

const UsersReducer = reducer;
const UsersActions = actions;

export { UsersReducer, UsersActions };

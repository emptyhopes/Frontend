import { createSlice } from "@reduxjs/toolkit";

import { State } from "@/Application/Containers/Main/Store/State/State";

const Main = createSlice({
  name: "Main",
  initialState: State,
  reducers: {
    increment(state) {
      state.counts = state.counts + 1;
    },
    decrement(state) {
      state.counts = state.counts - 1;
    },
  },
});

const MainReducers = Main.reducer;
const MainActions = Main.actions;

export { MainReducers, MainActions };

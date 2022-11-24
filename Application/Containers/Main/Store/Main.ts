import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { State } from "@/Application/Containers/Main/Store/State/State";
import { FetchUsers } from "@/Application/Containers/Main/Store/ActionCreators";

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
  extraReducers: (builder) => {
    builder
      .addCase(FetchUsers.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(FetchUsers.rejected.type, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(FetchUsers.fulfilled.type, (state, action: PayloadAction<[]>) => {
        state.isLoading = false;
        state.error = "";
        state.users = action.payload;
      });
  },
});

const MainReducers = Main.reducer;
const MainActions = Main.actions;

export { MainReducers, MainActions };
